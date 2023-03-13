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
import { CallAlchemyApi } from "./callApi";

const ImageContainer = ({ wallet }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    CallAlchemyApi(wallet).then((res) => {
      console.log(res[0]);
      setData(res);
    });
  });

  return data.map((ele, index) => {
    return (
      <SingleContainer
        url={ele.img}
        title={ele.title}
        add={ele.contractAddress}
      />
    );
  });
};

const SingleContainer = ({ url, title, add }) => {
  return (
    <ImgContainer style={{ padding: "5px" }}>
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
        <Text pad="0 0 0 8px">{add}</Text>
        </Block>
      </Block>
    </ImgContainer>
  );
};
export default ImageContainer;
