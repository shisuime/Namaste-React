import { sumof } from "../sum";
test("sum func should calculate the sum of two numbers", () => {
  const res = sumof(3, 4);

  //Assertion
  expect(res).toBe(7);
});
