const hello_world = require('./hello-world');

test('Prints string "Hello World!" to console', () => {
  expect(hello_world()).toBe("Hello World!");
});
