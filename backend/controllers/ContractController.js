const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);

//Asume that the contract is an ERC20 token
const abi = [
  "function owner() view returns (address)",
];

exports.getContract = async (req, res) => {
    try {
    const contract = new ethers.Contract(req.params.id, abi, provider);
    const balanceWei = await provider.getBalance(req.params.id);
    const balanceEther = ethers.formatEther(balanceWei);
    // Get the owner of the contract ERC20
    const owner = await contract.owner();
    res.status(200).json({
      owner: owner,
      balance: balanceEther
    });
  } catch (error) {
    res.status(500).json(error)
  }
}


