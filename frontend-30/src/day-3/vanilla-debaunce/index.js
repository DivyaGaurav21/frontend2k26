const input = document.getElementById("input");
const list = document.getElementById("list");

async function productFromApi(str) {
  try {
    let jsonData = await fetch(
      `https://dummyjson.com/products/search?q=${str}`
    );
    let data = await jsonData.json();
    return data.products;
  } catch (err) {
    console.log(err);
  }
}

function createListForArray(arr) {
  list.innerHTML = arr.map((item) => `<li> ${item.title}</li>`).join("");
}

async function onChangeInput(e) {
  let searchTerm = e.target.value.trim();
  if (!searchTerm) return;
  let product = await productFromApi(searchTerm);
  createListForArray(product);
}

function debaunce(cb, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
}

const debaunceSearch = debaunce(onChangeInput, 400);

input.addEventListener("input", debaunceSearch);
