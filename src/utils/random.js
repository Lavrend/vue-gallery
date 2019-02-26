/**
 * Get a random boolean value.
 */
const getRandomBool = () => Math.random() >= 0.5;

/**
 * Get a random floating point number between `min` and `max`.
 */
const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

/**
 * Get a random integer between `min` and `max`.
 */
const getRandomInt = (_min, _max) => {
  const min = Math.ceil(_min);
  const max = Math.floor(_max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default {
  getRandomBool,
  getRandomFloat,
  getRandomInt,
};
