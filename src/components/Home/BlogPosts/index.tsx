import { css } from 'styled-components'
import { device } from '../../../device'
import { PostInfo } from '../../../services/postsService'
import { Empty } from '../../Empty'
import { Section } from '../../Section'
import { FeaturePost } from './FeaturePost'
import { ListPosts } from './ListPosts'

type BlogPostsProps = { posts: PostInfo[] }

export default function BlogPosts({ posts }: BlogPostsProps) {
  if (posts.length === 0) {
    return <Empty />
  }
  const all = splitFeaturedAndRest(posts)
  if (!all) {
    return <Empty />
  }
  const { featured, rest } = all

  return (
    <Section
      name="blog"
      css={css`
        margin-top: 50px;
        padding-left: 3rem;
        padding-right: 3rem;
        padding-bottom: 50px;
        @media ${device.tablet} {
          padding-left: 5rem;
          padding-right: 5rem;
        }
        @media ${device.laptop} {
          padding-right: 5rem;
        }
      `}
      sectionItemCss={css`
        &:nth-child(3) {
          margin-top: 4rem;
          @media ${device.laptop} {
            margin-top: 0;
          }
        }
        @media ${device.desktop} {
          justify-content: flex-start;
          padding-right: ${(p) => p.theme.containerMargin};
        }
      `}>
      <FeaturePost post={featured} />
      <ListPosts posts={rest} />
    </Section>
  )
}

const splitFeaturedAndRest: (posts: PostInfo[]) => { featured: PostInfo; rest: PostInfo[] } | undefined = (posts) => {
  if (posts.length === 0) {
    return
  }
  const featureds = posts.filter((p) => p.header.featured)
  const featured = featureds.length > 0 ? featureds[0] : posts[posts.length - 1]
  const rest = posts.filter((p) => p != featured)
  return { featured, rest }
}
