import { useEffect } from 'react'
import { useRouter } from './useRouter'

export const useShortLink = (prefix: string, medium: string) => {
  const router = useRouter()

  useEffect(() => {
    const pathname = window.location.pathname.toLowerCase()
    let d: string | undefined
    if (pathname.includes('/q/ggj') || pathname.includes('/l/ggj')) {
      d =
        'https://www.kering.com/en/talent/job-offers?search_career%5Bbrand%5D%5B%5D=Gucci&search_career%5BjobCountry%5D%5B%5D=Italy&search_career%5BjobFamily%5D%5B%5D=Information%20Technology&'
    } else {
      const path = normalizePath(prefix)(pathname)
      d = redirectTo(medium)(path)
    }
    if (d) {
      router.goto(d)
      return
    }
  }, [])
}

const normalizePath = (prefix: string) => (s: string) => {
  if (s === '/' || s === `/${prefix}` || s === `/${prefix}/`) {
    return ''
  }
  return s.replace('/' + prefix + '/', '')
}
const redirectTo: (medium: string) => (p: string) => string | undefined = (medium) => (p) => {
  if (p === '' || !p.startsWith('c')) {
    return '/404'
  }
  const source = p.startsWith('cc') ? 'code' : p.startsWith('cs') ? 'slide' : undefined
  if (!source) {
    return '/404'
  }
  const conference = p.slice(2)
  if (conference === 'pycon22') {
    return `/conference/2022/pyconit?utm_source=${source}&utm_medium=${medium}&utm_campaign=${conference}`
  }
  return undefined
}
