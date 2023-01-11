class feeling {
	// will want to add other properties later: how long delayed, priority, etc.
	constructor(name, about, date, haveFelt = false, project = 'default') {
		this._name = name;
		this._about = about;
		this._date = date;
		this._haveFelt = haveFelt;
		this._project = project;
	}

	// for flipping the condition of "have felt"
	toggleFelt() {
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

	get about() {
		return this._about;
	}

	set about(value) {
		this._about = value;
	}

	get date() {
		return this._date;
	}

	set date(value) {
		this._date = value;
	}

	get haveFelt() {
		return this._haveFelt;
	}

	set haveFelt(value) {
		this._haveFelt = value;
	}

	get project() {
		return this._project;
	}

	set project(value) {
		this._project = value;
	}
}

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
	// sort by project
	//

	const showUniqueProjects = () => {
		// iterates through passed array of objects, and creates a new array of just the list of Projects
		// only shows unique projects, by making a new array of the set of the filtered array
		return Array.from(new Set(_list.map((array) => array.project)));
	};

	const showProjectSelection = (projectName) => {
		let projectList = _list.filter((feel) => feel.project === projectName);
		return projectList;
	};

	//edits main array and removes a feel
	const removeFeel = (index) => {
		_list.splice(index, 1);
	};

	return {
		addFeel,
		getAllFeels,
		showHaveFelt,
		showHaveNotFelt,
		showUniqueProjects,
		showProjectSelection,
		sortByRecent,
		removeFeel,
	};
}

// ok let's instantiate a local feelList

function DOMHandler() {
	// later on just make this an instance of FeelingList()
	let feelList = FeelingList();

	// --- hardcoded section start --- (to be removed later)

	const sad = new feeling(
		'sad',
		'how hard coding is',
		'date here',
		false,
		'delay'
	);
	const glad = new feeling(
		'glad',
		'every time my code runs',
		'date here',
		true,
		'me'
	);
	const mad = new feeling(
		'mad',
		`when i can't figure out how it works`,
		'date here',
		true,
		'me'
	);

	feelList.addFeel(sad);
	feelList.addFeel(glad);
	feelList.addFeel(mad);
	// ----------------- hardcoded section end ------------------

	let tempList = [];

	let currentProject = 'all';

	tempList = feelList;

	const containerDiv = document.querySelector('.container');
	const projectElement = document.createElement('ul');
	const listElement = document.createElement('ul');

	containerDiv.appendChild(projectElement);
	containerDiv.appendChild(listElement);

	const projectDisplay = () => {
		const projList = feelList.showUniqueProjects();

		// will this work to always have an "all" button?
		projList.push('all');

		for (let i = 0; i < projList.length; i++) {
			let button = document.createElement('button');

			button.innerHTML = `${projList[i]}`;
			button.name = `${projList[i]}`;
			button.value = `${projList[i]}`;
			button.id = `${projList[i]}`;

			button.addEventListener('click', function () {
				currentProject = `${projList[i]}`;

				if (currentProject === 'all') {
					displayList(feelList.getAllFeels());
				} else {
					displayList(feelList.showProjectSelection(currentProject));
				}

				// set the temp list here to the current sorted array of the projects, and then call displayList
				// or pass that array to displaylist? that'd be tidier
			});
			projectElement.appendChild(button);
		}

		// create buttons for each project
		// create event listener for each button
		// depending on which pressed, send that sorted array to displayList
	};

	// just display the list, handle the form element later on
	const displayList = (array) => {
		listElement.innerHTML = '';

		for (let i = 0; i < array.length; i++) {
			let item = document.createElement('li');

			item.textContent = `${array[i].name}, 
								${array[i].about}, 
								${array[i].date}`;

			let feltItButton = document.createElement('button');

			console.log(array[i].haveFelt);

			if (array[i].haveFelt === false) {
				feltItButton.textContent = 'Felt it?';
				item.removeAttribute('class', 'haveFelt');
			} else {
				feltItButton.textContent = 'Feeling it again?';
				item.setAttribute('class', 'haveFelt');
			}

			feltItButton.id = i;
			
// some redundant code bullshit, but can't figure out just now

			feltItButton.addEventListener('click', function () {
				array[i].toggleFelt();

				if (array[i].haveFelt === false) {
					feltItButton.textContent = 'Felt it?';
					item.removeAttribute('class', 'haveFelt');
				} else {
					feltItButton.textContent = 'Feeling it again?';
					item.setAttribute('class', 'haveFelt');
				}
			});

			item.appendChild(feltItButton);

			listElement.appendChild(item);
		}

		addForm(); // so whenever you call a display, it plops in a form line at the end!
		return;
	};

	const createForm = () => {
		// create form
		const form = document.createElement('form');

		// create input fields

		const inFeel = document.createElement('input');
		inFeel.type = 'text';
		inFeel.name = 'inFeel';
		inFeel.placeholder = `What's the Feeling?`;

		const inDesc = document.createElement('input');
		inDesc.type = 'text';
		inDesc.name = 'inDesc';
		inDesc.placeholder = `What's it about?`;

		const inWhen = document.createElement('input');
		inWhen.type = 'text';
		inWhen.name = 'inWhen';
		inWhen.placeholder = 'When? YYYY-MM-DD';

		const submitButton = document.createElement('button');
		submitButton.type = 'submit';
		submitButton.textContent = '+';

		form.appendChild(inFeel);
		form.appendChild(inDesc);
		form.appendChild(inWhen);
		form.appendChild(submitButton);

		form.addEventListener('submit', function (event) {
			event.preventDefault();

			// create the feeling from the form content
			let tempFeel = new feeling(
				form.elements.inFeel.value,
				form.elements.inDesc.value,
				form.elements.inWhen.value
			);

			// add the feeling to the main list
			feelList.addFeel(tempFeel);

			// run the display code to refresh the display
			// if the current project list is all, show all feels, otherwise show project list of current project
			if (currentProject === 'all') {
				displayList(feelList.getAllFeels());
			} else {
				displayList(feelList.showProjectSelection(currentProject));
			}
		});
		return form;
	};

	const addForm = () => {
		let formLine = document.createElement('li');
		formLine.appendChild(createForm());
		listElement.appendChild(formLine);
	};

	// maybe have a function that just runs the full display functions in proper order
	//

	// initial calls after functions have been declared

	projectDisplay();

	// initial display of all feels
	displayList(feelList.getAllFeels());
}

DOMHandler();
