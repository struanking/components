import numeral from 'numeral';

numeral.language('en', {
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  abbreviations: {
    thousand: 'K',
    million: 'M',
    billion: 'B',
    trillion: 'T',
  },
  currency: {
    symbol: '£',
  },
});

const numeralFormatter = format => n => numeral(n).format(format);
const currency = numeralFormatter('$0,0.00');
const currencyTruncated = numeralFormatter('$0,0.00a');

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
  currency,
  currencyTruncated,
  withDelimiter,
};
