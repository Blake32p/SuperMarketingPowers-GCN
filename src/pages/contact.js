import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-full">
              <div className="columns">
                <div className="column is-8">
                  <h2>Edible Glitter Shapes</h2>
                  <p>
                    Edible Glitter Shapes are available in several sizes.
                    Standard shapes and sizes are shown below. Colors for each
                    shape can be customized to meet the needs of your product
                    and objectives.asa
                  </p>
                  <p>
                    Below please find samples of standard shapes. Shapes can
                    also be customized with the purchase of a custom die.
                  </p>
                </div>
                <div className="column is-4">
                  <h3>See Also</h3>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
