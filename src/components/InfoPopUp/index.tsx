import React from "react";
import { IoMusicalNoteOutline, IoHelpCircleOutline } from "react-icons/io5";
import { Button } from "..";
import {ethers} from "ethers";
import * as Styled from "./index.styled";
declare var window: any

//const [text, setText] = React.useState<string>("");


interface Props {
  onClose: () => void;
}

export function InfoPopUp({ onClose }: Props) {
  const [currentAccount, setCurrentAccount] = React.useState<string>("");
  const [isWalletConnected, setWalletConnected] = React.useState<boolean>(false);
  /*
  * Gotta make sure this is async.
  */


  const checkWalletConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
    } else {
        console.log("We have the ethereum object", ethereum);
    }

    /*
    * Check if we're authorized to access the user's wallet
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    /*
    * User can have multiple authorized accounts, we grab the first one if its there!
    */
    if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
    } else {
        console.log("No authorized account found")
    }
}
/*
* Implement your connectWallet method here
*/
const connectWallet = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }


    /*
    * Fancy method to request access to account.
    */
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    /*
    * Boom! This should print out public address once we authorize Metamask.
    */
    console.log("Connected", accounts[0]);
    setWalletConnected(true);
    alert("Connected!");
    setCurrentAccount(accounts[0]); 
  } catch (error) {
    console.log(error)
  }
}

  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Welcome! 👋</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={70} />
          <p>
           Ready to play VEVO guesser?? You have 5 guesses to guess the correct song!
          </p>
        </Styled.Section>
        <Styled.Section>
          <IoHelpCircleOutline size={50} />
          
        </Styled.Section>
        <Button variant="background100" style={{ marginTop: 20 }} onClick={connectWallet}>
        {isWalletConnected ? (

                   <p>
                   
                    {currentAccount.substring(0, 6) +
                      "..." +
                      currentAccount.substring(38, 42)}
                  </p>
                ) : (
                  <div>Connect Wallet</div>
                )}
        </Button>
        <Button variant="background100" style={{ marginTop: 20 }} onClick={onClose}>
          Enter
        </Button>
      </Styled.PopUp>
    </Styled.Container>
  );
}
