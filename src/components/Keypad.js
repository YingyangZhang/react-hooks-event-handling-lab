import React from "react";

function enterPassword() {
    console.log('Entering password...');
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={enterPassword}/>
        </div>
    )
}

export default Keypad;