class NodeTree {
	constructor(data) {
		this.data = data;
        this.left = null;
        this.right = null;
	}

	// Insert Value
	insertNode(value) {
		if (value <= this.data) {
			if (this.left === null) {
				this.left = new NodeTree(value);
			} else {
				this.left.insertNode(value);
			}
		} else {
			if (this.right === null) {
				this.right = new NodeTree(value);
			} else {
				this.right.insertNode(value);
			}
		}
	}

	findNode(value) {
		if (value === this.data) {
			return value;
		} else if (value < this.data) {
			if (this.left === null) {
				return false;
			} else {
				return this.left.findNode(value);
			}
		} else {
			if (this.right === null) {
				return false;
			} else {
				return this.right.findNode(value);
			}
		}
	}

	// Print from left node right traversal order
	printInOrder() {
		if (this.left !== null) {
			this.left.printInOrder();
		}
		console.log(this.data);
		if (this.right !== null) {
			this.right.printInOrder();
		}
	}

    // Print from node left right traversal order
	printPreOrder() {
        console.log(this.data);
		if (this.left !== null) {
			this.left.printInOrder();
		}
		if (this.right !== null) {
			this.right.printInOrder();
		}
	}

    // Print from left right node traversal order
	printPostOrder() {
        if (this.left !== null) {
            this.left.printInOrder();
		}
        if (this.right !== null) {
            this.right.printInOrder();
        }
		console.log(this.data);
	}
}

rootNode = new NodeTree(10);
rootNode.insertNode(5);
rootNode.insertNode(11);
rootNode.insertNode(1);
rootNode.insertNode(13);
rootNode.printPostOrder();
