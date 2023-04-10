import React, { useState } from "react";
import { isAddress } from 'ethereum-address';

function ETHCheck() {
  const [useraddress, setAddress] = useState("");
  const [emessage ,setemessage] =useState(null) ;

  const validateAddress = () => {
    // try {
    //   setIsValidAddress(isAddress(useraddress));
    // } catch {
    //   setIsValidAddress(false);
    // }
    const result = isAddress(useraddress);
    if(result){
        setemessage(`This ETC address ${useraddress} is a valid Address`) ;
        
    }else{
        setemessage(`This ETC address ${useraddress} is a not valid Address`) ;
    }
  };

  return (
    <div>
      <label>
        Ethereum Address:
        <input value={useraddress} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <button onClick={validateAddress}>Validate</button>
      { emessage ? <div> {emessage}</div> : ""}

    </div>
  );
}

export default ETHCheck;
