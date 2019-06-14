/*
NullObject

The NullObject is an object that contains default values.
The idea is to return it if the function that get values from resources that can fail, fails.
So, you can avoid multiple validations in the middle of the development flux.
*/

const SomeDevelopment = {
  getValues: () => {
    const defaultValues = {
      // <--- this is the NullObject
      value1: defaultValue1,
      value2: defaultValue2
    };
    try {
      /* get values from another resource */
    } catch (reason) {
      console.error(reason);
      return defaultValues;
    }
  },

  foo: () => {},

  init: () => {}
};
