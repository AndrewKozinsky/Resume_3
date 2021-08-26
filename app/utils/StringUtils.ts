// ФУНКЦИИ ДЛЯ РАБОТЫ СО СТРОКАМИ

/**
 * Функция принимает массив строк и формирует из них
 * строку разделённую пробелами для формирования классов CSS.
 * @param {Array} classesArr
 */
export function makeCN(classesArr: (string | undefined)[]) {
    // Сформировать новый массив классов без пустых значений
    const filteredClassesArr = classesArr.filter(cls => {
        return (cls && cls !== '')
    })

    return filteredClassesArr.join(' ')
}