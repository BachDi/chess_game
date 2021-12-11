function getDataFromLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setDataToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
