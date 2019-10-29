/*
** @author: Argert Boja
** @date: 23/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The Result model helps in correctly showing a recipe result
*/

class ResultModel {
    constructor(id, label, time, value, ingredients, steps) {
        this.id = id;
        this.label = label;
        this.time = time;
        this.value = value;
        this.ingredients = ingredients;
        this.steps = steps;
    }
}

export default ResultModel;