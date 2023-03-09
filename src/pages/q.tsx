import { NextSeo } from 'next-seo'
import { useShortLink } from '../hooks/useShortLink'

export const QRCodeShortLink = () => {
  useShortLink('q', 'qrcode')
  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
    </>
  )
}

export default QRCodeShortLink
