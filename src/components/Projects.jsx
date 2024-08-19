import React from 'react'
import { Col, Container, Row,Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import ProjectsCard from './ProjectsCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design And Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design And Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design And Development",
      imgUrl: projImg3,
    },
  ]
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum dignissimos necessitatibus? Doloribus modi, adipisci in quod blanditiis nesciunt earum.</p>
            <Tab.Container id='projects-tab' defaultActiveKey="first">
            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project,index)=>{
                      return(
                        <ProjectsCard key={index}{...project}/>
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
              <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}/>
    </section>
  )
}

export default Projects