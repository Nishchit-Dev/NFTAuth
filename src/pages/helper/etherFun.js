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
      // console.log(res[0]);
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

export const FetchBalance = async (wallet) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const _balance = await provider.getBalance(wallet);
  // const test = parseInt(balance)
  // console.log(ethers.toNumber(balance))
  const balance = ethers.formatEther(_balance);
  return balance;
};

export const signMessage = async () => {
  const data = "hi";

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const messageHash = ethers.hashMessage(data);
  const signedMessage = await signer.signMessage(messageHash);
  
  console.log("Hash: ", messageHash, "signedMessage: ", signedMessage);
  return {
    messageHash:messageHash,
    signedMessage:signedMessage,
  };
};

export const decode = async () => {
  const publicAddress = "0x85c3E62be3Fedc174b6DCc3F7c65e1b23eFA97EF";
  const hash =
    "0x50b2c43fd39106bafbba0da34fc430e1f91e3c96ea2acee2bc34119f92b37750";
  const signedMessage =
    "0x645cf8784f6d0ff9b714d75ae5eac3dacfc6f1ff2a7e42bf77f1e2823404c0a77a40916fa281df9daec77ce655c12fa1adefba67eddbe14066ea129034388c8e1b";

  const publicKey = ethers.recoverAddress(
    ethers.hashMessage(hash),
    signedMessage
  );

  const hello = console.log(publicKey);
  // const address = ethers.computeAddress(
  //   "0x0476698beebe8ee5c74d8cc50ab84ac301ee8f10af6f28d0ffd6adf4d6d3b9b762d46ca56d3dad2ce13213a6f42278dabbb53259f2d92681ea6a0b98197a719be3"
  // );

  console.log(hello);
};
// decode();

// publicAddress: 0x85c3E62be3Fedc174b6DCc3F7c65e1b23eFA97EF
// hash: 0x50b2c43fd39106bafbba0da34fc430e1f91e3c96ea2acee2bc34119f92b37750
// signedMessage:  0x645cf8784f6d0ff9b714d75ae5eac3dacfc6f1ff2a7e42bf77f1e2823404c0a77a40916fa281df9daec77ce655c12fa1adefba67eddbe14066ea129034388c8e1b
