import { PostInfo, postList } from '../services/postsService'

const EXTERNAL_DATA_URL = 'https://carucci.org/posts'

function generateSiteMap({ posts }: { posts: PostInfo[] }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://carucci.org</loc>
     </url>
     <url>
       <loc>https://carucci.org/contattami</loc>
     </url>
     <url>
       <loc>https://carucci.org/conference/2022/pyconit</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: any }) {
  // We make an API call to gather the URLs for our site
  //   const request = await fetch(EXTERNAL_DATA_URL);
  //   const posts = await request.json();
  const posts = await postList()

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap({ posts })

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap
