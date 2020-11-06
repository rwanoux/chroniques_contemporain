import {CofCharacterSheet} from "../../../../systems/cof/module/actors/character-sheet.js";
export class CocActorSheet  extends CofCharacterSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["cof", "sheet", "actor", "character"],
            template: "/systems/cof/templates/actors/character/character-sheet.hbs",
           
        });
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
    }

    /** @override */
    setPosition(options = {}) {
        const position = super.setPosition(options);
        const sheetBody = this.element.find(".sheet-body");
        const bodyHeight = position.height - 192;
        sheetBody.css("height", bodyHeight);
        return position;
    }

}