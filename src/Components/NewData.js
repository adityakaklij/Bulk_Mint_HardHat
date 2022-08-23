import React from 'react'
// const writeFileP = require("write-file-p");

// import fs from 'fs'
// const {readFileSync , writeFileSync} = require('fs');
// import {readFileSync, writeFileSync} from 'fs'
import ReactTerminalCommand from 'react-terminal-command'



function NewData() {

    function createData(){
        
        // fs.writeFile("demo.txt", "CONTENT", "utf8", (error, data) => {
        //     console.log("Write complete");
        //     console.log(error);
        //     console.log(data);
        //   });
        // writeFileSync("first.txt" , "Extra text")
        
        
 
    }
    return (
        <div>
        <button onClick={createData}>Get data</button>

    </div>
  )
}

export default NewData