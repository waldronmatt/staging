// eslint-disable-next-line unicorn/no-array-for-each
document.querySelectorAll('.footer-copyright').forEach(element => {
  element.append(document.createTextNode(new Date().getFullYear()));
});
