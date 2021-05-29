    import Web3 from 'web3'
    
    async function makeConnection(){
    if (window.ethereum) {
          const {result} = await window.ethereum.send('eth_requestAccounts');
          var account = result[0];
          var web3 = new Web3(window.ethereum);
      } else{
          alert('Please install metamask to continue');
      }
    return makeResultObj(web3,account);
    }

    function makeResultObj(web3,account){
        return {
            web3 : web3 ,
            account : account
        }
    }

    export default makeConnection;