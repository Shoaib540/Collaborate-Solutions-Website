# terafab-clone

High-fidelity visual clone of [https://terafab.ai](https://terafab.ai).

## Stack

Next.js 15 + mirrored `index` / `styles.css` / `main.js` with downloaded assets from terafab.ai. The root route serves the exact mirrored HTML.

## Run

```bash
npm install
npm run dev
# http://127.0.0.1:3000
```

## Note

The lunar mass-driver modal film uses the same SpaceX Azure CDN URL as the live site (~282MB) and is not vendored locally.
