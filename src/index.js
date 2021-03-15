module.exports = function toReadable(number) {

  let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tenToNinety = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let n = Array.from(String(number), Number);

  let res = '';

  if (n.length > 2) {
    res += ones[n[0]] + ' hundred';
    if (n[1] == 0 && n[2] == 0) return res;
    else {
      res += ' ';
      n.shift();
    }
  }
  if (n.length == 2) {
    if (n[0] == 0) return res += ones[n[1]];
    if (n[0] == 1) return res += tenToNinety[n[1]];
    else if (n[1] == 0) return res += tens[n[0]];
    else {
      res += tens[n[0]] + ' ';
      n.shift()
    }
  }
  if (n.length < 2) return res += ones[n[0]];
}
