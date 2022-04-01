import Link from 'next/link'
import styled from 'styled-components'
import { PostInfo } from '../../services/postsService'

const BlogPostContainer = styled.div`
  display: block;
`

type BlogPostsProps = { posts: PostInfo[] }

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <BlogPostContainer>
      {posts.map((p) => (
        <Link href={`/post/${p.slug}`} key={p.slug} passHref>
          <h1 style={{ textDecoration: 'underline', cursor: 'pointer' }}>{p.header.title}</h1>
        </Link>
      ))}
    </BlogPostContainer>
  )
}
