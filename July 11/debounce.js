function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function search(query) {
  console.log("Searching:", query);
}


const debouncedSearch = debounce(search, 500);
debouncedSearch("R");
debouncedSearch("Ra");
debouncedSearch("Raj");
debouncedSearch("Raje");
debouncedSearch("Rajeev");