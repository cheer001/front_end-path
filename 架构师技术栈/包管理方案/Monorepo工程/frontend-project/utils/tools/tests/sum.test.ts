import { sum } from "../src/sum";

test("测试 sum 方法", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
