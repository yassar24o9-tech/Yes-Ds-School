import { writeFile } from 'node:fs/promises'
import process from 'node:process'

const siteUrl = process.env.SITE_URL ?? process.env.VITE_SITE_URL
const routes = ['/', '/about', '/academics', '/facilities', '/gallery', '/contact']

if (!siteUrl) {
  throw new Error('Set SITE_URL or VITE_SITE_URL to the confirmed production origin before generating sitemap.xml.')
}

const parsedSiteUrl = new URL(siteUrl)
if (!['http:', 'https:'].includes(parsedSiteUrl.protocol)
  || parsedSiteUrl.pathname !== '/'
  || parsedSiteUrl.search
  || parsedSiteUrl.hash) {
  throw new Error('SITE_URL must be a production http(s) origin with no path, query, or fragment.')
}

const entries = routes.map((route) => {
  const url = new URL(route, parsedSiteUrl.origin).href.replaceAll('&', '&amp;')
  return `  <url><loc>${url}</loc></url>`
})

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries,
  '</urlset>',
  '',
].join('\n')

await writeFile(new URL('../public/sitemap.xml', import.meta.url), sitemap)
