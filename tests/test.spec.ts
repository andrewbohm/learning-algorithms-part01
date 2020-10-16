test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add 1 + 2 to equal 4 fail', () => {
  expect(sum(1, 2)).not.toBe(4);
});

const sum = (a: number, b: number) => {
  return a + b;
};
