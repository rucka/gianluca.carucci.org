import React from 'react'
import { css } from 'styled-components'
import { CoverImage } from '../../../assets/images'
import { device } from '../../../device'
import { HeroImage } from '../../HeroImage'
import { Section } from '../../Section'
import { heroHeightCss } from '../../style'
import { Headline } from './Headline'

export default function Hero() {
  return (
    <Section
      name="home"
      sectionNameCss={css`
        @media ${device.laptop} {
          top: calc((100% - ${(p) => p.theme.header.headerHeight}) / 2);
        }
      `}
      css={css`
        ${heroHeightCss}
        padding-right: 1rem;

        @media ${device.tablet} {
          min-height: 600px;
        }
        @media ${device.laptop} {
          min-height: 600px;
        }
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
