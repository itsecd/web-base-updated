/**
 * Проверяет, есть ли у элемента заданный CSS-класс.
 */
export function hasClass(elem, elemClass) {
    return elem.classList.contains(elemClass);
}

/**
 * Добавляет к элементу указанный CSS-класс.
 */
export function addClass(elem, elemClass) {
    elem.classList.add(elemClass);
}

/**
 * Удаляет указанный CSS-класс у элемента.
 */
export function removeClass(elem, elemClass) {
    elem.classList.remove(elemClass);
}

/**
 * Переключает CSS-класс у элемента (добавляет, если нет, или удаляет, если есть).
 */
export function toggleClass(elem, elemClass) {
    elem.classList.toggle(elemClass);
}
