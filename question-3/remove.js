/*
                                                    Question 3

                                                Remove Log files

                            o remove all the files from the Logs directory, if exists
                            o output the file names to delet

*/
const fs = require('fs');
const path = require('path');


if(fs.existsSync("Logs")) {
    
    fs.readdir("Logs", (err, files) => {
       
        if (err) throw err;
        for (const file of files) {
            const filepath = path.join("Logs", file);
            fs.unlink(filepath, err => {
                if (err) throw err;
            });
            
            console.log(`Delete Files...${file}`);
        }
        
        fs.rmdirSync("Logs");
    });
}