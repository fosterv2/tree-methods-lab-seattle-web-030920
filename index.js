function inOrder(node) {
    if (node.left) {
        inOrder(node.left)
    }
    console.log(node.data)
    if (node.right) {
        inOrder(node.right)
    }
}

function findOrAdd(rootNode, newNode) {
    if (newNode.data < rootNode.data) {
        if (rootNode.left) {
            findOrAdd(rootNode.left, newNode)
        } else {
            rootNode.left = newNode
        }
    } else if (newNode.data > rootNode.data) {
        if (rootNode.right) {
            findOrAdd(rootNode.right, newNode)
        } else {
            rootNode.right = newNode
        }
        return true
    } else if (newNode.data === rootNode.data) {
        return true
    }
}

function max(node) {
    let current = node
    while (current.right) {
        current = current.right
    }
    return current
}

function min(node) {
    let current = node
    while (current.left) {
        current = current.left
    }
    return current
}
