import {CofActor} from "./actors/actor.js";
    import {DND5E} from '/systems/dnd5e/module/config.js';
/*-- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -
 ----------------INIT--------------------
 -- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -*/
Hooks.once("init", async function() {

    
    // Define Sanity as an ability
    DND5E.abilities["san"] = "Sanity";
    DND5E.abilityAbbreviations["san"] = "san";
    
    // Add Sanity to the 5e Actor data model
    const prep = Actor5e.prototype.prepareBaseData;	
    function extendActorData() {
        const abl = this.data.data.abilities;
        abl["san"] = abl["san"] || {value: 10, proficient: 0};
        return prep.call(this);
    }
    Actor5e.prototype.prepareBaseData = extendActorData;
    
    // Add Survival resource counters
    Hooks.on("renderActorSheet", (app, html, data) => {
        const counters = html.find("div.counters");
        const flags = data.actor.flags.oota || {};
        counters.append(`
        <div class="counter flexrow hunger">
        <h4>Hunger</h4>
        <div class="counter-value">
          <input type="text" name="flags.oota.hunger" placeholder="0" value="${flags.hunger ?? 0}" data-dtype="Number"/>
        </div>
        </div>
        <div class="counter flexrow thirst">
        <h4>Thirst</h4>
        <div class="counter-value">
          <input type="text" name="flags.oota.thirst" placeholder="0" value="${flags.thirst ?? 0}" data-dtype="Number"/>
        </div>
        </div>
        <div class="counter flexrow fatigue">
        <h4>Fatigue</h4>
        <div class="counter-value">
          <input type="text" name="flags.oota.fatigue" placeholder="0" value="${flags.fatigue ?? 0}" data-dtype="Number"/>
        </div>
        </div>
        `);
    });
    

});



Hooks.once("ready", async function() {

    //----logo image
    var logo = document.getElementById("logo");
    logo.setAttribute("src", "modules/chroniques_contemporain/images/CoClogo.png");

});
Hooks.on("renderActorSheet", async function() {

});