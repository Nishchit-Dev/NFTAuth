import styled from "styled-components";
import config from "./config";

export const MainContainer = styled.div`
  display: block;
  padding: 50px;
  height: ${(arg) => (arg.height ? arg.height : "")};
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(arg) => (arg.height ? arg.height : "auto")};
`;
export const Button = styled.a`
  ${config.Fonts.poppins}
  padding:5px 10px;
  background: #f6851b;
  border-radius: 5px;
  color: white;
`;

export const Block = styled.div`
  display: block;
  padding:${arg=>arg.pad?arg.pad:''};
`;
export const Text = styled.button`
  all:unset;
  padding:${arg=>arg.pad?arg.pad:''};
  text-align:center;
  ${config.Fonts.poppins}
  font-size:${(arg) => (arg.size ? arg.size : "16px")};
  font-weight: ${(arg) => (arg.weight ? arg.weight : "400")};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap:wrap;
`;

export const Padding = styled.div`
  padding: 50px;z
`;

export const RoundedText = styled.div`
  ${config.Fonts.poppins}
  font-size:${(arg) => (arg.size ? arg.size : "16px")};
  font-weight: ${(arg) => (arg.weight ? arg.weight : "400")};
  border-radius: 9999px; /* adjust as needed */
  border: 1px solid black; /* add a border */
  padding:1px 5px /* add some space inside the border */
`;

export const FlexHorizontal = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImgContainer = styled.div`
  width:min-content;
  // box-shadow: 20px 24px 50px -26px rgb(0 0 0 / 25%);
  border-radius:10px;
`
export const Img = styled.img`
  width:190px;
`

export const QrAlert = styled.div`
  height:100vh
  display:flex;
  background:transparent;
  justify-content:center;
  align-items:center;
`

export const QrBox = styled.div`
  width:300px;
`

export const InputField = styled.input`
    all:unset;
    font-weight:500;
    ${config.Fonts.poppins};
    background-color:#F2F2F2;
    color:#584848;
    padding:10px 14px;
    border-radius:6px;
    width:250px;
    margin:5px 0;

    ::hover{
      pointer:cursor;
    }
`;