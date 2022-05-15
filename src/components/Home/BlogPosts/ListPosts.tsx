import Link from 'next/link'
import styled from 'styled-components'
import { PostInfo } from '../../../services/postsService'

export const ListPosts = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <BlogPostsCardContainer>
      <Header>
        <span>Leggi anche</span>
      </Header>
      {posts.map((p) => (
        <PostItem post={p} key={p.slug} />
      ))}
    </BlogPostsCardContainer>
  )
}

const BlogPostsCardContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  padding-left: 10rem;
  width: 100%;
`

const Header = styled.div`
  font-weight: 700;
  font-size: 1.17rem;
  text-transform: uppercase;
  border-bottom: 1px solid ${(p) => p.theme.black};
  margin-bottom: 1.5rem;

  span {
    padding-right: 1rem;
    border-bottom: 5px solid ${(p) => p.theme.secondaryColor};
  }
`

const PostItem = ({ post }: { post: PostInfo }) => {
  return (
    <Link href={`/post/${post.slug}`} passHref>
      <PostItemWrapper>
        <PostThumb src={post.header.socialImage} />
        <PostText>
          <PostTitle>{post.header.title}</PostTitle>
          <PostDescription>{post.header.metaDesc}</PostDescription>
        </PostText>
      </PostItemWrapper>
    </Link>
  )
}

const PostItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 1rem;

  &:hover {
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  }
`

const PostText = styled.div`
  padding-left: 1rem;
`

const PostThumb = styled.img`
  margin-top: 1rem;
  width: 100px;
  height: 100px;
  filter: grayscale();
`
const PostTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`
const PostDescription = styled.span`
  margin-top: 0;

  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.9;

  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
`
