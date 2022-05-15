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

  const [feature, ...rest] = posts

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
      <FeaturePost post={feature} />
      <ListPosts posts={rest} />
    </Section>
  )
}
