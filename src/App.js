import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import './styles.css';

const App = () => {

    useEffect(() => {
        const socket = io();

        socket.on('init', (text) => {
            console.log(text);
        });
    }, []);

    return (
        <div className="app"><h2>Hello React App</h2></div>
    );
};

export default App;
