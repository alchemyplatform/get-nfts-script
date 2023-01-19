// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";
import { argv } from 'node:process';

const config = {
  apiKey: argv[2], // your alchemy api key passed into the run command 
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);


const main = async () => {
    const address = "0xshah.eth"; // Replace with your address

    // Get all NFTs
    const nfts = await alchemy.nft.getNftsForOwner(address); 

    // Parse output
    const numNfts = nfts["totalCount"];
    const nftList = nfts["ownedNfts"];

    console.log(`Total NFTs owned by ${address}: ${numNfts} \n`);

    let i = 1;

    // Print out the contract name and token id (print "nft" for full object)
    for (let nft of nftList) {
        console.log(`${i}. ${nft.contract.name} #${nft.tokenId}`);
        i++;
    }
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
