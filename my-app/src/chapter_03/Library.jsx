import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numofPage={300} />
            <Book name="처음 만난 AWS" numofPage={400} />
            <Book name="처음 만난 리액트" numofPage={500} />
        </div>
    );
}

export default Library;