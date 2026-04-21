import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';
import colorSharp from '../assets/img/color-sharp.png'

const GithubStats = () => {
    const username = "DPEDITS";
    
    return (
        <section className="github-stats" id="github">
            <Container>
                <Row>
                    <Col>
                        <div className="github-bx">
                            <div className="section-head text-center">
                                <h2>Coding Journey</h2>
                                <p>Real-time activity and technical insights from my GitHub profile.</p>
                            </div>
                            
                            <div className="github-content-grid">
                                <div className="github-card main-stats">
                                    <img 
                                        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=fff&icon_color=a855f7&text_color=94a3b8&bg_color=00000000&hide_border=true&rank_icon=github`} 
                                        alt="GitHub Stats" 
                                    />
                                </div>
                                <div className="github-card languages">
                                    <img 
                                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=fff&icon_color=a855f7&text_color=94a3b8&bg_color=00000000&hide_border=true`} 
                                        alt="Top Languages" 
                                    />
                                </div>
                                <div className="github-card streak">
                                    <img 
                                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&stroke=00000000&background=00000000&ring=a855f7&fire=a855f7&currStreakNum=fff&sideNums=fff&sideLabels=94a3b8&dates=94a3b8`} 
                                        alt="GitHub Streak" 
                                    />
                                </div>
                            </div>
                            
                            <div className="text-center mt-4">
                                <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="github-btn">
                                    <Github size={20} /> View Full Profile
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
};

export default GithubStats;
