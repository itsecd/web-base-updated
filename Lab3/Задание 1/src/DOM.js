export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.append(element);
    }
}

export function generateTree(childrenCount, level) {
    function build(depth) {
        const node = document.createElement('div');
        node.className = 'item_' + depth;
        if (depth < level) {
            for (let i = 0; i < childrenCount; i++) {
                node.append(build(depth + 1));
            }
        }
        return node;
    }
    return build(1);
}

export function replaceNodes() {
    const tree = generateTree(2, 3);
    const nodes = tree.querySelectorAll('.item_2');
    nodes.forEach((oldNode) => {
        const section = document.createElement('section');
        section.className = oldNode.className;
        while (oldNode.firstChild) {
            section.append(oldNode.firstChild);
        }
        oldNode.replaceWith(section);
    });
    return tree;
}
