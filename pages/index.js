import matter from 'gray-matter'

import Layout from '../components/Layout'
import PostList from '../components/PostList'
const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <img src="topan.jpg" height="200px" style={{borderRadius: '50%'}}/>
        <h1 className="title">Blognya Topan</h1>

        <p className="description">
          Hai! Aku Taufan. Disini aku bakal nulis tentang pengalaman aku, opini, cerita, dan lainnya.<br></br>
          Kamu bisa kontak aku di Instagram <a href="https://instagram.com/taufan_mft">@taufan_mft.</a><br></br>
           I hope you enjoy my writings! 🥰
        </p>
        <main>
        <PostList posts={posts}/>
        </main>
      
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)
  const posts = ((context) => {
    const keys = context.keys().reverse()
    const values = keys.map(context)
    console.log(keys)
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))
 
  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}