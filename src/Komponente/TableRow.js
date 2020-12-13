import { useEffect, useState } from "react";

export let TableRow = (props) =>{
    let [message, setMessage] = useState([]);
    let [request, setRequest] = useState(JSON.stringify({
        event: 'subscribe',
        channel: 'ticker',
        symbol: `t${props.symbol}`
    }))

    useEffect(() => {
        const timer = setTimeout(() => {
            connect();
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [])

    let connect = () => {
        const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

            ws.onopen = () => {
                ws.send(request);
            }

            ws.onmessage = (msg) => {
                if(Array.isArray(JSON.parse(msg.data)[1]))
                    {
                        setMessage(JSON.parse(msg.data));
                    }
            }
            
            ws.onerror = err => {
                const timer = setTimeout(() => {
                    ws.close();
                    connect();
                }, 1000);
                return () => {
                    clearTimeout(timer);
                }
            };
    };

    if(message.length > 1)
    return(
            <tr>
                <td><b>{props.index}</b></td>
                <td>{props.symbol}</td>
                <td>{(message[1][5]*100).toFixed(2)}%</td>
                <td>{(message[1][7]).toFixed(2)}</td>
                <td>{(message[1][6]).toFixed(2)}</td> 
            </tr>
    )
    else
    return(
        <tr>
            <td><b>{props.index}</b></td>
            <td>{props.symbol}</td>
            <td>Loading..</td>
            <td>Loading..</td>
            <td>Loading..</td>
        </tr>
    )
}