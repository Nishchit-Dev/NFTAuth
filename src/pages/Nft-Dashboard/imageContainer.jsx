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
} from "../../components/styledComp";
import Loader from "../../resource/lottie-loading";
import { connectWallet, signMessage } from "../helper/etherFun";
import { shortString } from "../helper/utility";
import { CallAlchemyApi, callServerToVerify } from "./callApi";

const ImageContainer = ({ wallet }) => {
  const [signInfo, setSignInfo] = useState(null);
  const [data, setData] = useState([]);
  const [publicKey,setPublicKey] = useState(null)
  useEffect(() => {
    if (wallet) {
      signMessage().then((res) => {
        setSignInfo(res);
        CallAlchemyApi(wallet).then((res) => {
          console.log(res[0]);
          setData(res);
        });
      });
    }
    // else{
    //   connectWallet().then(wallet=>{
    //     signMessage().then((resp)=>{
    //       CallAlchemyApi(wallet).then((res) => {
    //         console.log(res[0]);
    //         setData(res);
    //       });
    //     })
       
    //   })
    // }
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
    callServerToVerify(body);
    console.log(
      "ContractAddress: ",
      add,
      "tokenId: ",
      tokenId,
      "signature: ",
      signInfo
    );
  };
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
        <Img src={url} />
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
