import styled, { css, CSSProp, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components'
import Image, { ImageProps } from 'next/image'
import { createOverlay } from './style'

type HeroImageProps = { image: StaticImageData; overlayCss?: CSSProp<DefaultTheme> | undefined } & Omit<
  ImageProps,
  'src' | 'height' | 'width'
>

export function HeroImage({ image, overlayCss, ...others }: HeroImageProps) {
  return (
    <ImageContainer customCss={createOverlay(overlayCss)}>
      <Image
        src={image.src}
        blurDataURL={image.blurDataURL}
        layout="fill"
        objectFit="cover"
        alt="Hero Image"
        priority={true}
        placeholder="blur"
        {...others}
      />
    </ImageContainer>
  )
}

const ImageContainer = styled.div<{ customCss: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  height: 100%;
  width: 100%;
  margin-right: 2rem;
  position: relative;
  img {
    border-radius: 2%;
  }
  ${(p) => p.customCss ?? css``}
`
