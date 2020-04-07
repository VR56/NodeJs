const path = require("path");
const fs = require("fs");
const crypto = require('crypto-js');

 
const args = process.argv;
let flag = 0;
if(args[2]===undefined)
    console.log("No arguments are given!");
else{
    function getAllFiles(dirPath){
        try{
            fs.readdirSync(dirPath).forEach(function(file) {
                let filepath = path.join(dirPath , file);
                let stat= fs.statSync(filepath);
                if (stat.isDirectory()) {            
                  getAllFiles(filepath);
                } else {
                    console.info(filepath); 
                    let data = fs.readFileSync(filepath);
                    let encryptedMD5Data=crypto.MD5(data).toString();
                    let encryptedSHA1Data=crypto.SHA1(data).toString();
                    let fileData=filepath+"   "+encryptedMD5Data+"    "+encryptedSHA1Data+`\n`;
                    if(flag===0){
                        var logger = fs.createWriteStream('log.txt', {
                            flags: 'w' 
                          }) 
                          flag++;
                    }
                    else{
                        var logger = fs.createWriteStream('log.txt', {
                            flags: 'a' 
                          })
                    }
                    logger.write(fileData)
                }    
            }); 
        }
        catch{
            console.log("The path given is not a path of a directory!");
        }
     
    }
    getAllFiles(args[2]);
}

