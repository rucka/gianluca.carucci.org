import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const ShortLink = () => {
  const router = useRouter()

  useEffect(() => {
    const path = normalizePath(window.location.pathname.toLowerCase())
    const d = redirectTo(path)
    if (d) {
      router.push(d)
      return
    }
    console.log(path)
  }, [])

  return <></>
}

export default ShortLink

const normalizePath = (s: string) => {
  if (s === '/' || s === '/l' || s === '/l/') {
    return ''
  }
  return s.replace('/l/', '')
}
const redirectTo: (p: string) => string | undefined = (p) => {
  if (p === '' || !p.startsWith('c')) {
    return '/404'
  }
  const source = p.startsWith('cc') ? 'code' : p.startsWith('cs') ? 'slide' : undefined
  if (!source) {
    return '/404'
  }
  const conference = p.slice(2)
  if (conference === 'pycon22') {
    return `/conference/2022/pyconit?utm_source=${source}&utm_medium=banner&utm_campaign=${conference}`
  }
  return undefined
}
