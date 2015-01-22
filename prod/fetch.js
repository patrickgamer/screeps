/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester'); // -> 'a thing'
 */
module.exports = function fetch(role) {
  var results = [];
  for(var nn in Game.creeps) {
    var creep = Game.creeps[nn];
    if(creep.memory.role == role){
      results.push(creep);
    }
  }

  return results;
}