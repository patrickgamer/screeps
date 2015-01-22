/*
 * The system responsible for figuring out what units to build (and when)
 *
 */

var _ = require('lodash');

module.exports = function recruiter(creeps, cb) {
  var spawns = [],
    maker;
  /*
    Function for matching role orders to their respective blueprints
  */
  function queue(spawn, order){
    var blueprints = {
      miner: [Game.WORK,  Game.WORK,    Game.CARRY,   Game.CARRY, Game.MOVE,  Game.MOVE],
      guard: [Game.TOUGH, Game.ATTACK,  Game.ATTACK,  Game.MOVE,  Game.MOVE],
      medic: [Game.HEAL,  Game.HEAL,    Game.MOVE,    Game.MOVE,  Game.MOVE],
      hauler:[Game.CARRY, Game.CARRY,   Game.MOVE,    Game.MOVE]
    },
      newID,
      orderUp;

    //spawn.createCreep(blueprints[order], null, {role:order});

    //TODO - bind to the spawn instead
    newID = _.now();
    orderUp = {
      'status': 'queued',
      'blueprint': blueprints[order],
      'role': order
    }
    spawn.memory.queue[newID] = orderUp;
  }

  _.forEach(Game.spawns, function spawnBinder(sp){
      spawns.push(sp);
  });
  
  //console.log(spawns.length);

  //TODO - create a generalized order distribution system (accross spawns)
  maker = spawns[0];

  if(!_.has(maker.memory, 'queue')){
    maker.memory.queue = {};
  }

  // Only queue up the next order if the current queue isn't too long
  if(_.where(maker.memory.queue, {'status': 'queued'}).length < 1){
    if(creeps.miners.length < 2){
      queue(maker, 'miner');
    }
    else if(creeps.length < 6){
      queue(maker, 'guard');
    } else if(creeps.length < 8){
      queue(maker, 'medic');
    } else {
    }    
  }

  //pass the array of spawns into the callback - assumed to be the cook
  cb(spawns);
}