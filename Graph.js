/**
 * Created by weng on 2016/12/1.
 */

function Dictionary(){
    var items = {};

    this.has = function(key) {
        return key in items;
    };
    this.set = function(key, value) {
        items[key] = value;
    };

    this.remove = function (key) {
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };
    this.values = function() {
        var values = {};
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };



}
















function Graph(){
    var vertices = [];
    var list =new Dictionary();
    this.addvert = function(v){
        vertices.push(v);
        list.set(v,[]);
    };
    this.addEdge = function (v,w){
        list.get(v).push(w);
        list.get(w).push(v);
    };
    this.toString = function () {
        var s ='';
        for (var i =0;i<vertices.length;i++){
            s =s+vertices[i]+'->';
            for(var j = 0;j<list.get(vertices[i]).length;j++){
                s =s+list.get(vertices[i])[j] +' ';
            }
            s =s+'\n';
        }
        return s;
    }


}

var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];
     for (var i=0; i<myVertices.length; i++){
        graph.addvert(myVertices[i]);
    }
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'I');


console.log(graph.toString());
