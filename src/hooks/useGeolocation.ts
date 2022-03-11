import { useEffect, useState } from 'react'
import cookieCutterBuilder, { CookieCutter } from 'cookie-cutter'

type Country = 'en' | 'it'
const defaultCountry: Country = 'en'

const useGeolocation: () => {
  country?: Country
} = () => {
  const [country, setCountry] = useState<Country | undefined>()
  useEffect(() => {
    const f = async () => {
      if (!country && document) {
        const cookieCutter = cookieCutterBuilder(document)
        const countryIso = await getCountry(cookieCutter)
        setCountry(countryIso)
      }
    }
    f().catch((e) => {
      console.warn('error:', e)
      setCountry(defaultCountry)
    })
  }, [country])
  return { country }
}

export default useGeolocation

const countryCookieKey = 'userCountry'
const getCountry: (cookieCutter: CookieCutter) => Promise<Country> = async (cookieCutter) => {
  const cookie = normalize(cookieCutter.get(countryCookieKey))
  if (cookie) {
    return cookie
  }
  const r = await fetch('https://ipapi.co/json/')
  const json = await r.json()
  const countryIso = json.country.toLowerCase() ?? defaultCountry
  cookieCutter.set(countryCookieKey, countryIso, {
    expires: expiresDate()
  })
  return countryIso
}

const expiresDate = () => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d
}

const normalize: (s?: string) => Country | undefined = (s) => {
  if (!s) {
    return undefined
  }
  switch (s) {
    case 'it':
      return 'it'
    default:
      return 'en'
  }
}
