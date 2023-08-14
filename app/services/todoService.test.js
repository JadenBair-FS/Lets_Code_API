const { todoService, todoServiceById } = require("./todoService");
jest.mock("./todoService");

describe("Todo Service Tests", () => {
  test("As a user I should return a random joke", async () => {
    const result = await todoService();
    console.log(result.data);
    expect(result.data.type).toEqual("general");
  });

  test("As a user I should return a specific joke", async () => {
    const result = await todoServiceById(43);
    expect(result.data.id).toEqual(43);
  });
});
