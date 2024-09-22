import React from 'react'

const exponents = (num) => {
  const exponent = {
    0: '⁰',
    1: '¹',
    2: '²',
    3: '³',
    4: '⁴',
    5: '⁵',
    6: '⁶',
    7: '⁷',
    8: '⁸',
    9: '⁹'
  }

  return String(num)
    .split('')
    .map((eachExponent) => exponent[eachExponent] || '')
    .join('');
}

function Exponent({ num, exponent }) {

  const arrayLength = exponent;
  let array = [];
  for (let i = 0; i < arrayLength; i++) {
    array.push(num);
  }
  const numbers = array.join(' * ');
  const result = Math.pow(num, exponent)
  const exponentsCode = exponents(exponent)
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{num}{exponentsCode}</p>
      <p className="exponent-result">{numbers} = <span className="total">{result}</span></p>
    </div>
  )
}

export default Exponent