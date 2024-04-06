const {stdout,stdin,stderr,argv,exit}=require("node:process")
const fs= require("node:fs")
const filePath=argv[2];
if(filePath){
    const filestream= fs.createReadStream(filePath)
    filestream.pipe(stdout)
    filestream.on("end",()=>{
        exit(0);
    })
}
stdin.on("data",(chunk)=>{
    stdout.write(chunk.toString("utf-8").toUpperCase())
})