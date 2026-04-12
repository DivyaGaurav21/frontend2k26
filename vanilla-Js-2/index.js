const searchInput = document.getElementById("search");
const results = document.getElementById("results");

function createList(arr) {
  results.innerHTML = arr
    .map(
      (item) => `
    <li>${item.name}</li>
    `,
    )
    .join("");
}

async function searchItems(e) {
  const str = e.target.value.trim();
  if (!str) {
    results.innerHTML = "";
    return;
  }
  try {
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${str}`);
    const data = await res.json();
    createList(data?.recipes);
  } catch (err) {
    console.log(err);
  }
}

function debounceFn(callbackFn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFn(...args);
    }, delay);
  };
}

// // apply debounce
const debouncedSearch = debounceFn(searchItems, 500);

searchInput.addEventListener("input", debouncedSearch);
