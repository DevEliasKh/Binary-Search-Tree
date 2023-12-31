const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const arr = [1, 3, 2, 4, 8, 10, 11];
let sortedArray = mergeSort(arr);

class Node {
	constructor(data, left, right) {
		this.data = data;
		this.left = left || null;
		this.right = right || null;
	}
}

class tree {
	constructor(array) {
		this.root = this.buildTree(array);
	}

	buildTree(array) {
		let root = null;
		for (let i = 0; i < array.length; i++) {
			if (array[i] == array[i + 1]) {
				array.splice(i, 1);
			}
		}

		if (array.length != 0) {
			const middle = parseInt(array.length / 2);
			root = new Node(
				array[middle],
				this.buildTree(array.slice(0, middle)),
				this.buildTree(array.slice(middle + 1))
			);
		}
		return root;
	}

	insert(value, currentNode = this.root) {
		if (currentNode === null) return new Node(value);
		currentNode.data < value
			? (currentNode.right = this.insert(value, currentNode.right))
			: (currentNode.left = this.insert(value, currentNode.left));
		return currentNode;
	}

	delete(value, currentNode = this.root) {
		if (currentNode === null) return currentNode;
		if (currentNode.data < value) {
			currentNode.right = this.delete(value, currentNode.right);
		} else if (currentNode.data > value) {
			currentNode.left = this.delete(value, currentNode.left);
		} else {
			// node with one child
			if (currentNode.left === null) {
				return currentNode.right;
			} else if (currentNode.right === null) {
				return currentNode.left;
			} else {
				//node with 2 child
				const minNode = function findNextSmallestChild(Node) {
					let min = Node.data;
					let newNode = Node;
					while (newNode.left != null) {
						min = root.left.data;
						newNode = root.left;
					}
					return min;
				};
				currentNode.data = minNode(currentNode.right);
				currentNode.right = this.delete(currentNode.data, currentNode.right);
			}
		}
		return currentNode;
	}

	find(value, currentNode = this.root) {
		if (currentNode == null) {
			return currentNode;
		}
		if (currentNode.data != value) {
			return value > currentNode.data
				? this.find(value, currentNode.right)
				: this.find(value, currentNode.left);
		}
		return currentNode;
	}

	levelOrder(callback) {
		if (!this.root) return [];
		const queue = [this.root];
		const results = [];
		while (queue.length) {
			let level = [];
			let size = queue.length;
			for (let i = 0; i < size; i++) {
				const node = queue.shift();
				level.push(node.data);
				if (node.left) queue.push(node.left);
				if (node.right) queue.push(node.right);
				if (callback) callback(node);
			}
			results.push(level);
		}
		if (!callback) return results;
	}

	preOrder() {
		if (!this.root) return [];
		const stack = [this.root];
		const results = [];
		while (stack.length) {
			const current = stack.pop();
			if (current.right) stack.push(current.right);
			if (current.left) stack.push(current.left);
			results.push(current.data);
		}
		return results;
	}

	inOrder(node = this.root, result = []) {
		if (!this.root) return [];
		if (node === null) return;
		this.inOrder(node.left, result);
		result.push(node.data);
		this.inOrder(node.right, result);
		if (result) return result;
	}

	postOrder() {
		if (!this.root) return [];
		const stack = [this.root];
		const results = [];
		while (stack.length) {
			const current = stack.pop();
			if (current.left) stack.push(current.left);
			if (current.right) stack.push(current.right);
			results.push(current.data);
		}
		return results.reverse();
	}

	height(node = this.root) {
		let height = 1;
		if (node == null) return (height = 0);
	}

	depth() {}

	isBalanced() {}

	reBalance() {}

	prettyPrint(node, prefix = '', isLeft = true) {
		if (node === null) {
			return;
		}
		if (node.right !== null) {
			prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
		}
		console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
		if (node.left !== null) {
			prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
		}
	}
}

function merge(firstArr, secondArr) {
	let finalArr = [];
	while (firstArr.length > 0 && secondArr.length > 0) {
		const minIndexArray = firstArr[0] < secondArr[0] ? firstArr : secondArr;
		finalArr.push(minIndexArray[0]);
		minIndexArray.shift();
	}
	return finalArr.concat(firstArr, secondArr);
}

function mergeSort(unsortedArray) {
	if (unsortedArray.length < 2) {
		return unsortedArray;
	}
	const mid = Math.floor(unsortedArray.length / 2);
	const leftArray = mergeSort(unsortedArray.slice(0, mid));
	const rightArray = mergeSort(unsortedArray.slice(mid));
	return merge(leftArray, rightArray);
}

const binaryTree = new tree(sortedArray);

// console.log(binaryTree.root.left);

// console.log(sortedArray);

binaryTree.insert(68);

binaryTree.delete(23);

// console.log(binaryTree.levelOrder());

console.log(binaryTree.inOrder());

// console.log(binaryTree.preOrder());

// console.log(binaryTree.postOrder());

console.log(binaryTree.find(23));
