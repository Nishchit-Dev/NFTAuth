import { useEffect, useState } from "react";
import {
  Center,
  MainContainer,
  Text,
  Block,
  Flex,
  Button,
  Padding,
  FlexHorizontal,
  RoundedText,
  ImgContainer,
  Img,
  QrAlert,
  QrBox,
} from "../../components/styledComp";
import Loader from "../../resource/lottie-loading";
import { connectWallet, signMessage } from "../helper/etherFun";
import { shortString } from "../helper/utility";
import { CallAlchemyApi, callServerToVerify } from "./callApi";
import DisplayQr from "./Qrdisplay";

const ImageContainer = ({ wallet,network }) => {
  const [signInfo, setSignInfo] = useState(null);
  const [data, setData] = useState([]);
  const [publicKey,setPublicKey] = useState(null)
  useEffect(() => {
    if (wallet) {
      signMessage().then((res) => {
        setSignInfo(res);
        console.log(network)
        CallAlchemyApi(wallet,network).then((res) => {
          console.log(res[0]);
          setData(res);
        });
      });
    }
  
  }, []);
return data.map((ele, index) => {
    return (
      <SingleContainer key={index}
        url={ele.img}
        title={shortString(ele.title, 20)}
        add={ele.contractAddress}
        tokenId={ele._tokenId}
        signInfo={signInfo}
        publicKey= {wallet}
      />
    );
  });
};

const SingleContainer = ({ url, title, add, tokenId, signInfo,publicKey }) => {
  const handleClick = () => {
    console.log(signInfo)
    let body = {
      publicKey:publicKey,
      contractAddress: add,
      tokenId: tokenId,
      signMessage:signInfo.signedMessage,
      hash:signInfo.messageHash
    };
    console.log(body)
    setShow(!show);
    // callServerToVerify(body);
    console.log(
      "ContractAddress: ",
      add,
      "tokenId: ",
      tokenId,
      "signature: ",
      signInfo
    );
  };
  useEffect(()=>{
    let body = {
      publicKey:publicKey,
      contractAddress: add,
      tokenId: tokenId,
      signMessage:signInfo.signedMessage,
      hash:signInfo.messageHash
    };

    setData(JSON.stringify(body))
  },[])

  const [show,setShow]= useState(false)
  const [data,setData] = useState();
  const checkDisplay =()=>{
    if(show)
    {
      return "none"
    }else{
      return "inline"
    }
  }
  return (

    <ImgContainer style={{ padding: "5px" }} onClick={handleClick}>
      <Block
        style={{
          backgroundColor: "#E8E2E2",
          borderRadius: "10px",
          overflow: "hidden",
          width: "190px",
        }}
      >
      
      
        {show ?<QrAlert style={{width:"170px"}}>
          <QrBox>
            <DisplayQr value={data}> </DisplayQr>
          </QrBox>
        </QrAlert>:  <Img src={url} /> }
        
        <Block>
          <Text pad="0 0 0 8px">{title}</Text>
        </Block>
        <Block>
          <Text pad="0 0 0 8px">{shortString(add,16)}</Text>
        </Block>
      </Block>
    </ImgContainer>
  );
};
export default ImageContainer;
