import { useShortLink } from '../hooks/useShortLink'

export const QRCodeShortLink = () => {
  useShortLink('q', 'qrcode')
  return <></>
}

export default QRCodeShortLink
