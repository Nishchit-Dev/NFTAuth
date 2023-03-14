import axios from "axios";
import { Alchemy, Network } from "alchemy-sdk";
import Config from "../../config";
import { Wallet } from "ethers";

const config = {
  apiKey: "WIeYyhZo4J_UI8A2AqOi3KvCGVTK_nM4",
  network: Network.MATIC_MAINNET,
};

export const CallAlchemyApi = async (walletAddress, network) => {
  if (!walletAddress) return { Error: "no wallet Address" };
  if (network == "ethereum") {
    config.network = Network.ETH_MAINNET;
  } else if (network == "goreli") {
    config.network = Network.ETH_GOERLI;
  } else if (network == "polygon") {
    config.network = Network.MATIC_MAINNET;
  } else if (network == "mumbai") {
    config.network = Network.MATIC_MUMBAI;
  }
  const alchemy = new Alchemy(config);

  const NFTs = await alchemy.nft.getNftsForOwner(walletAddress);
    console.log(NFTs.ownedNfts[0]);

  var Data = NFTs.ownedNfts.map((ele, index) => {
    // console.log(ele.contract.address)
    // console.log(ele.media[0].thumbnail)
    // console.log(ele.title)

    return {
      img: ele.media[0].thumbnail ? ele.media[0].thumbnail : null,
      contractAddress: ele.contract.address?ele.contract.address : null,
      title: ele.title?ele.title:null,
      _tokenId: ele.tokenId?ele.tokenId:null,
    };
  });
  return Data;
};

export const callServerToVerify = async (data) => {
  return axios.post(Config.baseUrl + "/verify", data).then((res) => {
    return res;
  });
};
