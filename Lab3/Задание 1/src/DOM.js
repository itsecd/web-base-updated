/**
 * В функцию appendToBody передаются 3 параметра:
 * tag - имя тега, content - содержимое тега и count - количество вставок.
 * Осуществляет вставку на страницу указанный тег с указанным содержимым указанное число раз.
 */
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.appendChild(element);
    }
}

/**
 * Создает дерево вложенных тегов DIV.
 * Каждый узел дерева должен содержать childrenCount узлов.
 * Глубина дерева задается параметром level.
 * Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности (с единицы).
 */
export function generateTree(childrenCount, level) {
    function createNode(currentLevel) {
        const div = document.createElement('div');
        div.classList.add(`item_${currentLevel}`);

        if (currentLevel < level) {
            for (let i = 0; i < childrenCount; i++) {
                div.appendChild(createNode(currentLevel + 1));
            }
        }

        return div;
    }

    return createNode(1);
}

/**
 * Создает дерево с вложенностью 3 и числом элементов в узле 2.
 * Заменяет все узлы второго уровня (класс item_2) на теги SECTION.
 * Сохраняет остальную структуру и содержимое неизменными.
 */
export function replaceNodes() {
    const tree = generateTree(2, 3);
    
    // Находим все элементы второго уровня в сгенерированном дереве
    const item2Elements = tree.querySelectorAll('.item_2');

    item2Elements.forEach(item => {
        const section = document.createElement('section');
        // Копируем все классы
        section.className = item.className;
        
        // Переносим всех дочерних элементов внутрь нового тега SECTION
        while (item.firstChild) {
            section.appendChild(item.firstChild);
        }

        // Заменяем старый DIV на новый SECTION в родительском узле
        item.parentNode.replaceChild(section, item);
    });

    return tree;
}
