import Tree from '../Model/TreeNode.js'

class TreeStructure {

    ConstructTree() {
        TreeModel = new Tree();
        Father = new TreeModel('Father');


        for (let i = 0; i < 10; i++) {
            const node = new TreeModel('node: ' + 'i');
            Father.descendants.push(node);
        }

      console.log(TreeModel.descendants)
    }

}

