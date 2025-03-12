// PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1> cd "C:\Users\SUDIP BHATTACHARYA\Desktop\BACKEND\Backend-part2"
// PS C:\Users\SUDIP BHATTACHARYA\Desktop\WEB\P1> node test.js
// https://nodejs.org/docs/latest/api/fs.html
// cjs - command js
// ejs - echma js(treat file as a module)
// const fs = require('node:fs');
// fs.writeFile(file, data[, options], callback)
// const { log } = require('console');
// https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback
// writefile
// copyfile
// rename
// unlink 
// append

// const fs = require('fs');

// fs.writeFile("learnNode.txt", "learning the basics of Node js",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("done");
//     }
// })

// fs.appendFile("learnNodeJS.txt", " and leaning new things",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("done");
//     }
// })
//appendfile use to add upon existed file

// fs.rename("learnNode.txt","learnNodeJS.txt",function(err){
//     if (err) {
//         console.log(err);
//     }else{
//         console.log("done!");
//     }
// })

// fs.copyFile("learnNode.txt","C:\Users\SUDIP BHATTACHARYA\Desktop\BACKEND\Backend-part1",function(err){
//     if (err) {
//         console.log(err.message);
//     }else{
//         console.log("done!");
//     }
// })

// fs.unlink("UsersSUDIP BHATTACHARYADesktopBACKENDBackend-part1",function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// fs.rm("UsersSUDIP BHATTACHARYADesktopBACKENDBackend-part1", { recursive: true }, function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Directory removed successfully");
//     }
// });// rm or rmdir to remove folders

// protocol
// http 
// hyper text transfer protocol - transfering and recieving data is gone through http
// It's the foundation of data communication on the World Wide Web. When you enter a URL into your web browser, such as "https://www.example.com," your browser sends an HTTP request to the server hosting the website.
// The server then responds with an HTTP response,
// which includes the data needed to display the web page in your browser.

const http = require("http");
const server = http.createServer(function name(req,res) {
    res.end("hello")
})

server.listen(3000);

// NPM-module
// installing and uninstalling anything
// node_modules
// dependencies
// script

// Callback API
// fs.access(path[, mode], callback)
// fs.appendFile(path, data[, options], callback)
// fs.chmod(path, mode, callback)
// File modes
// fs.chown(path, uid, gid, callback)
// fs.close(fd[, callback])
// fs.copyFile(src, dest[, mode], callback)
// fs.cp(src, dest[, options], callback)
// fs.createReadStream(path[, options])
// fs.createWriteStream(path[, options])
// fs.exists(path, callback)
// fs.fchmod(fd, mode, callback)
// fs.fchown(fd, uid, gid, callback)
// fs.fdatasync(fd, callback)
// fs.fstat(fd[, options], callback)
// fs.fsync(fd, callback)
// fs.ftruncate(fd[, len], callback)
// fs.futimes(fd, atime, mtime, callback)
// fs.glob(pattern[, options], callback)
// fs.lchmod(path, mode, callback)
// fs.lchown(path, uid, gid, callback)
// fs.lutimes(path, atime, mtime, callback)
// fs.link(existingPath, newPath, callback)
// fs.lstat(path[, options], callback)
// fs.mkdir(path[, options], callback)
// fs.mkdtemp(prefix[, options], callback)
// fs.open(path[, flags[, mode]], callback)
// fs.openAsBlob(path[, options])
// fs.opendir(path[, options], callback)
// fs.read(fd, buffer, offset, length, position, callback)
// fs.read(fd[, options], callback)
// fs.read(fd, buffer[, options], callback)
// fs.readdir(path[, options], callback)
// fs.readFile(path[, options], callback)
// File descriptors
// Performance Considerations
// fs.readlink(path[, options], callback)
// fs.readv(fd, buffers[, position], callback)
// fs.realpath(path[, options], callback)
// fs.realpath.native(path[, options], callback)
// fs.rename(oldPath, newPath, callback)
// fs.rmdir(path[, options], callback)
// fs.rm(path[, options], callback)
// fs.stat(path[, options], callback)
// fs.statfs(path[, options], callback)
// fs.symlink(target, path[, type], callback)
// fs.truncate(path[, len], callback)
// fs.unlink(path, callback)
// fs.unwatchFile(filename[, listener])
// fs.utimes(path, atime, mtime, callback)
// fs.watch(filename[, options][, listener])
// Caveats
// Availability
// Inodes
// Filename argument
// fs.watchFile(filename[, options], listener)
// fs.write(fd, buffer, offset[, length[, position]], callback)
// fs.write(fd, buffer[, options], callback)
// fs.write(fd, string[, position[, encoding]], callback)
// fs.writeFile(file, data[, options], callback)
// Using fs.writeFile() with file descriptors
// fs.writev(fd, buffers[, position], callback)
