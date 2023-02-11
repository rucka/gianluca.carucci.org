import { useState } from 'react'
import styled, { css } from 'styled-components'
import { device } from '../../../device'
import { PostInfo } from '../../../services/postsService'
import { ALink } from '../../ALink'
import { Empty } from '../../Empty'

export const ListPosts = ({ posts, count }: { posts: PostInfo[]; count?: number }) => {
  const [pageNumber, setPageNumber] = useState<number>(0)

  const startIndex = count ? pageNumber * count : 0
  const endIndex = count ? startIndex + count : undefined

  const getPosts = () => {
    if (!count) {
      return posts
    }
    return posts.slice(startIndex, endIndex)
  }
  const hasPrevious = () => {
    return pageNumber > 0
  }
  const hasNext = () => {
    return endIndex && endIndex < posts.length
  }

  console.log('count', count)
  console.log('post.length', posts.length)
  console.log('startIndex', startIndex)
  console.log('endIndex', endIndex)
  console.log('hasPrevious', hasPrevious())
  console.log('hasNext', hasNext())
  console.log('######')

  const goToPrevious = () => {
    if (!hasPrevious()) {
      return
    }
    setPageNumber(pageNumber - 1)
  }
  const goToNext = () => {
    if (!hasNext()) {
      return
    }
    setPageNumber(pageNumber + 1)
  }

  const Pagination = () => {
    if (!count) {
      return <Empty />
    }
    return (
      <PaginationButtons>
        <PaginationButton disabled={!hasPrevious()} onClick={goToPrevious}>
          precedente
        </PaginationButton>
        <PaginationButton disabled={!hasNext()} onClick={goToNext}>
          prossima
        </PaginationButton>
      </PaginationButtons>
    )
  }

  return (
    <BlogPostsCardContainer>
      <Header>
        <span>Leggi anche</span>
      </Header>
      <Pagination />
      {getPosts().map((p) => (
        <PostItem post={p} key={p.slug} />
      ))}
    </BlogPostsCardContainer>
  )
}

const BlogPostsCardContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  @media ${device.desktop} {
    padding-left: 10rem;
  }
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

const PaginationButtons = styled.div`
  display: flex;
  justify-content: end;
  margin: 5px;
`
const PaginationButton = styled.a<{ disabled: boolean }>`
  margin: 5px;
  cursor: pointer;
  font-style: italic;

  border-bottom: black 2px solid;

  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.5;
      text-decoration: none;
      border-bottom: none;
    `}
`

const PostItem = ({ post }: { post: PostInfo }) => {
  return (
    <ALink href={`/post/${post.slug}`} passHref>
      <PostItemWrapper>
        <PostThumb src={post.header.socialImage} />
        <PostText>
          <PostTitle>{post.header.title}</PostTitle>
          <PostDescription>{post.header.metaDesc}</PostDescription>
        </PostText>
      </PostItemWrapper>
    </ALink>
  )
}

const PostItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    flex-direction: row;
  }

  &:hover {
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  }
`

const PostText = styled.div`
  @media ${device.laptop} {
    padding-left: 1rem;
  }
`

const PostThumb = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100px;
  height: 100px;
  filter: grayscale();

  @media ${device.laptop} {
    margin-bottom: unset;
  }
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
