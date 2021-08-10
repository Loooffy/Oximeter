import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import webSocket from 'socket.io-client'
import './index.css';

const Socket = () => {
    const [ws,setWs] = useState(null)
    const [data,setData] = useState(0)

    const connectWebSocket = () => {
        //開啟
        setWs(webSocket('http://10.0.0.3:5000'))
    }

    useEffect(()=>{
        if(ws){
            //連線成功在 console 中打印訊息
            console.log('success connect!')
            //設定監聽
            initWebSocket()
        }
    },[ws])

    const initWebSocket = () => {
        //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
        ws.on('measure', (measurement) => {
            console.log(measurement)
            setData(measurement)
        })
    }

    const sendMessage = () => {
        //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
        ws.emit('start', '開始')
    }

    return(
        <div>
            <input type='button' value='連線' onClick={connectWebSocket} />
            <input type='button' value='開始' onClick={sendMessage} />
            <p> { data } </p>
        </div>
    )
}

export default Socket;
