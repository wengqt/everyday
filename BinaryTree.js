/**
 * Created by weng on 2016/11/25.
 */
function BinarySearchTree() {
    var Node = function(key){
        this.key= key;
        this.left=null;
        this.right=null;
    };
    var root =null;
    this.insert = function (key) {
        var newNode = new Node(key);
        if(root ===null){
            root = newNode;
        }else{
            insertNode(root,newNode);
        }
    };
    
    //insertNode
    var insertNode = function (node, newNode) {
        if(newNode.key<node.key){
            if (node.left === null){   //{5}
                node.left = newNode;   //{6}
            } else {
                insertNode(node.left, newNode); //{7}
            }
        }else{
            if (node.right === null){   //{5}
                node.right = newNode;   //{6}
            } else {
                insertNode(node.right, newNode); //{7}
            }
        }
    };
    
    
    //order
    
    this.inorder = function (print) {
        console.log("中序遍历");
        inorderT(root,print);
    };
    var inorderT=function (node,print){
        if(node !==null){
        inorderT(node.left,print);
        print(node.key);
        inorderT(node.right,print);
        }
    };

    this.preorder = function(print){
        console.log("前序遍历");
        preorderT(root,print);
    };
    
    var preorderT =function (node, print) {
        if(node !==null){
            print(node.key);
            preorderT(node.left,print);
            preorderT(node.right,print);
        }
    };
    this.postorder = function(print){
        console.log("后序遍历");
        postorderT(root,print);
    };

    var postorderT =function (node, print) {
        if(node !==null){

            preorderT(node.left,print);
            preorderT(node.right,print);
            print(node.key);
        }
    };



    this.min = function() {
        return minNode(root);
    };

    var minNode = function (node) {
        if (node){
            while (node && node.left !== null) {
                node = node.left;
            }
                return node.key;
            }
            return null;
        };

    this.max = function() {
        return maxNode(root);
    };
    var maxNode = function (node) {
        if (node){
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };


    this.search = function(key){
        return searchNode(root, key);
    };
    var searchNode = function(node, key){
        if (node === null){
            return false;
        }
        if (key < node.key){
            return searchNode(node.left, key);
        } else if (key > node.key){
            return searchNode(node.right, key);
        } else {
            return true;
        }

    };



    this.remove = function(key){
        root = removeNode(root, key);
    };

    var removeNode = function(node, key){
        if (node === null){
            return null;
        }
        if (key < node.key){
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key){
            node.right = removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null){
                node = null;
                return node;
            }
            if (node.left === null){
                node = node.right;
                return node;
            } else if (node.right === null){
                node = node.left;
                return node;
            }
            var mid = findminNode(node.right);
            node.key = mid.key;
            node.right = removeNode(node.right, mid.key);
            return node;
        }

    };

    var findminNode =function(node){

            if (node){
                while (node && node.left !== null) {
                    node = node.left;
                }
                return node;
            }
            return null;
    };




}

var tree =new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);


function print(value){
    console.log(value);
}

tree.inorder(print);//这里的回调函数，只调用不运行，所以不带括号，在print（node.key）处运行
tree.preorder(print);
tree.postorder(print);

console.log("max"+tree.max());
console.log("min"+tree.min());



console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

console.log("移除15");
tree.remove(15);
tree.preorder(print);