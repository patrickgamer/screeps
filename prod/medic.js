/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('guard'); // -> 'a thing'
 */

var closest = require('closest');

module.exports = function medic(creep) {
  var targetList = creep.room.find(Game.MY_CREEPS),
    target,
    i = 0,
    targetHealth,
    nextHealth;

  //default to first value
  if(targetList.length > 0){
    target = targetList[0];
    targetHealth = target.hits / target.hitsMax;
  }

  // TODO - implement a stand-alone triage script
  for(i =1; i < targetList.length; i++){
    nextHealth = targetList[i].hits / targetList[i].hitsMax;
    if(nextHealth < targetHealth){
      target = targetList[i];
      targetHealth = nextHealth;
    } else if(nextHealth === targetHealth){
      target = closest(creep, [target, targetList[i]]);
      targetHealth = target.hits / target.hitsMax
    }
  }
  if(targetHealth < 1){
    creep.moveTo( target );
    creep.heal( target );
  } else {
    creep.moveTo(Game.spawns.Spawn1);
  }
};