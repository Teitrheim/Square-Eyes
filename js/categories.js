const BASE_URL = "https://api.noroff.dev/api/v1";
const ALL_PRODUCTS_URL = `${BASE_URL}/square-eyes`;

async function fetchData() {
  const element = document.getElementById("test");

  element.innerHTML = "";

  try {
    const payload = await fetch(ALL_PRODUCTS_URL);
    const data = await payload.json();

    if (data == undefined) {
      element.innerHTML += `
        <div class="loader"></div>`;
    } else {
      data.forEach((movie, index) => {
        if (index <= 4) {
          element.innerHTML += `
        <div class="container-child">
        <a href="movieinfo.html?id=${movie.id}"><p>${movie.title}</p>
      <img src = "${movie.image}" class="container-img" alt="${movie.description}"/></a>
      </div>`;
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
