(function factory01() {
	// It is a function that creates an object and returns it.
	// In some cases, it is an alternative to traditional classes.
	/*
    // traditional class
    class Person {
        constructor(name) {
            this.name = name
        }
        getName() {
            return this.name;
        }
        setName(newName) {
            this.name = newName;
            return this.name;
        }
    }
    */

	// factory function
	const createPerson = name => {
		let currentName = name;
		return {
			getName: () => currentName,
			setName: newName => (currentName = newName)
		};
	};

	const pipo = createPerson("pipo");
	pipo.getName(); // "pipo"
	pipo.setName("machiner"); // "machiner"
	pipo.getName(); // "machiner"
})();
