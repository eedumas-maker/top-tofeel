class feeling {

    // will want to add other properties later: how long delayed, priority, etc.
    constructor(name, description, date, where, haveFelt = false){
        this.name = name;
        this.description = description;
        this.date= date;
        this.where = where;
        this.haveFelt = haveFelt;
    }

    // for flipping the condition of "have felt"
    changeFelt () {
        if(this.haveFelt !== true){
            this.haveFelt = true;
        }
        else {
            this.haveFelt = false;
        }
        return;
    }
}

// contains main list as well as all sorting logic

function FeelingList() {
   const _list = [];

   // just a simple push to add a feel to the list
    const addFeel = (feeling) => {
        _list.push(feeling);
    }

    // lets you access the internal array
    const getAllFeels = () => {
        return _list;
    }

    // uses filter function to pull out and make temp array 
    const showHaveFelt = () => {
        let haveFeltList = _list.filter(function (feel) {
            return feel.haveFelt === true;
        })
        return haveFeltList;
    }

    // same as above
    const showHaveNotFelt = () => {
        let haveNotFeltList = _list.filter(function (feel){
            return feel.haveFelt === false;
        })
        return haveNotFeltList;
    }

    // sort be recent, but don't alter original list
    const sortByRecent = () => {
        return sortedList = _list.slice().sort((a,b) => b.date - a.date);
    }

    // to add: 
    // sort by time (recent first)
    // sort by location
    // 

    //edits main array and removes a feel
    const removeFeel = (index) => {
        _list.splice(index, 1);
    }

    return {
        addFeel,
        getAllFeels,
        showHaveFelt,
        showHaveNotFelt,
        sortByRecent,
        removeFeel
    }
}


// hardcoded bits to be gotten rid of later ///
const sad = new feeling("sad","kinda down",new Date('2022-11-01'),"work");
const glad = new feeling("glad","kinda nice",new Date('2022-12-09'),"home", true);
const mad = new feeling("mad","kinda angry",new Date('2022-12-06'),"work", true);

const list = FeelingList();

list.addFeel(sad);
list.addFeel(glad);
list.addFeel(mad);
