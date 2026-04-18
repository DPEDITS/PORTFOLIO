import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Row, Col, Container } from 'react-bootstrap'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills & Expertise</h2>
                            <p>
                                I have successfully completed training in the MERN stack and DevOps, 
                                developing solid skills in full-stack web development, cloud deployment, and automation.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider' autoPlay={true} autoPlaySpeed={3000}>
                                <div className='item'>
                                    <img src={meter1} alt="Web Development Skill Level - Debashish Parida" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="DevOps & Cloud Automation" />
                                    <h5>DevOps & Cloud</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="Logo Design" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="Web Designer" />
                                    <h5>Web Designer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt="" />
        </section>
    )
}

export default Skills