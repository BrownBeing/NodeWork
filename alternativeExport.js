module.exports.items = ['item1', 'item2'];

const things  =['car']
exports.person ="Someone";
exports.addPerson = function(name){
    things.push(name);
    console.log(things);
}