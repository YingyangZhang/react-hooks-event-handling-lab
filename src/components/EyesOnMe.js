import React from "react";

function focusE () {
    console.log('Good!');
}

function blurE () {
    console.log('Hey! Eyes on me!');
}

function EyesOneMe() {
    return (
        <div>
            <button onFocus = {focusE} onBlur = {blurE}>Eyes on me</button>
        </div>
    )
}

export default EyesOneMe;