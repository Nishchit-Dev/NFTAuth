import { ethers } from "ethers";

export const CheckEthereum = async () => {
  if (!window.ethereum) {
    return new Error("ethereum not found").message;
  }
  return true;
};

export const connectWallet = async () => {
  return window.ethereum
    .request({ method: "eth_requestAccounts" })
    .then((res) => {
      console.log(res[0]);
      return res[0];
    });
};

export const SignUser = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const signature = await signer.signMessage("message");
  const signerAddress = await signer.getAddress();

  const messageHash = ethers.hashMessage("message");
  const recoverAddress = ethers.recoverAddress(messageHash, signature);

  const check = recoverAddress === signerAddress;

  if (check) {
    return recoverAddress;
  } else {
    return null;
  }

  //   console.log("check Signature :",check)
  //   console.log("recoverAddress :",recoverAddress)
  //   console.log("Actual Address :",signerAddress)
};


export const FetchBalance = ()=>{
  
}