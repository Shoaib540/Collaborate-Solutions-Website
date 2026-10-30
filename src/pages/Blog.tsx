import { Link, useParams, Navigate } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { posts } from '../data/blog'

export function Blog() {
  return (
    <>
      <Seo
        title="Blog"
        description="Notes on marketing, healthcare IT, leadership, and building systems that last — from Collaborate Solutions."
        path="/blog"
      />
      <PageHero
        eyebrow="Blog"
        title="Latest thinking & news"
        subtitle="Notes on marketing, healthcare IT, leadership, and building systems that last."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full border border-[#d5dcd4] bg-white p-6 transition hover:border-[#1b4332]/40"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a7340]">{post.category}</p>
                  <h2 className="mt-3 text-2xl font-extrabold text-black group-hover:text-[#1b4332]">{post.title}</h2>
                  <p className="mt-2 text-xs text-black">{post.date}</p>
                  <p className="mt-4 line-clamp-3 text-sm text-black">{post.excerpt}</p>
                  <span className="mt-5 inline-block text-sm font-bold text-[#1b4332]">Read more</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <PageHero eyebrow={post.category} title={post.title} subtitle={`${post.date} · Collaborate Solutions`} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-lg leading-relaxed text-black">{post.excerpt}</p>
            {post.body.split('\n\n').map((para) => (
              <p key={para.slice(0, 24)} className="mt-6 text-base leading-relaxed text-black">
                {para}
              </p>
            ))}
            <Link to="/blog" className="mt-10 inline-block text-sm font-bold text-[#1b4332]">
              ← Back to blog
            </Link>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
