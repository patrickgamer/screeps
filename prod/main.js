var creeps = {
    miners: [],
    guards: [],
    medics: []
  },
  miner = require('miner'),
  guard = require('guard'),
  medic = require('medic'),
  rr,
  creep,
  recruiter = require('recruiter'),
  _ = require('lodash');

for(var n in Game.creeps){
  creep = Game.creeps[n];
  //console.log(creep.memory.role);
  switch (creep.memory.role) {
    case "miner": 
      miner(creep);
      creeps.miners.push(creep);
      break;
    case "guard":
      creeps.guards.push(creep);
      guard(creep);
      break;
    case "medic":
      creeps.medics.push(creep);
      medic(creep);
      break;
    default:
      //no default I can think of
      break;
  }
}

/*
 * The Gunnery Sergeant Heartman (Full Metal Jacket nod) is responsible for triggering the build orders in spawn queues
 *
 */
function GySgtHartman(spawns){
  // spawns is the array of active spawns passed in from the recruiter system
  _.map(spawns, function mapper(spawn){
    if(!spawn.spawning){ //if not already spawning
      
    }
  });
}


recruiter(creeps cook);