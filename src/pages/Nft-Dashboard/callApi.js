import axios from 'axios'
import { Alchemy, Network } from "alchemy-sdk";
import Config from '../../config'
import { Wallet } from "ethers";
const config = {
  apiKey: "WIeYyhZo4J_UI8A2AqOi3KvCGVTK_nM4",
  network: Network.MATIC_MAINNET,
};
const alchemy = new Alchemy(config);

export const CallAlchemyApi = async (walletAddress) => {
  if(!walletAddress) return {Error:"no wallet Address"}
  const NFTs = await alchemy.nft.getNftsForOwner(walletAddress);
//   console.log(NFTs.ownedNfts[0]);

  var Data = NFTs.ownedNfts.map((ele,index)=>{
    // console.log(ele.contract.address)
    // console.log(ele.media[0].thumbnail)
    // console.log(ele.title)

    return {
        img:ele.media[0].thumbnail,
        contractAddress:ele.contract.address,
        title:ele.title,
        _tokenId:ele.tokenId

    }
  })
  return Data 
};

export const callServerToVerify = async(data)=>{
  return axios.post(Config.baseUrl+'/verify',data).then(res=>{
    return res
  })
}