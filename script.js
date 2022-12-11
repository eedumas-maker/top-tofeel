class feeling {
    id = 0;

    constructor(name, description, when, where, haveFelt = false){
        this.name = name;
        this.description = description;
        this.when = when;
        this.where = where;
        this.haveFelt = haveFelt;
    }
    
}

// contains main list as well as all sorting logic

function FeelingList() {
   const _list = [];

    const addFeel = (feeling) => {
        feeling.id = _list.length; // i love me an internal id

        _list.push(feeling);
    }

    const getAllFeels = () => {
        return _list;
    }

    const showHaveFelt = () => {
        let haveFeltList = _list.filter(function (feel) {
            return feel.haveFelt === true;
        })
        return haveFeltList;
    }

    const showHaveNotFelt = () => {
        let haveNotFeltList = _list.filter(function (feel){
            return feel.haveFelt === false;
        })
        return haveNotFeltList;
    }

    return {
        addFeel,
        getAllFeels,
        showHaveFelt,
        showHaveNotFelt
    }
}


// hardcoded bits to be gotten rid of later ///
const sad = new feeling("sad","kinda down","monday","work");
const glad = new feeling("glad","kinda nice","tuesday","home", true);
const mad = new feeling("mad","kinda angry","wednesday","work", true);

const list = FeelingList();

list.addFeel(sad);
list.addFeel(glad);
list.addFeel(mad);
