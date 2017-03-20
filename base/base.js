var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
var base = alphabet.length;

let encode = (num) => {
  let encoded = '';
  while (num) {
    let remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphabet[remainder].toString() + encoded;
  }
  return encoded;
}

let decode = (str) => {
  let decoded = 0;
  while (str) {
    let index = alphabet.indexOf(str[0]);
    let power = str.length - 1;
    decoded += index * (Math.pow(base, power));
    str = str.subscring(1);
  }
  return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;
