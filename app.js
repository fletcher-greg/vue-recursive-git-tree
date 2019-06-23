const fs = require("fs");
const dirTree = require("directory-tree");
const tree = dirTree(".git");
let data = JSON.stringify(tree, null, 2);

fs.writeFile("data.json", data, funished);

function funished(err) {
  console.log("finished");
}
