import React from 'react'
import { Col } from 'react-bootstrap'

const CertificateCard = ({ title, description, imgUrl, url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <Col sm={6} md={4}>
      <div
        onClick={handleClick}
        className='cert-card'
        style={{ cursor: url ? 'pointer' : 'default', backgroundColor: 'transparent', border: 'none', padding: 0 }}
      >
        <div className='cert-imgbx'>
          <img src={imgUrl} alt={title} />
          <div className='cert-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default CertificateCard
