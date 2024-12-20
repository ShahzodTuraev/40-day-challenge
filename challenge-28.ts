// 2415. Reverse Odd Levels of Binary Tree
function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  const queue: (TreeNode | null)[] = [root];
  let depth = 0;
  while (queue.length !== 0) {
    const levelSize = queue.length;
    const currentLevelNodes: TreeNode[] = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node) {
        if (depth % 2 === 1) {
          currentLevelNodes.push(node);
        }
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    if (depth % 2 === 1) {
      const middleIndex = currentLevelNodes.length >> 1;
      for (let i = 0; i < middleIndex; i++) {
        const mirrorIndex = currentLevelNodes.length - 1 - i;
        [currentLevelNodes[i].val, currentLevelNodes[mirrorIndex].val] = [
          currentLevelNodes[mirrorIndex].val,
          currentLevelNodes[i].val,
        ];
      }
    }
    depth++;
  }
  return root;
}
