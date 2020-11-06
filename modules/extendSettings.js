export const extendSettings = function() {

    game.settings.register("cof", "useChocPoints", {
        name: "Points de Choc",
        hint: "Utiliser la règle optionnelle des points de Choc",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        onChange: lang => window.location.reload()
    });

};