import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectsCard = ({ title, description, imgUrl, url }) => {
  const handleButtonClick = () => {
    if (url) {
      window.location.href = url; // opens in same tab
    } else {
      console.warn("No URL provided");
    }
  }

  return (
    <Col sm={6} md={4}>
      <div 
        onClick={handleButtonClick}
        className='proj-card'
        style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: 0 }}
      >
        <div className='proj-imgbx'>
          <img src={imgUrl} alt={title} />
          <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProjectsCard
