import {CofActor} from "../../systems/cof/module/actors/actor.js";
import {extendSettings} from "./modules/extendSettings.js";


import {CocActorSheet} from "./modules/actors/actor-sheet.js";
import {CocItemSheet} from "./modules/items/item-sheet.js";
import {CocActor} from "./modules/actors/actor.js";
import {CocItem} from "./modules/items/item.js";

Hooks.once("init", async function () {
extendSettings();
    console.info("COC Module Initializing...");

    // Define custom Entity classes
    CONFIG.Actor.entityClass = CocActor;
    CONFIG.Item.entityClass = CocItem;

    // Create a namespace within the game global
    // game.coc = {
    //     config: COC
    // };

    // Register actor sheets
    Actors.registerSheet("coc", CocActorSheet, {types: ["character", "npc"], makeDefault: true});
    // Register item sheets
    // Items.registerSheet("cof", CofItemSheet, {types: ["item", "capacity", "profile", "path", "species", "armor", "shield", "melee", "ranged", "spell", "trapping"], makeDefault: true});
    Items.registerSheet("coc", CocItemSheet, {types: ["item", "capacity", "profile", "path", "species"], makeDefault: true});

/*-- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -
modèle pour étendre le template
 -- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -
 */
 
    const prep = CofActor.prototype.prepareBaseData;	
    function extendActorData() {
        const at = this.data.data.attributes;
        at["cp"] =  {
            "key" : "cp",
            "label" : "point de choc",
            "abbrev" : "point de choc",
            "base": 12,
            "bonus": 0,
            "value": 0,
            "max": 10
          };

        return prep.call(this);
    }
    CofActor.prototype.prepareBaseData = extendActorData;
    
});




Hooks.once("ready", async function() {

    //----logo image
    var logo = document.getElementById("logo");
    logo.setAttribute("src", "/modules/chroniques_contemporain/images/CoClogo.png");

});

Hooks.on("renderActorSheet", async function(app,html,data) {
    //logo du vtt
let logo=html.find("#logo-banner").find("img")[0];
//header fiche de perso
logo.src= "/modules/chroniques_contemporain/images/coc_logo.png";
logo.style.marginTop="15px";
html.find("#banner-right")[0].style.display="none";
html.find("#banner-left")[0].style.display="none";
html.find(".header-background")[0].style.background="modules/chroniques_contemporain/images/coc_header.png"


let dg=html.find(".bg-darkgreen");

dg.removeClass(".bg-darkgreen");
dg.addClass("bg-dark");


})