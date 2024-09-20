import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>안뇽, 리액트!</h1>
            <h2>지금 시간은 {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;