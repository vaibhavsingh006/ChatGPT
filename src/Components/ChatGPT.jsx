
//  package.json se remove kiya hai version ke niche lagega
//  "type": "module",

import React, { useEffect, useRef } from 'react'
import './ChatGPT.css'
import gptLogo from '../assets/chatgpt.svg'
import add30 from '../assets/add-30.png'
import message from '../assets/message.svg'
import rocket from '../assets/rocket.svg'
import home from '../assets/home.svg'
import bookmark from '../assets/bookmark.svg'
import send from '../assets/send.svg'
import chatgptLogo from '../assets/chatgptLogo.svg'
import userIcon from '../assets/user-icon.png'
// import { sendMsgToOpenAI } from '../assets/OpenAi'

// import { dataAI } from '../assets/openAi'
import { useState } from 'react'
import axios from 'axios';

const ChatGPT = () => {
    const msgEnd = useRef(null)

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            text: 'Hi, I\'am chat Gpt.lfkdjklsj fjsldkjflskj lslkjflas; al fjskljls sljlaj fsa jkldjlfsj lf /?',
            isBot: true,
        }
    ])

    useEffect(() => {
        msgEnd.current.scrollIntoView();
    }, [messages])


    const options = {
        method: 'POST',
        url: 'https://gpts4u.p.rapidapi.com/chatbase',
        params: {
            role: 'user',
            content: 'Tell me a creative joke'
        },
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '3b33dec5e3msh6a58e505dac1f5fp1886c5jsn5f61d726674c',
            'X-RapidAPI-Host': 'gpts4u.p.rapidapi.com'
        },
        data: [
            {
                role: 'user',
                content: input
            }
        ]
    };


    const dataAI = async () => {
        try {
            const text = input;
            setMessages([
                ...messages,
                { text, isBot: false }
            ])

            const response = await axios.request(options);
            const data = response.data;
            console.log(data)
            // console.log(input)
            setMessages([
                ...messages,
                { text: input, isBot: false },
                { text: data, isBot: true }
            ])

        } catch (error) {
            console.error(error);
        }
    }

    const handleSend = async () => {
        // const res = await dataAI();
        dataAI()
        console.log(input)
        setInput('')
        console.log()
    }

    const handleEnter = async (e) => {
        if (e.key === 'Enter') await handleSend();
    }


    const handleQuery = async (e) => {
        const text = e.target.value;
        setMessages([
            ...messages,
            { text, isBot: false }
        ])

        const response = await axios.request(options);
        const data = response.data;
        console.log(data)
        // console.log(input)
        setMessages([
            ...messages,
            { text, isBot: false },
            { text: data, isBot: true }
        ])
    }

    // useEffect(() => {
    // }, [handleSend])

    return (
        <>
            <div className="container flex">
                <div className="leftBar">
                    <div className="upperSide">
                        <div className="upperSideLogo flex-center">
                            <img src={gptLogo} alt="" className="logo" />
                            <span className="brand">ChatGPT</span>
                        </div>
                        <button className='midBtn flex-center-center' onClick={() => { window.location.reload() }}><img src={add30} alt="" className="add" />New Chat</button>
                        <div className="upperSideBottomB flex-cl">
                            <button className='flex-center' onClick={handleQuery} value={'What is Programing?'}><img src={message} alt="" className="upperSideBottomI1" />What is Programing?</button>
                            <button className='flex-center' onClick={handleQuery} value={'How to use API?'}><img src={message} alt="" className="upperSideBottomI2" />How to use API?</button>
                        </div>
                    </div>
                    <div className="lowerSide">
                        <div className="home flex-center bottomi">
                            <img src={home} alt="home" />
                            Home
                        </div>
                        <div className="Saved flex-center bottomi">
                            <img src={bookmark} alt="bookmark" />
                            Saved
                        </div>
                        <div className="Upgrade flex-center bottomi">
                            <img src={rocket} alt="rocker" />
                            Upgrade to Pro
                        </div>
                    </div>
                </div>
                <div className="rightBar">
                    <div className="rightP">
                        <div className="chats">
                            {/* <div className="chat flex">
                                <img src={userIcon} alt="user" />
                                <p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ducimus sunt aut provident, placeat ab facilis fugiat minima commodi, tempore impedit minus.</p>
                            </div> */}


                            {messages.map((message, i) =>
                                <div key={i} className={message.isBot ? "chat bot flex" : 'chat flex'}>
                                    {/* {console.log(i)} */}
                                    <img src={message.isBot ? chatgptLogo : userIcon} alt="gpt" /><p className="txt">{message.text}</p>
                                </div>
                            )}
                            <div ref={msgEnd} />
                        </div>
                        <div className="messageSender flex-center">
                            <input type="text" placeholder='Send a message' value={input} onKeyDown={handleEnter} onChange={(e) => { setInput(e.target.value) }} />


                            {/* <button> */}
                            <img src={send} alt="send" onClick={handleSend} />


                            {/* </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatGPT