const colors = require(colors);

console.log('hello'.green);
console.log('i like cake and pies'.underLine.red);
console.log('inverse the color'.inverse);
console.log('Es un arcoiris'.rainbow);
console.log('Run the trap'.trap);

colors.setTheme({
    silly: 'rainbow'
    input: 'grey'
    verbose: 'cyan'
    prompt: 'grey'
    info: 'grenn'
    data: 'grey'
    help: 'cyan'
    warn: 'yellow'
    debug: 'blue'
    error: 'red'
});

console.log("nuevo estilo")



