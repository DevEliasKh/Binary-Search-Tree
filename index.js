const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
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
			const middle = Math.floor(array.length / 2);
			root = new Node(
				array[middle],
				this.buildTree(array.slice(0, middle)),
				this.buildTree(array.slice(middle + 1))
			);
		}
		return root;
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

	levelOrder() {}

	inOrder(callback) {
		const root = this.root;
		let result = [];
		if (root != null) {
		}
	}

	preOrder() {}

	postOrder() {}

	height() {}

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

// console.log(binaryTree.root.right.right.left.left);

// console.log(binaryTree.find(23));

// console.log(sortedArray);
