import orderByProps, { trimByTemplate as template } from '../basic';

test('test order', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(obj, ['health', 'name', 'level']);

  expect(result).toEqual([
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
  ]);
});


test('test template', () => {
  const array = [
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
  ];

  const result = template(array, ['name', 'level']);

  expect(result).toEqual(
    [
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]
  );

});
