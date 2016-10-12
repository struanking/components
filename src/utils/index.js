
function withDelimiter(num) {
  const tempValue = num.toString();
  const delimiter = ',';
  const groupLength = 3;

  if (num.length <= groupLength) {
    return num;
  }

  return tempValue
    .split('')
    .reverse()
    .map((n, index) => {
      return index && index % groupLength === 0 ? n + delimiter : n;
    })
    .reverse()
    .join('');
}

export {
  withDelimiter,
};
