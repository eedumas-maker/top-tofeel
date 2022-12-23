class feeling {
	// will want to add other properties later: how long delayed, priority, etc.
	constructor(name, description, date, where, haveFelt = false) {
		this.name = name;
		this.description = description;
		this.date = date;
		this.where = where;
		this.haveFelt = haveFelt;
	}

	// for flipping the condition of "have felt"
	changeFelt() {
		if (this.haveFelt !== true) {
			this.haveFelt = true;
		} else {
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

	const item1 = document.createElement('li');

	listElement.appendChild(item1);
	containerDiv.appendChild(listElement);

	const addLine = () => {
		const newLine = document.createElement('li');

		listElement.appendChild(newLine);
	};

	const formHandler = () => {
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

		item1.appendChild(form);

		form.addEventListener('submit', function (event) {
			event.preventDefault();

			addLine();

			let feel = form.elements.inFeel.value;
			let desc = form.elements.inDesc.value;
			let when = form.elements.inWhen.value;
			let where = form.elements.inWhere.value;

			// add line function
			// displayLine function

			const lastItem = listElement.lastChild;

			lastItem.innerHTML = `${feel}, ${desc}, ${when}, ${where}`;
		});
	};
	formHandler();

	return {
		formHandler,
	};
}

DOMHandler();
