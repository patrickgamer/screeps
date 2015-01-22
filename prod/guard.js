/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('guard'); // -> 'a thing'
 */
 
module.exports = function guard(creep) {
  var targetList = creep.room.find(Game.HOSTILE_CREEPS),
  	target = creep.pos.findNearest(Game.HOSTILE_CREEPS);

  if(targetList.length > 0){
    creep.moveTo( target );
    creep.attack( target );
  } else {
    creep.moveTo(Game.spawns.Spawn1);
  }
};