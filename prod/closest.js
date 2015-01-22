/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('guard'); // -> 'a thing'
 */

var dist = require('distance');

module.exports = function closest(origin, targetList) {
  /** WHERE 
    origin      is the point of orgin (x-y coordinates)
    targetList  is an array of coordinates to be compared
  **/
  var i = 0,
    idist = 0,
    tdist = null,
    target;

  for(i = 0; i < targetList.length; i++){
    idist = dist(origin.pos, targetList[i].pos);
    if(idist < tdist || tdist === null){
      //the new creep is closer than the previous closest - so switch!
      tdist = idist;
      target = targetList[i];
    }
  }
  return target; 
};