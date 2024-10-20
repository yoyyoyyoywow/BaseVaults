import { create } from 'ipfs-http-client';

const client = create('https://ipfs.infura.io:5001');

export const uploadFileToIPFS = async (file) => {
  try {
    const added = await client.add(file);
    return added.path; // Возвращает хэш файла
  } catch (error) {
    console.error('Error uploading file to IPFS:', error);
    return null;
  }
};
