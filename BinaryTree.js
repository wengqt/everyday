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
        console.log("前序遍历");
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







}

var tree =new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);


function print(value){
    console.log(value);
}

tree.inorder(print);//这里的回调函数，只调用不运行，所以不带括号，在print（node.key）处运行
tree.preorder(print);
tree.postorder(print);


