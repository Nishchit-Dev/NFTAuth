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
import {
  connectWallet,
  decode,
  FetchBalance,
  signMessage,
  SignUser,
} from "../helper/etherFun";
import { shortString } from "../helper/utility";
import ImageContainer from "./imageContainer";
const Dashboard = () => {
  const [wallet, setWallet] = useState("");
  const [shortAddress, setShortAddress] = useState("");
  const [balance, setBalance] = useState(null);
  const [data, setData] = useState(null);
  
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
                {wallet.length > 0 ?<ImageContainer wallet={wallet} />:"" }
                
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
