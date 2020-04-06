const path = require("path")
const fs = require("fs")
 
const args = process.argv;
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
                    let fileData=filepath+"   "+data+`\n`;
                    var logger = fs.createWriteStream('log.txt', {
                        flags: 'a' 
                      })
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

