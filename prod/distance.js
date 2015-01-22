/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('guard'); // -> 'a thing'
 */
 
module.exports = function distance(origin, target) {
  /** WHERE 
    origin and target are  standard screeps .pos objects
  **/

  // TODO - incorporate rooms into distance calculations  
  return Math.sqrt( (target.x-origin.x)^2 + (target.y - origin.y)^2 );

};