import { readdir, readFile, stat } from 'fs/promises'
import matter from 'gray-matter'

export type Header = {
  title?: string
  metaTitle?: string
  metaDesc?: string
  socialImage?: string
  date?: string
  modifiedDate: string
  featured?: boolean
  category?: string
  tags?: string[]
}
export type PostInfo = { slug: string; header: Header }

export const postList: () => Promise<PostInfo[]> = async () => {
  const files = await readdir('posts')
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith('.md'))
      .sort((a, b) => (a > b ? -1 : 1))
      .map(async (fileName) => {
        const { slug, header } = await readPost(fileName)
        return {
          slug,
          header
        }
      })
  )
  return posts.sort(compare)
}

const compare: (a: PostInfo, b: PostInfo) => number = (a, b) => {
  if (!a.header.date || !b.header.date) return 0
  const da = parseInt(a.header.date)
  const db = parseInt(b.header.date)
  return db - da
}

export const readPost = async (fileName: string) => {
  const path = `posts/${fileName}`
  const fileData = await readFile(path, 'utf-8')
  const mtime = (await stat(path)).mtime

  const { data: frontmatter, content } = matter(fileData)
  const slug = fileName.replace('.md', '')
  return { slug, header: toHeader(frontmatter, mtime), content }
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

const toHeader: (frontMatter: { [key: string]: any }, modifiedDate: Date) => Header = (frontMatter, modifiedDate) => {
  const header: {
    title?: string
    metaTitle?: string
    metaDesc?: string
    socialImage?: string
    date?: string
    modifiedDate: string
    tags?: string[]
  } = { ...frontMatter, ...{ modifiedDate: modifiedDate.toISOString() } }
  return header
}
