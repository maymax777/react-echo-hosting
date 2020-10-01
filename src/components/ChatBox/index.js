import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { config, theme, steps } from './config';
import './style.scss';

function ChatBox() {
    const clickEventHandler = () => console.log('chatbox');
    
    return (
        <div className="chat-container">
            <ThemeProvider theme={theme}>
                <ChatBot steps={ steps } {...config} eventHandler={clickEventHandler}/>
            </ThemeProvider>
        </div>
    )
}

export default ChatBox
