
/*
                                                    Question 3
                                            
                                                Create Log files
                        o change the current process to the new Logs directory
                        o create 10 log files and write some text into the file
                        o output the files names to console
                        o Hint: use the fs module and path module, and the process current working directory to
                        o build directory path. It is acceptable, to have a remove.js script and separate add.js script.
                        o create a Logs directory, if it does not exist


*/
const fs = require('fs');


if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

process.chdir("Logs");

// Create 10 log files
for(let i = 0; i < 10; i++) {
    
    const filename = `log${i}.txt`;
    // Write text
    fs.writeFile(filename, 'Hello World', (err) => {
        // testing for errors
        if (err) {
            // Throw the error
            throw err;
        }
    });
    // Output 
    console.log(filename);
}