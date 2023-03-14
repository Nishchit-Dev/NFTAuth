import axios from "axios";
import { useState } from "react";
import {
  Block,
  Center,
  MainContainer,
  Flex,
  InputField,
  Button,
  Text,
} from "../../components/styledComp";
import { connectWallet, deployContract } from "../helper/etherFun";

const DeployCollection = ({wallet}) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [size, setSize] = useState("");
  const [deployContractAddress,setDeployAddress] = useState('')

  const handelSubmit = () => {
    deployContract(title, price, size, url).then((data) => {
      console.log(data);
      connectWallet().then(res=>{
        console.log(res)
        let body = {    
            uri: url,
            size: size,
            title: title,
            price: price,
            contractaddress:data,
            deployeraddress:res
          }

          axios
          .post(
            "https://verifyroutenode-production.up.railway.app/savecollection",
            body
          )
          .then((res) => {
            console.log(res);
          });
      })
     
     
    });
  };
  return (
    <MainContainer height="100vh">
      <Center height="80%">
        <Center>
          <Block>
            <Block>
              <Text weight="800" size="35px">
                Deploy Collection
              </Text>
            </Block>
            <Flex style={{ flexDirection: "column", gap: "10px" }}>
              <Block>
                <InputField
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></InputField>
              </Block>
              <Block>
                <InputField
                  placeholder="Image Uri"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                ></InputField>
              </Block>
              <Block>
                <InputField
                  placeholder="size"
                  type={"number"}
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                ></InputField>
              </Block>
              <Block>
                <InputField
                  placeholder="Price"
                  type={"number"}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></InputField>
              </Block>
              <Block>
                <Button onClick={handelSubmit}>Submit</Button>
              </Block>
            </Flex>
          </Block>
        </Center>
      </Center>
    </MainContainer>
  );
};

export default DeployCollection;
