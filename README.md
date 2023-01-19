# get-nfts-script
JavaScript script to get all NFTs owned by a specified address

## Steps to Run

1. Clone this repo locally 

`git clone https://github.com/alchemyplatform/get-nfts-script.git`

*NOTE: you may need to install xcode on your mac to use the `git` command*

2. [optional] Install node and NPM if you haven't already

`npm install -g npm`

3. `cd` into the project folder then run:

`npm init -y`

4. Install the Alchemy SDK

`npm install --save alchemy-sdk`

5. Run the script

`node get-nfts.js <your-api-key>`

6. The code currently prints out the NFTs (contract names and tokenIds) owned by `0xshah.eth` feel free to modify it to replace it with your address or print out any other information about the NFT! 
