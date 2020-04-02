import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import NonStretchedImage from "../components/NonStretchedImage"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const skills = [
  {
    title: "User Research",
    desc: (
      <p>
        Based on qualitative research methods I support teams to{" "}
        <span>structure</span> research processes, <span>transform</span> data
        into valuable user insights and <span>communicate</span> them to
        multidisciplinary teams.
      </p>
    ),
  },
  {
    title: "Creative facilitation",
    desc: (
      <p>
        I lead <span>co-creative work sessions</span> for research, ideation,
        and synthesis with teams and various stakeholders. I apply service
        design, design thinking and agile methods to help teams deliver{" "}
        <span>faster</span> and more <span>efficiently</span>.
      </p>
    ),
  },
  {
    title: "Social Impact",
    desc: (
      <p>
        By understanding <span>design as a tool for social transformation</span>
        , I evaluate the <span>impact</span> that solutions are having on the
        communities I work with. I reflect and <span>iterate</span> on
        practices, methodologies, and personal mindsets.
      </p>
    ),
  },
]

const projects = [
  {
    title: "Cheil MDLab",
    desc:
      "My work with a team of architects translating brand messages into space",
  },
  {
    title: "Al-Yasmine",
    desc: "Design of a community space for a Syrian Refugee Camp in Lebanon",
  },
  {
    title: "Mapamelt",
    desc:
      "A research project presented at Biennale di Venezia '17 to question the future of identity",
  },
  {
    title: "ORI",
    desc:
      "A social innovation project that helps elders and their families to plan their future",
  },
  {
    title: "Silicone Riot",
    desc:
      "A project to empower women to protest against body modification in advertising",
  },
  {
    title: "Design Manifesto",
    desc:
      "A reflection on personal and professional practices as a strategic designer",
  },
]

const blog = [
  {
    desc:
      "Introducing Design Thinking to a team of space designers at Cheil Germany.",
    link: {
      title: "Read",
      href:
        "https://medium.com/@angegarcia/introducing-design-thinking-to-a-team-of-space-designers-at-cheil-germany-fa93e20a32a1",
    },
  },
  {
    desc: "A reflection of IFA 2019 from the Human Center Design approach.",
    link: {
      title: "Read",
      href:
        "https://medium.com/@angegarcia/a-reflection-of-ifa-2019-from-the-human-centered-design-approach-d9b2102d1acc",
    },
  },
  {
    desc:
      "Co-Jam session with Cheil Germany: Understanding brands as services.",
    link: {
      title: "Read",
      href:
        "https://medium.com/@angegarcia/co-jam-session-with-cheil-germany-42e449cab635",
    },
  },
  {
    title: "Podcast Interview",
    desc: "Diseno y Diáspora: Diseno para refugiados.",
    link: {
      title: "Listen",
      href:
        "https://open.spotify.com/episode/71gcbbCXykS2y9acehAGBW?si=NSqpvjEBTlS0TRQssJXyLw",
    },
  },
  {
    title: "MeetUp group organizer",
    desc: "The Design Thinkers in Frankfurt am Main.",
    link: {
      title: "Join me",
      href:
        "https://www.meetup.com/The-Design-Thinkers/members/?sort=join_date&desc=true",
    },
  },
  {
    desc: "Jamming with the service Design community of Berlin.",
    link: {
      title: "Check out here",
      href: "http://www.jamberlin.org/",
    },
  },
]

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
      slide: file(relativePath: { eq: "homepage-slide.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      tools: file(relativePath: { eq: "tools.png" }) {
        childImageSharp {
          fixed(width: 500, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      icons: allFile(
        filter: { name: { in: ["home-icon-1", "home-icon-2", "home-icon-3"] } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 170, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
                presentationWidth
                originalName
              }
            }
          }
        }
      }
      reels: allFile(
        filter: {
          name: { in: ["reel1", "reel2", "reel3", "reel4", "reel5", "reel6"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 400, height: 300, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      projects: allFile(
        filter: { name: { in: ["0", "2", "3", "4", "5", "7"] } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 300, height: 300, quality: 100) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.icons.edges)
  return (
    <Layout>
      <SEO title="Angela Garcia | A research lover, a system thinker and a strategist." />
      <section id="home" className="container">
        <h1>
          Hello, I am Angela. A research lover,
          <br /> a system thinker
          <br /> and a strategist.
        </h1>
      </section>
      <Img fluid={data.slide.childImageSharp.fluid} />
      <section id="skills" className="container isCenter">
        <h2>Skills</h2>
        <ul className="skills">
          {data.icons.edges
            .sort(
              (a, b) =>
                +a.node.childImageSharp.fluid.originalName.slice(-5, -4) -
                +b.node.childImageSharp.fluid.originalName.slice(-5, -4)
            )
            .map(({ node }, i) => (
              <li>
                <div className="img">
                  <NonStretchedImage fluid={node.childImageSharp.fluid} />
                </div>
                <h3>{skills[i].title}</h3>
                {skills[i].desc}
              </li>
            ))}
        </ul>
      </section>
      <section className="imagesReel">
        {data.reels.edges.slice(0, 3).map(({ node }, i) => (
          <Img key={`reel${i}`} fixed={node.childImageSharp.fixed} />
        ))}
      </section>
      <section className="imagesReel">
        {data.reels.edges.slice(3).map(({ node }, i) => (
          <Img key={`reel${i}`} fixed={node.childImageSharp.fixed} />
        ))}
      </section>
      <section className="container myTools">
        <div>
          <Img fixed={data.tools.childImageSharp.fixed} />
        </div>
        <div>
          <p>
            As a creative facilitator, I rely on Post-its to visualize
            collective thinking. I empower teams to be concise and precise in
            their ideas when working together. I carefully plan every step of
            the workshop in my Moleskine dotted paper book and spark my
            creativity while listening to Chopin.
          </p>
        </div>
      </section>
      <section id="projects" className="container isCenter">
        <h2>Projects</h2>
        <ul className="projects">
          {data.projects.edges
            .sort(
              (a, b) =>
                +a.node.childImageSharp.fixed.originalName.slice(-5, -4) -
                +b.node.childImageSharp.fixed.originalName.slice(-5, -4)
            )
            .map(({ node }, i) => (
              <li>
                <div className="img">
                  <NonStretchedImage fixed={node.childImageSharp.fixed} />
                </div>
                <h3>{projects[i].title}</h3>
                <p>{projects[i].desc}</p>
              </li>
            ))}
        </ul>
      </section>
      <section id="blog" className="container isCenter">
        <h2>Blog</h2>
        <ul className="blog">
          {blog.map(({ node }, i) => (
            <li>
              <div>
                <h3>{blog[i].title ? blog[i].title : null}</h3>
                {blog[i].desc ? <p>{blog[i].desc}</p> : null}
              </div>
              {blog[i].link ? (
                <a target="_blank" href={blog[i].link.href}>
                  {blog[i].link.title}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage
