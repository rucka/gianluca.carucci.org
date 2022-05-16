import md from 'markdown-it'
import Head from 'next/head'
import styled, { css, CSSProp, DefaultTheme } from 'styled-components'
import Layout from '../../components/Layout'
import { Header, postList, readPostFromSlug } from '../../services/postsService'
import { Comments } from '../../components'

type PostProps = { slug: string; header: Header; content: string }

export default function PostPage({ slug, header, content }: PostProps) {
  const mdRender = md()
  const __html = mdRender.render(content)
  return (
    <>
      <Head>
        <title>Gianluca Carucci - Software Engineer</title>
        <meta name="description" content="Gianluca Carucci - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout mainCss={mainCss}>
        <PostContainer>
          <PostHeader>
            <PostTitle>{header.title}</PostTitle>
            <span>{header.metaDesc}</span>
          </PostHeader>
          <PostImage src={header.socialImage ?? ''} />
          <PostContent dangerouslySetInnerHTML={{ __html }} />
          <Comments
            identifier={slug}
            title={header.title}
            css={css`
              margin-top: 5rem;
              max-width: 760px;
              margin-left: auto;
              margin-right: auto;
            `}
          />
        </PostContainer>
      </Layout>
    </>
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
      slug,
      header,
      content
    }
  }
}

const mainCss: CSSProp<DefaultTheme> = css`
  /* margin-top: 60px; */
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

const PostContainer = styled.div`
  position: relative;
  margin-bottom: 4.28rem;
  padding-top: 4.28rem;
`
const PostHeader = styled.header`
  max-width: 970px;
  margin-bottom: 4.28rem;
  margin-left: auto;
  margin-right: auto;
  span {
    display: inline-block;
    font-size: 1.28rem;
    font-weight: 400;
    width: 100%;
    text-align: center;
  }
`

const PostTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3.8571rem;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  font-size: 3.8571rem;
`

const PostImage = styled.img`
  object-fit: cover;
  max-width: 1110px;
  max-height: 720px;
  object-position: 0 0;
  width: 100%;
  vertical-align: middle;
  border-style: none;
  margin-bottom: 4.28rem;
`

const PostContent = styled.div`
  font-family: 'Roboto', serif;
  line-height: 1.5;

  max-width: 760px;
  margin-left: auto;
  margin-right: auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 3.4rem;
  }
  h1 {
    font-size: 3.8571rem;
    margin-bottom: 3.4rem;
  }
  h2 {
    font-size: 3.1428rem;
    margin-bottom: 3.4rem;
  }
  h3 {
    font-size: 2.4285rem;
    margin-bottom: 1.71rem;
  }
  h4 {
    font-size: 2rem;
    margin-bottom: 2.28rem;
  }
  h5 {
    font-size: 1.715rem;
    line-height: 1.4;
    margin-bottom: 2rem;
  }
  h6 {
    font-size: 1.286rem;
    margin-bottom: 1.6rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  blockquote {
    font-family: 'Playfair Display', serif;
    font-size: 1.71rem;
    font-weight: 700;
    margin: 3.42rem 0 2.4rem;
    padding-top: 4.4rem;
    position: relative;
    line-height: 1.6;

    cite {
      font-family: Roboto, sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
    }
  }

  pre {
    padding: 10px;
    border: 2px ${(p) => p.theme.black} dotted;
  }
`
