import React, { useState } from "react";
import Web3 from "web3";
import { uploadFileToIPFS } from "./ipfs";

const contractABI = [...] 
const contractAddress = "0xYourContractAddress"; 

function App() {
  const [file, setFile] = useState(null);
  const [ipfsHash, setIpfsHash] = useState("");
  const [fileId, setFileId] = useState("");

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (file) {
      const ipfsHash = await uploadFileToIPFS(file);
      setIpfsHash(ipfsHash);

      const web3 = new Web3(Web3.givenProvider);
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      const fileId = web3.utils.keccak256(ipfsHash);
      setFileId(fileId);

      await contract.methods.uploadFile(fileId, ipfsHash).send({ from: window.ethereum.selectedAddress });
    }
  };

  return (
    <div>
      <h1>BaseVault Lite</h1>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
      {ipfsHash && <p>File uploaded to IPFS: {ipfsHash}</p>}
    </div>
  );
}

export default App;
