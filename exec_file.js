const {execFile}=require('child_process');
execFile('dir', (error, stdout, stderr)=>{
    if(error){
        console.log(`error : ${error.message}`);
        return
    }

    if(stderr){
        console.log(`stderr : ${stderr}`);
        return
    }

    console.log(`stdout : ${stdout}`);


})