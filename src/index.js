module.exports = function toReadable (number) {
  const simpleNum = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const decNum = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const digitsArray = String(number).split('')
  let str = ''
  if (digitsArray.length == 3) {
    str = str + `${simpleNum[digitsArray[0] - 1]} hundred`
    if (digitsArray[1] == 1) str += ` ${tenToNineteen[digitsArray[2]]}`
    else if (digitsArray[1] == 0 && digitsArray[2] == 0) str
    else if (digitsArray[1] == 0) str += ` ${simpleNum[digitsArray[2] - 1]}`
    else if (digitsArray[2] == 0) str += ` ${decNum[digitsArray[1] - 2]}`
    else str += ` ${decNum[digitsArray[1] - 2]} ${simpleNum[digitsArray[2] - 1]}`
  }
  else if (digitsArray.length == 2) {
    if (digitsArray[0] == 1) str += `${tenToNineteen[digitsArray[1]]}`
    else if (digitsArray[0] == 0 && digitsArray[1] == 0) str
    else if (digitsArray[0] == 0) str += `${simpleNum[digitsArray[1] - 1]}`
    else if (digitsArray[1] == 0) str += `${decNum[digitsArray[0] - 2]}`
    else str += `${decNum[digitsArray[0] - 2]} ${simpleNum[digitsArray[1] - 1]}`
  }
  else {
    if (digitsArray[0] == 0) str += `zero`
    else str += `${simpleNum[digitsArray[0] - 1]}`
  }
  return str
}