import React, { useState, useEffect } from 'react';
import { Instagram, PlayFill } from 'react-bootstrap-icons';
import './Story.css';

const Story = () => {
    const [reels, setReels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReels = async () => {
            try {
                const response = await fetch('https://feeds.behold.so/6ZbBEWRjsX2aAdGTTvl9');
                const data = await response.json();
                
                // Use the latest 3 reels from the feed
                const selectedReels = data.posts.slice(0, 3);

                const formatted = selectedReels.map((post) => {
                    const postDate = new Date(post.timestamp);
                    const now = new Date();
                    const diffDays = Math.floor((now - postDate) / (1000 * 60 * 60 * 24));
                    const timeLabel = diffDays === 0 ? 'Today' : diffDays === 1 ? 'Yesterday' : `${diffDays}d ago`;

                    return {
                        id: post.id,
                        permalink: post.permalink,
                        thumb: post.sizes?.medium?.mediaUrl || post.thumbnailUrl || post.mediaUrl,
                        timeAgo: timeLabel
                    };
                });

                setReels(formatted);
                setLoading(false);
            } catch (error) {
                console.error("Behold fetch failed:", error);
                setLoading(false);
            }
        };
        fetchReels();
    }, []);

    return (
        <div className="dp-story-container">
            <div className="dp-story-header">
                <div className="dp-header-left">
                    <Instagram size={16} />
                    <span>{loading ? 'Connecting...' : '@dp_edits29 Feed'}</span>
                </div>
                <div className="dp-live-tag">Live Feed</div>
            </div>
            
            <div className="dp-reels-grid">
                {loading ? (
                    [1, 2, 3].map(i => (
                        <div key={i} className="dp-reel-skeleton"></div>
                    ))
                ) : (
                    reels.map(reel => (
                        <a key={reel.id} href={reel.permalink} target="_blank" rel="noreferrer" className="dp-reel-item">
                            <img src={reel.thumb} alt="Instagram Reel" />
                            <div className="dp-reel-overlay">
                                <div className="dp-reel-stat">
                                    {reel.timeAgo}
                                </div>
                            </div>
                            <div className="dp-play-icon">
                                <PlayFill size={24} />
                            </div>
                        </a>
                    ))
                )}
            </div>
        </div>
    );
};

export default Story;
