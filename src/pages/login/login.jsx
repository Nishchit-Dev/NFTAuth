import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useLocation } from "react-router-dom";
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

const Login = () => {
  const [address, setAddress] = useState("");
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    if (location.state.address) {
      setAddress(location.state.address);
    }

    setTimeout(async () => {
      // SignUser();
    }, 2000);
  }, []);

  return (
    <MainContainer height="100vh">
      <Flex>
        <Block>
          <FlexHorizontal>
            <Text weight="700" size="22px">
              Portfolio
            </Text>
          </FlexHorizontal>
          <Block pad="20px 0 0 0 ">
            <ImgContainer>
              <Img src="https://i.seadn.io/gae/hukNR4ssl5C-4gNefZ49sJbAaqXKJl2lkIYBPfrOUhRa1eNtY5Lj9wYuW6cJex82RVqonCRcI5wSsJaryW5Fpf97cTFTOJsjSuXgW88?auto=format&w=2048" />
              <Block>
                <Text>title</Text>
              </Block>
              <Block>
                <Text>description</Text>
              </Block>
            </ImgContainer>
          </Block>
        </Block>
      </Flex>
    </MainContainer>
  );
};

export default Login;
