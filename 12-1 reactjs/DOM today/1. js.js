const rootnode = document.getRootNode();
console.log(rootnode);

const httml = rootnode.childNodes;
console.log(httml);

console.log(httml.length);
console.log(httml[0]);

console.log(httml[0].childNodes);

const htmlChild = httml[0].childNodes;
console.log(htmlChild[0].childNodes);