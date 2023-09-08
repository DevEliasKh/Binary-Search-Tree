const arr = [1, 7, 4, 23, 8, 9, 4, 3, 7, 5, 7, 9, 67, 6345, 324];
let sortedArray = mergeSort(arr);

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

  #removeDuplicated(array) {
    let i = 0;
    while (i < array.length - 1) {
      if (array[i] == array[i + 1]) {
        array.splice(i, 1);
      } else {
        i++;
      }
    }
  }

  #buildTree(array) {
    const middle = Math.floor(array.length / 2);

    const leftArray = array.slice(0, middle);
    const left = leftArray.length > 0 ? this.#buildTree(leftArray) : undefined;

    const rightArray = array.slice(middle + 1);
    const right = rightArray.length > 0 ? this.#buildTree(rightArray) : undefined;

    const root = new Node(
      array[middle],
      left,
      right,
    );

    return root;
  }

  buildTree(array) {
    this.#removeDuplicated(array);
    return this.#buildTree(array);
  }

  find() { }

  levelOrder() { }

  inOrder() { }

  preOrder() { }

  postOrder() { }

  height() { }

  depth() { }

  isBalanced() { }

  reBalance() { }

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
console.log(JSON.stringify(binaryTree, null, 2));
