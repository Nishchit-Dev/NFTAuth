import { useEffect, useState } from "react";
import { SimpleDropdown } from "react-js-dropdavn";
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
} from "../../components/styledComp";
import {
  connectWallet,
  decode,
  FetchBalance,
  signMessage,
  SignUser,
} from "../helper/etherFun";
import { shortString } from "../helper/utility";
import ImageContainer from "./imageContainer";
import DisplayQr from "./Qrdisplay";
const Dashboard = () => {
  const [wallet, setWallet] = useState("");
  const [shortAddress, setShortAddress] = useState("");
  const [balance, setBalance] = useState(null);
  const [data, setData] = useState(null);
  const [netFlag,setNetFlag] = useState(null);
 const [network,setNetwork] = useState('polygon');
  const handleSignIn = () => {
    connectWallet().then((res) => {
      if (res) {
        setWallet(res);
        var test = shortString(res, 14);
        // console.log(test);
        setShortAddress(test);
        FetchBalance(res).then((matic) => {
          setBalance(matic);
        });
      }
    });
  };

  return (
    <MainContainer height="100vh">
      <Center>
        <Flex>
          <Block>
            <FlexHorizontal style={{ alignItems: "center", gap: "30px" }}>
              <Text weight="700" size="25px">
                Portfolio
              </Text>
              <Block>
                {shortAddress.length > 1 ? (
                  <RoundedText>{shortAddress}</RoundedText>
                ) : (
                  ""
                )}
              </Block>
              <Block>
               <Button style={{borderRadius:"999px"}} onClick={()=>{setNetFlag(!netFlag)}}>{"Network " +network}</Button>
                  {netFlag? <Block style={{width:'200px',height:"auto",backgroundColor:"#262833",position:"absolute",borderRadius:"4px"}}>
                    <Flex style={{flexDirection:"column", padding:"0 0 0 10px",}}>
                      
                      <Block><Text style={{color:"white"}} onClick={(e)=>{setNetwork('ethereum')}}>Ethereum</Text></Block>
                      <Block><Text style={{color:"white"}} onClick={(e)=>{setNetwork('goreli')}}>Goreli</Text></Block>
                      <Block><Text style={{color:"white"}}onClick={(e)=>{setNetwork('polygon')}}>Polygon</Text></Block>
                      <Block><Text style={{color:"white"}}onClick={(e)=>{setNetwork('mumbai')}}>Mumbai</Text></Block>

                    </Flex>
                  </Block>:""}

                 
              </Block>
            </FlexHorizontal>
            {balance > 0 ? (
              <Block pad="20px 0 0 0 ">
                <Flex style={{ margin: "auto" }}>
                  <Text weight="800" size="35px" style={{ color: "#8247E5" }}>
                    {balance != null ? Number(balance).toFixed(3) + " " : " "}
                  </Text>
                  <Text weight="800" size="35px">
                    &nbsp; Matic
                  </Text>
                </Flex>
              </Block>
            ) : (
              ""
            )}

            <Block pad="20px 0 0 0 ">
              <Flex style={{ margin: "auto" }}>
                {wallet.length > 0 ? <ImageContainer wallet={wallet} network={network} /> : ""}
              </Flex>
            </Block>
            {wallet.length < 1 ? (
              <Block>
                <Flex>
                  <Button onClick={handleSignIn}>Verify</Button>
                </Flex>
              </Block>
            ) : (
              ""
            )}
          </Block>
        </Flex>
      </Center>
    </MainContainer>
  );
};

export default Dashboard;
