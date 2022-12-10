class feeling {

    id = 0;

    constructor(name, description, when, where){
        this.name = name;
        this.description = description;
        this.when = when;
        this.where = where;
    }
}

function FeelingList() {
   const list = [];

    const addFeel = (feeling) => {
        feeling.id = list.length; // i love me an internal id

        list.push(feeling);
    }

    const getList = () => {
        return list;
    }

    const showFeels = () => {
        list.forEach((feel) => {
            console.log(feel);
        })
    }

    return {
        addFeel,
        getList,
        showFeels
    }
}


// hardcoded bits to be gotten rid of later ///
const sad = new feeling("sad","kinda down","monday","work");
const glad = new feeling("glad","kinda nice","tuesday","home");
const mad = new feeling("mad","kinda angry","wednesday","work");

const list = FeelingList();

list.addFeel(sad);
list.addFeel(glad);
list.addFeel(mad);
    

function DomHandler() {

    const list = FeelingList();
    const table = document.querySelector('.list');

}