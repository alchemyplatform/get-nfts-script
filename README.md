# get-nfts-script
JavaScript script to get all NFTs owned by a specified address

## Steps to Run

You'll need to already have [node](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed to run this script. 

1. Clone this repo locally 

`git clone https://github.com/alchemyplatform/get-nfts-script.git`

*NOTE: you may need to install xcode on your mac to use the `git` command due to the recent OS upgrade*

2. `cd` into the project folder then run:

`npm init -y`

3. Install the Alchemy SDK

`npm install --save alchemy-sdk`

4. Run the script

`node get-nfts.js <your-api-key>`

5. The code currently prints out the NFTs (contract names and tokenIds) owned by `0xshah.eth` feel free to modify it to replace it with your address or print out any other information about the NFT! 
