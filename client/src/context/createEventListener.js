/** @format */

import { ethers } from "ethers";
import { ABI } from "../contract";

const AddNewEvent = (eventFilter, provider, cb) => {
  provider.removeListener(eventFilter);

  provider.on(eventFilter, (logs) => {
    const parsedLog = new ethers.utils.Interface(ABI).parseLog(logs);
    cb(parsedLog);
  });
};

export const createEventListener = ({navigate, contract, provider, walletAddress, setShowAlert}) => {
    const NewPlayerEventFilter = contract.filters.NewPlayer()


    AddNewEvent(NewPlayerEventFilter, provider, ({args}) => {
        console.log("New Player created", args);
        if (walletAddress === args.owner){
            setShowAlert({
                status : true,
                type : 'success',
                message : "Player has been successfully created"
            })
        }
    })
}