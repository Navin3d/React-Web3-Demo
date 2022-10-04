import { useEffect, useState } from "react";

import FrmsContract from "../blockchain/FRMS-Contract";


const INITIAL_STATE = {
    0: ["Hello"],
    1: ["Hello"]
}

const Home = () => {

    const [fundRequests, setFundRequests] = useState(INITIAL_STATE);

    useEffect(() => {
        // console.log(`Web3 Version from Home.jsx: ${web3.version}`);
        // web3.eth.getAccounts().then(console.log);
        FrmsContract.methods.getAllRequests().call().then(setFundRequests)
        // console.log("FRMS Contract: ", );
    }, []);

    return (
        <div>
            <h1>This is Home Page!</h1>
            {
                fundRequests["0"].map((req, index) => (
                    <h1>{ req } - { fundRequests["1"].at(index) }</h1>
                ))
            }
        </div>
    );
}

export default Home;
// 0x12354e30aa6dcb850c5c4d93008376559461636e77fbac064e84953f5821aa75
// 0xc8dBD51D84a097DC64649FfD624e09E1BAc19889
// 0x8be0b98857545153269cC8fE04809721f5250ecE