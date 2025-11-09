const getId = function(id) {
  return document.getElementById(id);
}

getId('yorke').onclick = function () {
  console.log('york\'d it.');
}