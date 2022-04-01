import { readdir, readFile } from 'fs/promises'
import matter from 'gray-matter'

export type Header = {
  title?: string
  metaTitle?: string
  metaDesc?: string
  socialImage?: string
  data?: string
  tags?: string[]
}
export type PostInfo = { slug: string; header: Header }

export const postList: () => Promise<PostInfo[]> = async () => {
  const files = await readdir('posts')
  return await Promise.all(
    files.map(async (fileName) => {
      const { slug, header } = await readPost(fileName)
      return {
        slug,
        header
      }
    })
  )
}

export const readPost = async (fileName: string) => {
  const fileData = await readFile(`posts/${fileName}`, 'utf-8')
  const { data: frontmatter, content } = matter(fileData)
  const slug = fileName.replace('.md', '')
  return { slug, header: toHeader(frontmatter), content }
}

export const readPostFromSlug = async (slug: string) => {
  return readPost(`${slug}.md`)
}

export const readPostContentFromSlug = async (slug: string) => {
  return await readPostContent(`posts/${slug}.md`)
}

export const readPostContent = async (fileName: string) => {
  const { content } = await readPost(fileName)
  return content
}

const toHeader: (frontMatter: { [key: string]: any }) => Header = (frontMatter) => {
  const header: {
    title?: string
    metaTitle?: string
    metaDesc?: string
    socialImage?: string
    data?: string
    tags?: string[]
  } = frontMatter
  return header
}
