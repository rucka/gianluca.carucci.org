import styled from 'styled-components'
import { PostInfo } from '../../../services/postsService'
import { Empty } from '../../Empty'

export const ListPosts = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <BlogPostsCardContainer>
      {posts.map((p) => (
        <PostCard post={p} />
      ))}
    </BlogPostsCardContainer>
    //        <BlogPostContainer>
    //      {posts.map((p) => (
    //       <Link href={`/post/${p.slug}`} key={p.slug} passHref>
    //         <h1 style={{ textDecoration: 'underline', cursor: 'pointer' }}>{p.header.title}</h1>
    //       </Link>
    //     ))}
    //   </BlogPostContainer>
  )
}

const BlogPostsCardContainer = styled.div``

const PostCard = ({}: { post: PostInfo }) => {
  return <Empty />
}
