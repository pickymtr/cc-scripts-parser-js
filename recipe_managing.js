function get_random_recipe() {
        const ConfigParser = require('configparser');
        const config = new ConfigParser();

        config.read('recipes.cfg');
        var x = Math.floor((Math.random() * config.sections().length) + 1);

        return (config.sections()[x-1]);
}

function init_all_commands() {

        var liste_commands=[]
        for (var i=0; i < 4; i++) {
                liste_commands.push(get_random_recipe());
        }
        return (liste_commands)
}

init_all_commands();