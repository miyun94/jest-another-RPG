const Potion = require('../lib/Potion.js'); 

//Here, we're expecting that the value property is created with a Number() constructor.
test('creates a random potion object', () => {
    const potion = new Potion();
  
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
  });