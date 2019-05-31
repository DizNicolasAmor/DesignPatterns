(function composition01() {
	/*
	COMPOSITION 
	
	- It uses factory functions to create new objects.
	- You can compose this factory functions with the data you want.
	- It resolves two main problems:

	1. The gorila banana problem:

	"(...) The problem with object-oriented languages is
	they’ve got all this implicit environment that they carry around with them.
	You wanted a banana but what you got was a gorilla holding the banana
	and the entire jungle." Joe Armstrong, creator of Erlang.

	For example, you instantiate 'woofy' from class Dog because you wanna use
	the function bark(), but it instantiation carries with it all data from
	super classes Canine, Mammals, Animals and LivingBeing.

	2. The inheritance's rigid structure

	With traditional classes is a problem to create an object that has data
	from different classes and also, the constructor is different from those classes.
	Refactor the entire class structure is problematic and risky.


	In short, with 'composition' you use factory functions to create objects with
	1. only the data you need (avoid the gorilla-banana problem) and
	2. you can change easily in the future (avoid duplication-by-necessity problem).


	Interesting link: https://tylermcginnis.com/javascript-inheritance-vs-composition/
	*/

	/*   traditional classes
	Person
	  name
	  sayHello()
	  eat()

		Dev
		  writeCode()

			DevReact
			  useReact()

		Musician
		  instrument
		  playSong()
	*/

	// Composition is about disarming the class structure and that the methods are independent.
	const sayHello = () => console.log("Hello");
	const eat = food => console.log(`Eating ${food}...`);
	const writeCode = function() {
		return console.log(`${this.name} writes: console.log("H...`);
	};
	const useReact = () => console.log("I love reactJS !!");
	const playSong = () => console.log("Lala lalala la");

	// Then, you can create functions analogous to the classes.
	const createPerson = name => ({
		name,
		sayHello,
		eat
	});
	// And do custom inheritances
	const createDev = name => ({
		...createPerson(name),
		readCode,
		writeCode
	});
	const createDevReact = name => ({
		...createDev(name),
		useReact
	});
	const createMusician = (name, instrument) => ({
		...createPerson(name),
		instrument,
		playSong
	});

	const pepe = createDev("Pepe");
	const coco = createDevReact("Coco");
	// And mix inheritances and add other methods or attributes
	const chano = {
		...createMusician("Chano", "voz"),
		...createDev("Neo Hacker 52"),
		country: "Argentina",
		manejar: () => console.log("PUM!!!")
	};

	console.log({ pepe, coco, chano });
})();
