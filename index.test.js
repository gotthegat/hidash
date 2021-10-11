const { forEach, map } = require("./index");
const assert = require("assert");

const test = (desc, func) => {
  console.log("----", desc);
  try {
    func();
  } catch (err) {
    console.log(err.message);
  }
};

test("The forEach function", () => {
  // test forEach
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6, "Expected forEach to sum the array");

  //   if (sum !== 6) {
  //     throw new Error("Expected summing array to equal six");
  //   }
});

test("The map function", () => {
  // test map
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  assert.deepStrictEqual(result, [2, 4, 6]);

  //   assert.strictEqual(result[0], 2);
  //   assert.strictEqual(result[1], 4);
  //   assert.strictEqual(result[2], 6);

  // result === [2, 4, 6]
  //   if (result[0] !== 2) {
  //     throw new Error(`Expected to find 2, but found ${result[0]}`);
  //   }
  //   if (result[1] !== 4) {
  //     throw new Error(`Expected to find 4, but found ${result[1]}`);
  //   }
  //   if (result[2] !== 6) {
  //     throw new Error(`Expected to find 6, but found ${result[2]}`);
  //   }
});
