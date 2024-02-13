var os = require("os");
var hostname = os.hostname();
var fs = require('fs');
var path = '/tmp/hostname'

if (fs.existsSync(path)) {
    // file exists
    console.log("hello from " + fs.readFileSync(path, 'utf8'));
} else {
    try {
        fs.writeFileSync(path, hostname);
        // file written successfully
        console.log("hello from " + hostname);
    } catch (err) {
        console.error(err);
    }
}