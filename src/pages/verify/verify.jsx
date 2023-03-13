import Html5QrcodePlugin from "./Html5QrcodeScannerPlugin";
const Verify = ()=>{

    const onNewScanResult = (decodedText, decodedResult) => {
        // handle decoded results here
        console.log("hello")
    };
    return(
        <div className="App">
            <h1>hello</h1>
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
    )

}


export default Verify;