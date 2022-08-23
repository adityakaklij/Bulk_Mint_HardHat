// import React from 'react'

// const fs = require('fs')
function CreateFile() {

    const data = [{"Adi":1},{"Adi":2},{"Adi":3},{"Adi":4},{"Adi":5}]
    fs.writeFile('./User/file.js', data , err =>{
        if(err){
            console.log(error)
        }
    })
}

CreateFile()

// export default CreateFile