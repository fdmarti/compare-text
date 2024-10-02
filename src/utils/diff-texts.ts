import { diffChars } from 'diff';

export const compareDiffTexts = (text1: string, text2: string) => {
  const diff = diffChars(text1, text2);
  const display = document.getElementById('display');

  if (!display) return;

  display.innerHTML = '';

  const fragment = document.createDocumentFragment();

  let span = null;

  diff.forEach((part) => {
    const color = part.added ? 'green' : part.removed ? 'red' : 'grey';
    span = document.createElement('span');
    span.style.color = color;
    span.innerHTML = part.value;
    console.log(span);
    fragment.appendChild(span);
  });

  display.appendChild(fragment);
  display.classList.remove('hidden');
  display.scrollIntoView({ behavior: 'smooth' });
};
