const BASE_URL = "https://api.noroff.dev/api/v1";
const ALL_PRODUCTS_URL = `${BASE_URL}/square-eyes`;

async function fetchData() {
  let isLoading = true;
  const element = document.getElementById("test");

  element.innerHTML = "";

  try {
    const payload = await fetch(ALL_PRODUCTS_URL);
    const data = await payload.json();

    if (data !== undefined) {
      isLoading = false;
    }

    if (isLoading === true) {
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

// function renderSingleData(id, title, description) {
//   const anchorTag = document.createElement("a");
//   anchorTag.classList.add("card");
//   anchorTag.href = `/Teitrheim/movieinfo.html?id=$("352ba432-5b5d-4ccc-9aba-f2704c500cf3")`;
//   const heading = document.createElement("h2");
//   const body = document.createElement("p");
//   heading.textContent = title;
//   body.textContent = description;
//   anchorTag.append(heading, body);
//   return anchorTag;
// }

// async function renderHtml() {
//   const data = await fetchData();
//   const container = document.querySelector(".container");
//   data.array.forEach((element) => {
//     const card = renderSingleData(element);
//     container.append(card);
//   });

// Fetch products from the API
// fetch(`${BASE_URL}/square-eyes`)
//   .then((response) => response.json())
//   .then((data) => {
//     const containerItems = document.querySelectorAll(
//       ".container, .container-img"
//     );
//     containerItems.forEach((item, index) => {
//       const imageURL = data[index].image;
//       item.setAttribute("src", imageURL);
//     });
//   });

// const imageUrl = document.getElementById(
//   `${BASE_URL}/square-eyes/352ba432-5b5d-4ccc-9aba-f2704c500cf3`
// );
// const img = document.createElement("img");
// img.src = `${BASE_URL}/square-eyes/352ba432-5b5d-4ccc-9aba-f2704c500cf3`;
// document.body.appendChild(img);

// // Fetch products from the API
//  fetch('https://example.com/api/products')
// .then((response) => response.json())
// .then((data) => {
//     // Create HTML elements to display the products
//     const productsContainer = document.getElementById("products-container");

//     data.forEach((product) => {
//       // Create a link to the product details page with the product ID as a query string parameter
//       const productLink = document.createElement("a");
//       productLink.href = `product-details.html?id=${product.id}`;

//       // Create an image element to display the product image
//       const productImage = document.createElement("img");
//       productImage.src = product.image_url;

//       // Create a heading element to display the product name
//       const productName = document.createElement("h2");
//       productName.textContent = product.name;

//       // Create a paragraph element to display the product description
//       const productDescription = document.createElement("p");
//       productDescription.textContent = product.description;

//       // Append the elements to the products container
//       productLink.appendChild(productImage);
//       productLink.appendChild(productName);
//       productLink.appendChild(productDescription);
//       productsContainer.appendChild(productLink);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching products", error);
//   });

// fetch("https://api.noroff.dev/api/v1/square-eyes")
//   .then((response) => {
//     if (response.ok) {
//       console.log("Success");
//     } else {
//       console.log("Not Successful");
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.error("Error fetching products", error);
//   });

// function getProducts() {
//   fetch("https://api.noroff.dev/api/v1/square-eyes")
//     .then((response) => {
//       if (response.ok) {
//         console.log("Success");
//       } else {
//         console.log("Not Successful");
//       }
//     })
//     .then((data) => console.log(data))
//     .catch((error) => {
//       console.error("Error fetching products", error);
//     });
// }
