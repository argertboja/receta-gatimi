/*
** @author: Argert Boja
** @date: 23/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: The Result model helps in correctly showing a recipe result
*/

class ResultModel {
    constructor(id, label, time, value) {
        this.id = id;
        this.label = label;
        this.time = time;
        this.value = value;
    }
}

export default ResultModel;