export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.append(element);
    }
}
export function generateTree(childrenCount, level) {
    function buildLevel(currentLevel) {
        const container = document.createElement('div');
        container.classList.add(`item_${currentLevel}`);

        if (currentLevel >= level) {
            return container;
        }

        for (let i = 0; i < childrenCount; i++) {
            container.append(buildLevel(currentLevel + 1));
        }

        return container;
    }

    return buildLevel(1);
}
export function replaceNodes() {
    const tree = generateTree(2, 3);

    const secondLevelNodes = tree.querySelectorAll('.item_2');

    secondLevelNodes.forEach(node => {
        const section = document.createElement('section');

        section.className = node.className;

        while (node.firstChild) {
            section.append(node.firstChild);
        }

        node.replaceWith(section);
    });

    return tree;
}