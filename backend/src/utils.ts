// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
