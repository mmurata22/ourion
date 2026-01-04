import React from 'react';
import { useState, useEffect } from 'react';
import './ScrollingIcons.css';

// Icons
import AppleWaste from './assets/apple-waste.svg';

const ScrollingIcons = () => {
    
    const MIN_COLUMN_WIDTH = 100;
    const [trackCount, setTrackCount] = useState(4);

    const updateTrackCount = () => {
        const width = window.innerWidth;
        const count = Math.max(4, Math.ceil(width / MIN_COLUMN_WIDTH));
        setTrackCount(count);
    };

    useEffect(() => {
        updateTrackCount();
        window.addEventListener('resize', updateTrackCount);
        
        return () => window.removeEventListener('resize', updateTrackCount);
    }, []);

    const ICON_SET_1 = (
        <>
            <img src={AppleWaste} className="icon-img" alt="Apple Waste" />
            <span className="icon">✨</span>
            <span className="icon">🚀</span>
            <span className="icon">💻</span>
            <span className="icon">⚛️</span>
            <span className="icon">📱</span>
            <span className="icon">⭐</span> 
        </>
    );

    const ICON_SET_2 = (
        <>
            <span className="icon">💡</span>
            <span className="icon">🛠️</span>
            <span className="icon">🔗</span>
            <span className="icon">⚙️</span>
            <span className="icon">📊</span>
            <span className="icon">📦</span>
        </>
    );

    const REPEAT_COUNT = 6;
    const renderIconSets = (set) => (
        [...Array(REPEAT_COUNT)].map((_, i) => (
            <React.Fragment key={i}>
                {set}
            </React.Fragment>
        ))
    );

    const FULL_ICON_TRACK_1 = renderIconSets(ICON_SET_1);
    const FULL_ICON_TRACK_2 = renderIconSets(ICON_SET_2);

    const tracks = [];
    for (let i = 0; i < trackCount; i++) {
        const isScrollingUp = i % 2 === 0;
        const trackClassName = `icon-track ${isScrollingUp ? 'icon-track--up' : 'icon-track--down'}`;
        const trackContent = isScrollingUp ? FULL_ICON_TRACK_1 : FULL_ICON_TRACK_2;
        
        tracks.push(
            <div key={i} className={trackClassName}>
                {trackContent}
                {trackContent}
            </div>
        );
    }

    return (
        <div className="scrolling-icon-header">
            <div className="scrolling-icon-tracks"> 
                {tracks}
            </div>
        </div>
    );
};

export default ScrollingIcons;