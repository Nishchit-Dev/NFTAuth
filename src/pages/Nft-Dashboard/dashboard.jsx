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
import { SignUser } from "../helper/etherFun";
import ImageContainer from "./imageContainer";
const Dashboard = () => {
  const [wallet, setWallet] = useState();

  const handleSignIn = ()=>{
    SignUser().then((res) => {
        if (res) setWallet(res);
      });
  }

  return (
    <MainContainer height="100vh">
      <Center>
        <Flex>
          <Block>
            <FlexHorizontal>
              <Text weight="700" size="22px">
                Portfolio
              </Text>
            </FlexHorizontal>
            <Block pad="20px 0 0 0 ">
              <Flex style={{ margin: "auto", }}>
                <ImageContainer wallet={wallet} />
              </Flex>
            </Block>
            {wallet != ''?<Block>
                <Flex>
                    <Button onClick={handleSignIn}>Verify</Button>
                </Flex>
            </Block>:""}
          </Block>
        </Flex>
      </Center>
    </MainContainer>
  );
};

export default Dashboard;
