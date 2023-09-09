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

	inOrder() {}

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

// console.log(binaryTree.root.left);

// console.log(binaryTree.find(23));

console.log(sortedArray);

console.log(binaryTree.levelOrder());

console.log(binaryTree.preOrder());
