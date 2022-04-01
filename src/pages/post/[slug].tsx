import md from 'markdown-it'
import Image from 'next/image'
import styled from 'styled-components'
import { Header, postList, readPostFromSlug } from '../../services/postsService'

type PostProps = { header: Header; content: string }

export default function PostPage({ header, content }: PostProps) {
  const mdRender = md()
  const __html = mdRender.render(content)
  return (
    <PostContainer>
      <PostTitle>{header.title}</PostTitle>
      <PostHeader header={header} />
      <PostContent dangerouslySetInnerHTML={{ __html }} />
      <PostFooter />
      <PostSuggested />
      <PostComments />
    </PostContainer>
  )
}

export async function getStaticPaths() {
  const paths = (await postList()).map((p) => ({ params: { slug: p.slug } }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const { header, content } = await readPostFromSlug(slug)
  return {
    props: {
      header,
      content
    }
  }
}

const PostContainer = styled.div``

const PostTitle = styled.h1``

const PostHero = styled(Image)``

const PostContent = styled.div`
  h1 {
    color: red;
  }
`

const PostHeader = ({ header }: { header: Header }) => {
  const PostImage = () => {
    if (!header.socialImage) {
      return <></>
    }
    return <PostHero src={header.socialImage} width={650} height={340} alt="" />
  }

  return (
    <>
      <PostTitle>{header.title}</PostTitle>
      <PostImage />
    </>
  )
}
const PostFooter = () => <></>
const PostSuggested = () => <></>
const PostComments = () => <></>
