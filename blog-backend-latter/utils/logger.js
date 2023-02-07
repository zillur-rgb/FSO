const info = (...params) => {
  console.info(...params);
};
const error = (...params) => {
  console.error(...params);
};

module.exports = {
  info,
  error,
};
