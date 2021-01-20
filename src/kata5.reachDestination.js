const reachDestination = (distance, speed) => {
  const arrival = Math.round((distance / speed) * 2) / 2.0;

  return `I should be there in ${arrival} hours`;
};
//* ES lint suggested ${arrival} - guess this is an easier way of inserting a variable into a string? *//

module.exports = reachDestination;
