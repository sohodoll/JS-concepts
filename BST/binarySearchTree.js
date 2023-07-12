const createBST = (array) => {
  return {
    root: null,

    initialize() {
      this.root = this.buildTree(array, 0, array.length - 1)
    },

    createTreeNode(value) {
      return {
        value: value,
        left: null,
        right: null,
      }
    },

    buildTree(array, start, end) {
      if (start > end) return null
      const mid = Math.floor((start + end) / 2)
      const node = this.createTreeNode(array[mid])

      node.left = this.buildTree(array, start, mid - 1)
      node.right = this.buildTree(array, mid + 1, end)

      return node
    },

    getRoot() {
      return this.root
    },

    printTree(node, prefix = '', isLeft = true) {
      if (node === null) {
        return
      }
      if (node.right !== null) {
        this.printTree(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
      }
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`)
      if (node.left !== null) {
        this.printTree(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
      }
    },
  }
}

const Tree = createBST([1, 2, 3, 4, 5, 6, 7, 8, 9])
Tree.initialize()
Tree.printTree(Tree.getRoot())
