import web3 from "./Web3";
import ABI, { contractAddress } from "./Configs";

const FrmsContract = new web3.eth.Contract(ABI, contractAddress);

export default FrmsContract;
