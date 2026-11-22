/**
 * 1. Создает кнопку с текстом "Удали меня" и вставляет в body.
 * При клике по button удаляет этот button.
 */
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    
    button.addEventListener('click', () => {
        button.remove();
    });

    document.body.appendChild(button);
}

/**
 * 2. Выводит массив строк в виде маркированного списка внутри body.
 * При наведении курсора мыши на элемент списка у этого элемента создается атрибут title с его текстом.
 */
export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;

        li.addEventListener('mouseenter', () => {
            li.setAttribute('title', li.textContent);
        });

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

/**
 * 3. Генерирует разметку ссылки и вставляет в body:
 * <a href="https://tensor.ru/">tensor</a>
 * При первом клике в конец текста через пробел дописывается ее href.
 * При следующем клике происходит стандартное действие (переход по ссылке).
 */
export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';

    let clicked = false;

    a.addEventListener('click', (event) => {
        if (!clicked) {
            event.preventDefault(); // Отменяем переход при первом клике
            a.textContent += ` ${a.href}`;
            clicked = true;
        }
        // При последующих кликах event.preventDefault() не вызывается, происходит стандартный переход
    });

    document.body.appendChild(a);
}

/**
 * 4. Генерирует разметку списка и кнопки, вставляет в body:
 * <ul><li>Пункт</li></ul>
 * <button>Добавить пункт</button>
 * При клике по li добавляется восклицательный знак в конец текста.
 * При клике по button добавляется новый li с текстом "Пункт" (с поддержкой клика для него).
 */
export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';

    // Функция добавления восклицательного знака
    const addExclamation = (item) => {
        item.textContent += '!';
    };

    li.addEventListener('click', () => addExclamation(li));
    ul.appendChild(li);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    button.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        newLi.addEventListener('click', () => addExclamation(newLi));
        ul.appendChild(newLi);
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
