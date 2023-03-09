import { NextSeo } from 'next-seo'
import { useShortLink } from '../hooks/useShortLink'

export const TextShortLink = () => {
  useShortLink('l', 'banner')
  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
    </>
  )
}

export default TextShortLink
