const twoDecimals = (value) => {
  const converted = value.toString().slice(0, 4);
  return Number(converted);
};

module.exports = twoDecimals;
