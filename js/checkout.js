async function getCheckout() {
  const checkOut = document.getElementById("checkout");

  let isLoading = true;
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const url = "https://api.noroff.dev/api/v1/square-eyes/" + id;

  try {
    const response = await fetch(url);
    const details = await response.json();

    if (details !== undefined) {
      isLoading = false;
    }

    console.log(details);

    if (isLoading === true) {
      element.innerHTML += `
            <div class="loader"></div>`;
    } else {
      checkOut.innerHTML += `			<div>
        <p>${details.title}</p>
        <p>${details.released}</p>
        <p class="spacing">Order summary:</p>
        <p>Qty 1</p>
        <p>Total ${details.price}$</p>
        <a href="success.html" class="dark-link">Checkout</a>
    </div>
    <div>
        <figure id="batman">
            <img class="box-img" src="${details.image}" alt="${details.description}"/>
        </figure>
    </div>`;
    }
  } catch (error) {
    console.error(error);
  }
}

getCheckout();
