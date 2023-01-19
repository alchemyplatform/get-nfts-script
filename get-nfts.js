// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";
import { argv } from 'node:process';

const config = {
  apiKey: argv[2], // your alchemy api key passed into the run command 
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

// Fetch all the NFTs owned by elanhalpern.eth
const main = async () => {
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner("vitalik.eth");
  // Print NFTs
  console.log(nfts);
};

// Execute the code
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
