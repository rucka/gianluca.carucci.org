import { DiscussionEmbed } from 'disqus-react'
import styled, { CSSProp, DefaultTheme } from 'styled-components'
import { Empty } from './Empty'

type CommentsProps = { shortname?: string; identifier: string; title?: string; css?: CSSProp<DefaultTheme> }
export const Comments = ({ shortname, identifier, title, css }: CommentsProps) => {
  const url = typeof window !== 'undefined' ? window.location.href : undefined

  const disqusAccount = shortname ?? process.env.NEXT_PUBLIC_DISQUS_SHORTNAME
  if (!url || !disqusAccount) {
    return <Empty />
  }

  return (
    <DiscussionContainer css={css}>
      <DiscussionEmbed
        shortname={disqusAccount}
        config={{
          url,
          identifier: identifier,
          title: title ?? identifier,
          language: 'it'
        }}
      />
    </DiscussionContainer>
  )
}

const DiscussionContainer = styled.div<{ css?: CSSProp<DefaultTheme> }>`
  ${(p) => p.css ?? ''}
`
