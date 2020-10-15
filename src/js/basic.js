export default function orderByProps(obj, sortBy) {
  // Массив для сортировки по алфавиту
  const arrayObjects = [];
  // Массив для хранения записей по шаблону
  let arrayByTemplate = [];

  for (const key in obj) {
    const tempObject = {};

    tempObject.key = key;
    tempObject.value = obj[key];

    arrayObjects.push(tempObject);
  }

  /* Создаем новый массив по шаблону */
  arrayByTemplate = trimByTemplate(arrayObjects, sortBy);

  /* Сортируем массив по алфавиту */
  arrayObjects.sort((a, b) => ((a.key.toLowerCase() > b.key.toLowerCase()) ? 1 : -1));

  /* Соединяем массивы, полученый по шаблону и отсортированный */
  for (const value of arrayByTemplate) {
    arrayObjects.unshift(value);
  }

  return arrayObjects;
}


/* Разделение массива по шаблону */
export function trimByTemplate(array, template) {
  const newArray = [];
  // Проходим по шаблонному массиву
  for (let i = 0; i < template.length; i++) {
    // Проходим по основному массиву
    for (let j = 0; j < array.length; j++) {
      // Если нашли совпадение
      if (array[j].key === template[i]) {
        // Добавляем в итоговый массив удаленную запись
        newArray.unshift(array.splice(j, 1)[0]);
      }
    }
  }
  return newArray;
}
