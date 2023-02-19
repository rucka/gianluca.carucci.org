import { postList } from '../services/postsService'

const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts'

export default function SiteMap({ slugs }: { slugs: string[] }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://carucci.org</loc>
     </url>
     <url>
       <loc>https://carucci.org/contattami</loc>
     </url>
     ${slugs
       .map((slug) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL.replace('jsonplaceholder.typicode.com', 'carucci.org')}/${slug}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

export async function getStaticProps() {
  const posts = await postList()
  return {
    props: { slugs: posts.map((p) => p.slug) }
  }
}
