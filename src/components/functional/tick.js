import React from 'react';
import Clock from './Clock';

export default function tick() {
    return (
        <Clock date={new Date()} />
    );
}

setInterval(tick, 1000);
