import React from 'react';

export default function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="http://www.google.com/" onClick={handleClick}>
            Click me
        </a>
    );
}