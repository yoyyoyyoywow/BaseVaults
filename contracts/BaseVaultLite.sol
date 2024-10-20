// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BaseVaultLite {
    mapping(bytes32 => string) public fileHashes;

    event FileUploaded(bytes32 indexed fileId, string ipfsHash);

    function uploadFile(bytes32 fileId, string memory ipfsHash) public {
        fileHashes[fileId] = ipfsHash;
        emit FileUploaded(fileId, ipfsHash);
    }

    function getFile(bytes32 fileId) public view returns (string memory) {
        return fileHashes[fileId];
    }
}
