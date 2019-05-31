(function composition03() {
	const Actions = {
		PersonActions: {
			sayHello: () => console.log("Hello"),
			eat: food => console.log(`Eating ${food}...`)
		},
		DevActions: {
			writeCode: function() {
				return console.log(`${this.name} writes: console.log("H...`);
			},
			useReact: () => console.log("I love reactJS !!")
		},
		MusicianActions: {
			playSong: () => console.log("Lala lalala la")
		}
	};

	const Create = {
		Person: name => ({
			name,
			sayHello: Actions.PersonActions.sayHello,
			eat: Actions.PersonActions.eat
		}),
		Dev: name => ({
			...Create.Person(name),
			readCode: Actions.DevActions.readCode,
			writeCode: Actions.DevActions.writeCode
		}),
		DevReact: name => ({
			...Create.Dev(name),
			useReact: Actions.DevActions.useReact
		}),
		Musician: (name, instrument) => ({
			...Create.Person(name),
			instrument,
			playSong: Actions.MusicianActions.playSong
		})
	};

	const pepe = Create.Dev("Pepe");
	const coco = Create.DevReact("Coco");
	const chano = {
		...Create.Musician("Chano", "voz"),
		...Create.Dev("Neo Hacker 52"),
		manejar: () => console.log("PUM!!!")
	};

	console.log({ pepe, coco, chano });
})();
