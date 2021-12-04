const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const palindrome = () => {
  let vowelCount = 0;
  const word = document.querySelector('.input-text').value.trim().toLowerCase();

  let len = word.length;

  for (let i = 0; i < len; i++) {
    //  a,e,i,o,u
    if (word[i].match(/([a,e,i,o,u])/)) {
      vowelCount++;
    }
  }

  if (len === 0) {
    result.style.color = 'red';
    result.innerHTML = `Please Enter a Word`;
  } else {
    result.style.color = 'green';
    result.innerHTML = `${word} have ${vowelCount} Vowels letters`;
  }
};

btn.addEventListener('click', palindrome);
