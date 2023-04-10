import React, { useState } from "react";
import { validate } from 'bitcoin-address-validation';

function BTCCheck() {
  const [useraddress, setAddress] = useState("");
  const [emessage ,setemessage] =useState(null) ;
  const validateAddress = () => {
    // try {

    //   console.log(validate(useraddress));      
    //   setIsValid(validate(useraddress));

    // } catch {
    //   setIsValid(false);
    // }
    const result = validate(useraddress);
    if(result){
        setemessage(`This BTC address ${useraddress} is a valid Address`) ;
        
    }else{
        setemessage(`This BTC address ${useraddress} is a not valid Address`) ;
    }
  };

  return (
    <div>
      <label>
        Bitcoin Address:
        <input value={useraddress} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <button onClick={validateAddress}>Validate</button>
      { emessage ? <div> {emessage}</div> : ""}

    </div>
  );
}

export default BTCCheck;
