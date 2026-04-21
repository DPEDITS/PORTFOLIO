import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Instagram, Controller, CameraReels, LightningCharge } from 'react-bootstrap-icons';

const About = () => {
    const [reels, setReels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReels([
                { id: "C9x", views: "1.2M", likes: "240K", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop" },
                { id: "B8y", views: "850K", likes: "115K", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" }
            ]);
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="about-section" id="about">
            <Container>
                <div className="about-glass-card">
                    <Row className="align-items-center">
                        <Col lg={7} md={12}>
                            <div className="about-text-side">
                                <span className="mini-tag">✦ My Story</span>
                                <h2>Beyond The Screen</h2>
                                <p>
                                    I'm Debashish Parida. I master visual storytelling. 
                                    From <strong>Video Editing</strong> to <strong>Web Development</strong>, 
                                    I build digital experiences that flow with creative energy.
                                </p>
                                <div className="interest-pills">
                                    <div className="pill"><Controller size={14} /> Gamer</div>
                                    <div className="pill"><CameraReels size={14} /> Editor</div>
                                    <div className="pill"><LightningCharge size={14} /> Creative</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={12}>
                            <div className="about-social-side">
                                <div className="insta-header">
                                    <Instagram size={18} />
                                    <span>dp_edits29</span>
                                </div>
                                {loading ? (
                                    <div className="loading-state">
                                        <Spinner animation="border" size="sm" />
                                    </div>
                                ) : (
                                    <div className="reels-preview">
                                        {reels.map(reel => (
                                            <div key={reel.id} className="reel-mini-card">
                                                <img src={reel.thumbnail} alt="Reel" />
                                                <div className="reel-mini-stats">
                                                    <span>{reel.views}</span>
                                                    <span>{reel.likes}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default About;
