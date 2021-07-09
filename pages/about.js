import Layout from "../components/Layout"

const About = ({ title, description, ...props }) => {
    return (
      <>
        <Layout pageTitle={`${title} | About`} description={description}>
      
          <p>
           Ntar dulu ya masih bingung.
          </p>
        </Layout>
      </>
    )
  }
  
  export default About
  
  export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`)
  
    return {
      props: {
        title: configData.default.title,
        description: configData.default.description,
      },
    }
  }