import { useEffect, useState } from 'react';
import ReadFile from './Components/ReadFile';
import Extra from './Components/Extra'
import './CSS/App.css';
// import NewRead from './Components/NewRead';
import NewData from './Components/NewData';
// import UseHardhat from './Components/UseHardhat';


function App() {

  // const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  // const [account, setAccount] = useState(null);
  // // const walletAddress = useContext(appContext)


  // useEffect( () =>{
  //   if(window.ethereum){
  //     setIsWalletInstalled(true);
  //   }
  // }, []);

  //     const connectWallet = async() => {
  //       window.ethereum.request({ method:"eth_requestAccounts"})
  //       .then( (accounts) => {
  //         setAccount(accounts[0]);
  //       }).catch( (e) => {
  //         alert(e)
  //       })
        
  //     }

  //   if(account === null){
  //     return(
  //       <div className="App">{
  //         isWalletInstalled? (<button className='connectBtn' onClick={connectWallet}> Connect </button>) : (
  //           <p>Install Metamask Wallet</p>
  //         )
  //       }
  //       </div>
  //     )
  //   }
  //   else {

  //     return(
  //       <div className="App">
  //         <p> Connected as : {account}</p>
  //         <ReadFile/>

  //         {/* <NewRead/> */}
  //       </div>
  //     )
  //   }
  return(
    <>
      {/* <UseHardhat/> */}
      <NewData/>
       {/* <ReadFile/> */}
   </>
  )

  

}

export default App;