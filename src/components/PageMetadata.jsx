import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { schoolPhotos } from '../data/homeContent.js'

const pageMetadata = {
  '/': {
    title: 'YES DS High School | Rajouri, Jammu and Kashmir',
    description:
      'Discover YES DS High School in Dhanore / Kheora, Rajouri, Jammu and Kashmir. Explore school information, academics, facilities and photographs.',
  },
  '/about': {
    title: 'About the School | YES DS High School',
    description:
      'Learn about YES DS High School through school-supplied photographs and verified information shared by the school.',
  },
  '/academics': {
    title: 'Academics | YES DS High School',
    description:
      'View school-supplied photographs of classroom learning and student activities at YES DS High School.',
  },
  '/facilities': {
    title: 'Campus & Facilities | YES DS High School',
    description:
      'View photographs of the YES DS High School campus and an indoor learning space.',
  },
  '/gallery': {
    title: 'Photo Gallery | YES DS High School',
    description:
      'Browse campus, learning and student activity photographs supplied by YES DS High School.',
  },
  '/contact': {
    title: 'Contact | YES DS High School',
    description:
      'Find the location of YES DS High School in Dhanore / Kheora, Rajouri, Jammu and Kashmir.',
  },
}

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }

  element.setAttribute('content', content)
}

function setCanonical(pathname, siteUrl) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!siteUrl) {
    element?.remove()
    return
  }

  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.append(element)
  }

  element.href = new URL(pathname, `${siteUrl.replace(/\/+$/, '')}/`).href
}

function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? {
      title: 'Page Not Found | YES DS High School',
      description: 'The requested page could not be found on the YES DS High School website.',
    }
    const siteUrl = import.meta.env.VITE_SITE_URL
    const imageUrl = new URL(schoolPhotos.campusAssembly.src, siteUrl || window.location.origin).href

    document.title = metadata.title
    setCanonical(pathname, siteUrl)
    setMeta('name', 'description', metadata.description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', metadata.title)
    setMeta('property', 'og:description', metadata.description)
    setMeta('property', 'og:image', imageUrl)
    setMeta('property', 'og:image:alt', schoolPhotos.campusAssembly.alt)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', metadata.title)
    setMeta('name', 'twitter:description', metadata.description)
    setMeta('name', 'twitter:image', imageUrl)
    setMeta('name', 'twitter:image:alt', schoolPhotos.campusAssembly.alt)
  }, [pathname])

  return null
}

export default PageMetadata
