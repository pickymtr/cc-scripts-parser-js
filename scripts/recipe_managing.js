const ConfigParser = require('configparser');

function get_ingredients_list(recipe) {
        const config = new ConfigParser();

        config.read('recipes.cfg');
        var liste = []
        var nb = 1
        var ing = config.get('pizza', 'ingredient_'+ nb.toString());
        while (ing) {
                liste.push(ing);
                nb += 1
                ing = config.get('pizza', 'ingredient_'+ nb.toString());
        }
        return (liste)
}

function get_random_recipe() {
        const config = new ConfigParser();

        config.read('recipes.cfg');
        var x = Math.floor((Math.random() * config.sections().length) + 1);

        console.log("coucou")
        return (config.sections()[x-1]);
}

function init_all_commands() {

        var liste_commands=[]
        for (var i=0; i < 4; i++) {
                liste_commands.push(get_random_recipe());
        }
        return (liste_commands)
}
