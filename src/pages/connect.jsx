import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Center,
  MainContainer,
  Text,
  Block,
  Button,
  Flex,
  FlexHorizontal,
} from "../components/styledComp";
import { CheckEthereum, connectWallet } from "./helper/etherFun";

export const Context = createContext("default value");
const Connect = () => {
  const [win, setWin] = useState("");
  const [wallet, setWallet] = useState("");
  const navigate = useNavigate();

  const handleConnect = () => {
    CheckEthereum()
      .then(async (res) => {
        console.log(res);
        var address = await connectWallet();
        setWallet(address);
        setWin(res);
        navigate("/Dashboard", { state: { address } });
      })
      .catch((err) => {
        console.log(err);
        setWin(err);
      });
  };

  const onCreateCollection = ()=>{
    navigate("/deployContract");

  }
  return (
    <MainContainer height="100vh">
      
      <Block style={{marginBottom:'10px'}}>
        <Center>
          <Flex style={{gap:"10px"}}>

          <Button onClick={onCreateCollection}>CreateCollection</Button>
          
          <Button>OtherCollection</Button>
          </Flex>
        </Center>
      </Block>

      <Block style={{margin:"10px"}}>
        <Center height="100%">
          <Center>
            <Flex>
              <Block>
                <Text size="20px" weight="300">
                  {wallet}
                </Text>
              </Block>
              <Center>
                <Block>
                  <Button onClick={handleConnect}>Connect</Button>
                </Block>
              </Center>
            </Flex>
          </Center>
        </Center>
      </Block>
    </MainContainer>
  );
};

export default Connect;
