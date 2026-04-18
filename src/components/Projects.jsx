import React from 'react'
import { Col, Container, Row, Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import mernstack from '../assets/img/mern-stack.png'
import mernstack1 from '../assets/img/mern-stack1.png'
import devops from '../assets/img/devops.png'
import spotify from '../assets/img/spotifyclone.png'
import gdg from '../assets/img/GDG.png'
import websilicon from '../assets/img/websil.jpg'
import sponsorsil from '../assets/img/sponsorsil.jpg'
import quickchat from '../assets/img/quickchat.png'
import fularani from '../assets/img/fularani.png'
import ProjectsCard from './ProjectsCard'
import CertificateCard from './CertificateCard'
import colorSharp2 from '../assets/img/color-sharp2.png'

const Projects = () => {
  const certificates = [
    {
      title: "CODE BEAT",
      description: "MERN STACK",
      imgUrl: mernstack,
    },
    {
      title: "INFOSYS SPRINGBOARD",
      description: "REACTJS",
      imgUrl: mernstack1,
    },
    {
      title: "INGENIOUS TECHWORLD",
      description: "DEVOPS",
      imgUrl: devops,
    },
    {
      title: "LET'S UPGRADE",
      description: "SPOTIFY CLONE",
      imgUrl: spotify,
    },
    {
      title: "GOOGLE DEVELOPER GROUP",
      description: "ORGANIZING COMMITTEE",
      imgUrl: gdg,
    },
    {
      title: "Zygon X Noesis 2k26",
      description: "Website Developer",
      imgUrl: websilicon,
    },
    {
      title: "Zygon X Noesis 2k26",
      description: "Sponsorship",
      imgUrl: sponsorsil,
    },
  ]
  const projects = [
    {
      title: "Fularani Foundation",
      description: "NGO Website",
      imgUrl: fularani,
      url: "https://www.fularanifoundation.org"
    },
    {
      title: "Quick Chat",
      description: "Mern Stack Chat Application",
      imgUrl: quickchat,
      url: "https://quick-chat-nolx.onrender.com/login"
    },
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>My Work & Achievements</h2>
            <p>
              Explore my journey through certifications, hands-on projects, and organizational roles.
              From earning technical credentials to building full-stack applications, each tab reflects
              a milestone in my growth as a developer.
            </p>

            <Tab.Container id='projects-tab' defaultActiveKey="first">
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Certificates</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Experience</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      certificates.map((project, index) => {
                        return (
                          <CertificateCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectsCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row className="justify-content-center">
                    <Col md={8}>
                      <div style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '20px',
                        padding: '40px',
                        textAlign: 'center'
                      }}>
                        <h4 style={{ marginBottom: '16px', fontWeight: 700 }}>Coming Soon</h4>
                        <p style={{ color: '#94a3b8', margin: 0 }}>
                          More experience details will be added here as my journey continues.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt="" />
    </section>
  )
}

export default Projects