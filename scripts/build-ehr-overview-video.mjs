/**
 * Build narrated Collaborate Solutions EHR overview video:
 * real UI screenshots + Edge TTS voiceover.
 */
import { mkdirSync, writeFileSync, existsSync } from 'fs'
import { join, dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { spawnSync } from 'child_process'
const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const imgDir = join(root, 'public/media/images')
const outDir = join(root, 'public/media/videos')
const workDir = join(root, 'demo-video/overview')
mkdirSync(workDir, { recursive: true })
mkdirSync(outDir, { recursive: true })

const scenes = [
  {
    id: '01-intro',
    image: 'ehr-soft-dashboard.jpg',
    text: 'Welcome to Collaborate Solutions. This is Collaborate EHR — one connected platform for clinics and hospitals in the United States and across Saudi Arabia and the Gulf.',
  },
  {
    id: '02-chart',
    image: 'ehr-soft-chart.jpg',
    text: 'Clinical charting brings specialty templates, SOAP notes, medications, allergies, and decision support into one clean patient chart — so providers document faster without leaving the visit.',
  },
  {
    id: '03-schedule',
    image: 'ehr-soft-schedule.jpg',
    text: 'Practice management covers multi-provider scheduling, check-in, reminders, and front-desk workflows that keep the day on track for ambulatory teams.',
  },
  {
    id: '04-billing',
    image: 'ehr-soft-billing.jpg',
    text: 'Revenue cycle tools handle eligibility, claim scrubbing, denials, and collections for US payers — and NPHIES eligibility, pre-authorization, and claims in the Kingdom.',
  },
  {
    id: '05-telehealth',
    image: 'ehr-soft-telehealth.jpg',
    text: 'Telehealth is embedded in the same chart: browser-based visits, waiting room, e-prescribing, and multi-party consults — plus remote patient monitoring for chronic care.',
  },
  {
    id: '06-interop',
    image: 'ehr-soft-interop.jpg',
    text: 'Interoperability runs on HL7 FHIR R4 APIs for labs, health information exchange, patient access, MIPS quality reporting, and Saudi NPHIES national exchange.',
  },
  {
    id: '07-close',
    image: 'ehr-soft-dashboard.jpg',
    text: 'From documentation and billing to telehealth, care management, and compliance — Collaborate Solutions EHR helps your team focus on patients. Request a personalized demo today.',
  },
]

function ff(args) {
  const r = spawnSync('ffmpeg', args, { encoding: 'utf8', shell: true })
  if (r.status !== 0) {
    console.error(r.stderr?.slice(-800) || r.stdout)
    throw new Error(`ffmpeg failed: ${args.slice(0, 6).join(' ')}`)
  }
}

// TTS via edge-tts Python module
const scriptPath = join(workDir, 'narration.txt')
const fullNarration = scenes.map((s) => s.text).join(' ')
writeFileSync(scriptPath, fullNarration)

const audioPath = join(workDir, 'narration.mp3')
console.log('Generating voice…')
const tts = spawnSync('py', ['-3', join(root, 'scripts/gen_narration.py')], {
  encoding: 'utf8',
  shell: true,
})
if (tts.status !== 0) {
  console.error(tts.stderr || tts.stdout)
  throw new Error('TTS failed — is edge-tts installed? py -3 -m pip install edge-tts')
}
console.log(tts.stdout.trim())

// Probe audio duration
const probe = spawnSync(
  'ffprobe',
  ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', audioPath],
  { encoding: 'utf8', shell: true },
)
const audioDur = parseFloat(probe.stdout.trim()) || 70
const perScene = audioDur / scenes.length
console.log(`Audio ${audioDur.toFixed(1)}s → ${perScene.toFixed(1)}s per scene`)

// Build concat list with durations matching audio
const concatPath = join(workDir, 'concat.txt')
const lines = []
for (const s of scenes) {
  const img = join(imgDir, s.image).replace(/\\/g, '/')
  if (!existsSync(join(imgDir, s.image))) throw new Error(`Missing ${s.image}`)
  lines.push(`file '${img}'`)
  lines.push(`duration ${perScene.toFixed(3)}`)
}
// last frame repeat for concat demuxer
const last = join(imgDir, scenes[scenes.length - 1].image).replace(/\\/g, '/')
lines.push(`file '${last}'`)
writeFileSync(concatPath, lines.join('\n'))

const silentVideo = join(workDir, 'silent.mp4')
const finalMp4 = join(outDir, 'ehr-software-ui.mp4')
const finalWebm = join(outDir, 'ehr-software-ui.webm')

console.log('Encoding video…')
ff([
  '-y',
  '-f',
  'concat',
  '-safe',
  '0',
  '-i',
  concatPath,
  '-vf',
  'scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,format=yuv420p,fps=30',
  '-c:v',
  'libx264',
  '-pix_fmt',
  'yuv420p',
  '-t',
  String(audioDur),
  silentVideo,
])

ff([
  '-y',
  '-i',
  silentVideo,
  '-i',
  audioPath,
  '-c:v',
  'copy',
  '-c:a',
  'aac',
  '-b:a',
  '192k',
  '-shortest',
  '-movflags',
  '+faststart',
  finalMp4,
])

console.log('Wrote', finalMp4)
// WebM optional — skip by default (slow). Re-enable if needed.
if (process.env.BUILD_WEBM === '1') {
  ff(['-y', '-i', finalMp4, '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '36', '-c:a', 'libopus', '-b:a', '128k', finalWebm])
  console.log('Wrote', finalWebm)
}
