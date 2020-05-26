let currentHero = 0;
let currentVillain = 0;

let currentScreen = 'heroes';

const script = {
	"intent.living-app.start": () => splash,
	"intent.tour-of-heroes.home": () => home,
	"intent.tour-of-heroes.heroes": (data) => {
		currentScreen = "heroes";
		return { ...heroes, current: currentHero }
	},
	"intent.tour-of-heroes.villains": (data) => {
		currentScreen = "villains";
		return { ...villains, current: currentHero }
	},
	"intent.operation.tour-of-heroes.next": () => {
		let newIndex = 0;
		let oldIndex = 0;
		switch (currentScreen) {
			case "heroes":
				oldIndex = currentHero;
				currentHero = (currentHero + 1) % heroes.heroes.length;
				newIndex = currentHero;
				break;
			case "villains":
				oldIndex = currentVillain;
				currentVillain = (currentVillain + 1) % villains.villains.length;
				newIndex = currentVillain;
				break;
		}
		return operationNext(newIndex, oldIndex);
	},
	"intent.operation.tour-of-heroes.previous": () => {
		let newIndex = 0;
		let oldIndex = 0;
		switch (currentScreen) {
			case "heroes":
				oldIndex = currentHero;
				currentHero = (heroes.heroes.length + currentHero - 1) % heroes.heroes.length;
				newIndex = currentHero;
				break;
			case "villains":
				oldIndex = currentVillain;
				currentVillain = (villains.villains.length + currentHero - 1) % villains.villains.length;
				newIndex = currentVillain;
				break;
		}
		return operationPrevious(newIndex, oldIndex);
	},
	"intent.tour-of-heroes.qna": () => { },
	"intent.operation.tour-of-heroes.back": () => { },
	"intent.operation.sdk.persist": () => { },
	"Atrás": () => { },
	"intent.living-app.close": () => close,
};

const operationNext = (newIndex, oldIndex) => {
	return {
		name: 'LIVING_APP.NEXT',
		parameters: {
			newIndex: newIndex,
			oldIndex: oldIndex
		}
	}
}

const operationPrevious = (newIndex, oldIndex) => {
	return {
		name: 'LIVING_APP.PREVIOUS',
		parameters: {
			newIndex: newIndex,
			oldIndex: oldIndex
		}
	}
}

const splash = {
	"activeChannels": [
		"movistar-home",
		"set-top-box-haac"
	],
	"screen": "splash"
};

const home = {
	"activeChannels": [
		"movistar-home",
		"set-top-box-haac"
	],
	"screen": "home"
}

const heroes = {
	"screen": "heroes",
	"heroes": [
		{
			"name": "Manbat",
			"realName": "Francisco Rodríguez",
			"superpower": "Super rich",
			"loveInterest": "Feline Female",
			"nemesis": "Prankster",
			"group": "Righteousness Union",
			"icon": "https://movistarhome-test.s3.amazonaws.com/test-carol/tour-of-heroes/assets/manbat.svg",
			"bgColor": "#0d751e",
			"secondaryColor": "black"
		}, {
			"name": "Steel Man",
			"realName": "Antonio Claro",
			"superpower": "Super rich too",
			"loveInterest": "Prepper Petts",
			"nemesis": "Sonaht",
			"group": "Vindicators",
			"icon": "https://movistarhome-test.s3.amazonaws.com/test-carol/tour-of-heroes/assets/manbat.svg",
			"bgColor": "black",
			"secondaryColor": "red"
		}, {
			"name": "Manspider",
			"realName": "Pedro Parques",
			"superpower": "Strength, speed, agility, spider-sense",
			"loveInterest": "Maria Juana",
			"nemesis": "Blue Elf",
			"group": "Vindicators",
			"icon": "https://movistarhome-test.s3.amazonaws.com/test-carol/tour-of-heroes/assets/manbat.svg",
			"bgColor": "white",
			"color": "blue",
			"secondaryColor": "red"
		},
	]
};

const villains = {
	"screen": "villains",
	"villains": [
		{
			"name": "Prankster",
			"nemesis": "Manbat",
			"superpower": "Chemical engineering",
			"icon": "https://movistarhome-test.s3.amazonaws.com/test-carol/tour-of-heroes/assets/prankster.svg",
			"bgColor": "#20d63e"
		}, {
			"name": "Sonaht",
			"nemesis": "All Vindicators",
			"superpower": "Infinity Stones",
			"icon": "https://movistarhome-test.s3.amazonaws.com/test-carol/tour-of-heroes/assets/prankster.svg",
			"bgColor": "#c2b200"
		}, {
			"name": "Blue Elf",
			"nemesis": "Manspider",
			"superpower": "Strength, reflexes, agility",
			"icon": "https://movistarhome-test.s3.amazonaws.com/test-carol/tour-of-heroes/assets/prankster.svg",
			"bgColor": "#009130"
		},
	]
};

const close = {
	"activeChannels": [
		"movistar-home",
		"set-top-box-haac"
	],
	"text": "Saliendo de la Living App",
	"screen": "close"
};

export default script;