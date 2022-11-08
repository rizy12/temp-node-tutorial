// GLOBALS   - NO WINDOW !!!

// __dirname   -  path to current director
// __filename  -  file name
// require     -  function to use modul(CommonJS)
// module      - info about current module
// process     -info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
    console.log(`hello world`);
}, 1000)