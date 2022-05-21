import { css } from 'styled-components'
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
        padding-left: 5rem;
        padding-right: ${(p) => p.theme.containerMargin};
        padding-bottom: 50px;
      `}
      sectionItemCss={css`
        justify-content: flex-start;
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
