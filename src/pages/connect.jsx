import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Center,
  MainContainer,
  Text,
  Block,
  Button,
  Flex,
} from "../components/styledComp";
import { CheckEthereum, connectWallet } from "./helper/etherFun";


export const Context = createContext("default value")
const Connect = () => {
  const [win, setWin] = useState("");
  const [wallet, setWallet] = useState("");
  const navigate = useNavigate()

  const handleConnect = () => {
    CheckEthereum()
      .then(async (res) => {
        console.log(res);
        var address = await connectWallet()
        setWallet(address);
        setWin(res);
        navigate('/Dashboard',{state:{address}})
      })
      .catch((err) => {
        console.log(err);
        setWin(err);
      });
  };
  
  return (
      <MainContainer height="100vh">
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
      </MainContainer>
 

  );
};

export default Connect;


