import Link from 'next/link'
import styled, { css } from 'styled-components'
import { device } from '../../../device'
import { PostInfo } from '../../../services/postsService'
import { createOverlay } from '../../style'

export const FeaturePost = ({ post }: { post: PostInfo }) => {
  return (
    <Link href={`/post/${post.slug}`} key={post.slug} passHref>
      <Card imageSrc={post.header.socialImage}>
        <CardHighlight>
          <span>in evidenza</span>
        </CardHighlight>
        <CardTitle>
          <span>{post.header.title}</span>
        </CardTitle>
        <CardInfo>{post.header.metaDesc}</CardInfo>
      </Card>
    </Link>
  )
}

const CardHighlight = styled.h3`
  text-transform: uppercase;
  color: ${(p) => p.theme.white};
  padding-left: 10px;
  span {
    padding: 5px;
    border-radius: 5px;
    background-color: ${(p) => p.theme.black};
  }
`
const CardTitle = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 2rem;

  @media ${device.laptop} {
    margin-top: 0rem;
  }

  span {
    padding: 5px;
    /* background-color: #7fdeae; */
    background-color: ${(p) => p.theme.white};
    font-size: 0.75rem;

    @media ${device.tablet} {
      margin-top: 0;
      font-size: 2rem;
      line-height: 3.25rem;
    }
    @media ${device.laptop} {
      font-size: 1.25rem;
      line-height: unset;
    }
    @media ${device.desktop} {
      font-size: unset;
    }
  }
`
const CardInfo = styled.p`
  transition: margin 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
  color: ${(p) => p.theme.white};
  margin-top: 1000px;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
`

const Card = styled.div<{ imageSrc?: string }>`
  cursor: pointer;

  font-family: 'Roboto';
  z-index: 0;
  position: relative;
  /* max-width: 350px; */
  width: 100%;
  padding: 10px;
  height: 400px;
  background-image: ${(p) => css`url(${p.imageSrc})` ?? css`linear-gradient(120deg, #ffd89b, #19547b)`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  object-fit: cover;

  overflow: hidden;
  /* box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5); */

  @media ${device.laptop} {
    width: 70%;
  }

  ${createOverlay(css`
    z-index: -1;
    transition: opacity 1s cubic-bezier(0.33, 0.66, 0.66, 1);
    /* background: #F3F065; */
    background: #ef6164;
    opacity: 1;
  `)}

  &:hover {
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);

    ${CardInfo} {
      margin-top: 0;
    }
    &:after {
      opacity: 0.75;
    }
  }
`
