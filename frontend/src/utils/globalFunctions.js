export const htmlToText = (html) => {
  const element = document.createElement('div');
  element.innerHTML = html;
  return element.textContent || element.innerText || '';
};


export function getValuesByKey(arr, key) {
  return arr.map(obj => obj[key]).filter(value => value !== undefined);
}