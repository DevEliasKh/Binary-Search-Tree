class Node {
	constructor(data, left, right) {
		this.data = data;
		this.leftChild = left || null;
		this.rightChild = right || null;
	}
}

class tree {
	constructor(array) {
		this.root = this.buildTree(array);
	}

	buildTree(array) {
		let sortedArray = mergeSort(array);
		for (let i = 0; i < sortedArray.length; i++) {
			if (sortedArray[i] == sortedArray[i + 1]) {
				sortedArray.splice(i, 1);
			}
		}

		const middle = Math.floor(sortedArray.length / 2);
		const root = new Node(
			sortedArray[middle],
			this.buildTree(sortedArray.slice(0, middle)),
			this.buildTree(sortedArray.slice(middle + 1))
		);

		return root;
	}

	find() {}

	levelOrder() {}

	inOrder() {}

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

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const binaryTree = new tree(arr);

console.log(binaryTree);
