import React from 'react'
import { css } from 'styled-components'
import { CoverImage } from '../../../assets/images'
import { HeroImage } from '../../HeroImage'
import { Section } from '../../Section'
import { heroHeightCss } from '../../style'
import { Headline } from './Headline'

export default function Hero() {
  return (
    <Section
      name="home"
      sectionNameCss={css`
        top: calc((100% - ${(p) => p.theme.header.headerHeight}) / 2);
      `}
      css={css`
        ${heroHeightCss}
        min-height: 500px;
      `}
      sectionItemCss={css`
        align-items: center;
      `}>
      <Headline />
      <HeroImage
        image={CoverImage}
        objectPosition="50% 85%"
        overlayCss={css`
          background-image: linear-gradient(120deg, #ffd89b, #19547b);
          opacity: 0.4;
          border-radius: 2%;
        `}
      />
    </Section>
  )
}
