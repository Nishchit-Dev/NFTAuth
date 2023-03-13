import apiCall from "./RequestConfig";

export const RequestUrl=(conAddress,clientAddress) => {
    return showNft=`https://api.etherscan.io/api
    ?module=account
    &action=tokennfttx
    &contractaddress=${conAddress}
    &address=${clientAddress}
    &page=1
    &offset=100
    &startblock=0
    &endblock=27025780
    &sort=asc
    &apikey=${apiCall.etherScanKey}`
}

