class feeling {
	// will want to add other properties later: how long delayed, priority, etc.
	constructor(name, description, date, where, haveFelt = false) {
		this._name = name;
		this._description = description;
		this._date = date;
		this._where = where;
		this._haveFelt = haveFelt;
	}

	// for flipping the condition of "have felt"
	changeFelt() {
		if (this._haveFelt !== true) {
			this._haveFelt = true;
		} else {
			this._haveFelt = false;
		}
		return;
	}

	// ok write some gets and sets
	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get description() {
		return this._description;
	}

	set description(value) {
		this._description = value;
	}

	get date() {
		return this._date;
	}

	set date(value) {
		this._date = value;
	}

	get where() {
		return this._where;
	}

	set where(value) {
		this._where = value;
	}
}

// contains main list as well as all sorting logic

function FeelingList() {
	const _list = [];

	// just a simple push to add a feel to the list
	const addFeel = (feeling) => {
		_list.push(feeling);
	};

	// lets you access the internal array
	const getAllFeels = () => {
		return _list;
	};

	// uses filter function to pull out and make temp array
	const showHaveFelt = () => {
		let haveFeltList = _list.filter(function (feel) {
			return feel.haveFelt === true;
		});
		return haveFeltList;
	};

	// same as above
	const showHaveNotFelt = () => {
		let haveNotFeltList = _list.filter(function (feel) {
			return feel.haveFelt === false;
		});
		return haveNotFeltList;
	};

	// sort be recent, but don't alter original list
	const sortByRecent = () => {
		return (sortedList = _list.slice().sort((a, b) => b.date - a.date));
	};

	// to add:
	// sort by location
	//

	//edits main array and removes a feel
	const removeFeel = (index) => {
		_list.splice(index, 1);
	};

	return {
		addFeel,
		getAllFeels,
		showHaveFelt,
		showHaveNotFelt,
		sortByRecent,
		removeFeel,
	};
}

// --- hardcoded section start --- (to be removed later)
const sad = new feeling('sad', 'kinda down', new Date('2022-11-01'), 'work');
const glad = new feeling(
	'glad',
	'kinda nice',
	new Date('2022-12-09'),
	'home',
	true
);
const mad = new feeling(
	'mad',
	'kinda angry',
	new Date('2022-12-06'),
	'work',
	true
);

const list = FeelingList();

list.addFeel(sad);
list.addFeel(glad);
list.addFeel(mad);
// --- hardcoded section end ---

function DOMHandler() {
	// later on just make this an instance of FeelingList()
	let feelList = list.getAllFeels();

	const containerDiv = document.querySelector('.container');
	const listElement = document.createElement('ul');

	containerDiv.appendChild(listElement);

	// i need code that iterates through the array, and displays each feeling in the list and ends with a form line

	// just display the list, handle the form element later on
	const displayList = () => {
		// refresh the list
		listElement.innerHTML = '';

		for (let i = 0; i < feelList.length; i++) {
			let item = document.createElement('li');

			item.textContent = `${feelList[i].name}, 
								${feelList[i].description}, 
								${feelList[i].date}, 
								${feelList[i].where}`;

			listElement.appendChild(item);
		}
		return list;
	};

	displayList();

	const createForm = () => {
		// create form
		const form = document.createElement('form');

		// create input fields

		const inFeel = document.createElement('input');
		inFeel.type = 'text';
		inFeel.name = 'inFeel';
		inFeel.placeholder = 'Name your feeling';

		const inDesc = document.createElement('input');
		inDesc.type = 'text';
		inDesc.name = 'inDesc';
		inDesc.placeholder = 'Describe your feeling';

		const inWhen = document.createElement('input');
		inWhen.type = 'text';
		inWhen.name = 'inWhen';
		inWhen.placeholder = 'When? YYYY-MM-DD';

		const inWhere = document.createElement('input');
		inWhere.type = 'text';
		inWhere.name = 'inWhere';
		inWhere.placeholder = 'Where did you feel it?';

		const submitButton = document.createElement('button');
		submitButton.type = 'submit';
		submitButton.textContent = 'Submit';

		form.appendChild(inFeel);
		form.appendChild(inDesc);
		form.appendChild(inWhen);
		form.appendChild(inWhere);
		form.appendChild(submitButton);

		form.addEventListener('submit', function (event) {
			event.preventDefault();

			// create the feeling from the form content
			let tempFeel = new feeling(
				form.elements.inFeel.value,
				form.elements.inDesc.value,
				form.elements.inWhen.value,
				form.elements.inWhere.value
			);

			// add the feeling to the main list
			feelList.push(tempFeel);

			// run the display code to refresh the display
			displayList();

			// code to make sure a final line has the form element
			let formLine = document.createElement('li');
			formLine.appendChild(form);
			listElement.appendChild(formLine);
		});
		return form;
	};

	let formLine = document.createElement('li');
	formLine.appendChild(createForm());

	listElement.appendChild(formLine);
}

DOMHandler();
