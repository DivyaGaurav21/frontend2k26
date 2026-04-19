

// leetcode 144. Binary Tree Preorder Traversal

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.left.right.left = new TreeNode(6);
root.left.right.right = new TreeNode(7);

root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);


const preorder = (root) => {
  if (!root) return;    
    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
}
preorder(root);