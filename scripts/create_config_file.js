const ConfigParser = require('configparser');

const config = new ConfigParser();

config.addSection('pizza');
config.set('pizza', 'ingredient_1', 'tomate');
config.set('pizza', 'ingredient_2', 'mozzarella');
config.set('pizza', 'ingredient_3', 'basilic')

config.addSection('crêpe');
config.set('crêpe', 'ingredient_1', 'farine');
config.set('crêpe', 'ingredient_2', 'oeuf');

config.write('recipes.cfg');
console.log('OK')