import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    return (
        <>
            <div>
                <h3>hello people</h3>
                <ul>
                    <li><a href="#">hello world</a></li>
                </ul>
            </div>
            <h2>hello world</h2>
        </>
            );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);