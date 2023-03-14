import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const DisplayQr = ({value})=>{
    console.log(value)
    return (
        <div>
            <QRCode value={value} size={190}/>
        </div>
    )
}

export default DisplayQr
