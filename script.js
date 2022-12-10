class feeling {

    id = 0;

    constructor(name, description, when, where){
        this.name = name;
        this.description = description;
        this.when = when;
        this.where = where;
    }
}

class feelingList {
    list = [];

    addFeel(feeling){
        feeling.id = this.list.length; // i love me an internal id

        this.list.push(feeling);
    }

    showFeelsIn(){
        for(let feel in this.list){
            console.log(this.list[feel]);
        }
    }

    showFeelsOf(){
        for(let feel of this.list){
            console.log(feel);
        }
    }

    showFeelsForEach(){
        this.list.forEach((feel) => {
            console.log(feel);
        })
    }
}

const sad = new feeling("sad","kinda down","monday","work");
const glad = new feeling("glad","kinda nice","tuesday","home");
const mad = new feeling("mad","kinda angry","wednesday","work");

const newFeelsList = new feelingList();

newFeelsList.addFeel(sad);
newFeelsList.addFeel(glad);
newFeelsList.addFeel(mad);
