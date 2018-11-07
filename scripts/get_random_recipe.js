      
const ConfigParser = require('configparser');
const config = new ConfigParser();

config.read('recipes.cfg');
var x = Math.floor((Math.random() * config.sections().length) + 1);

console.log(config.sections()[x-1])
return (config.sections()[x-1])