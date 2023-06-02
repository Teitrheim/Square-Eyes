const detailContainer = document.getElementById("movieinfo");

async function getInfo() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const url = "https://api.noroff.dev/api/v1/square-eyes/" + id;

  try {
    const response = await fetch(url);
    const details = await response.json();

    if (details == undefined) {
      element.innerHTML += `
        <div class="loader"></div>`;
    } else {
      createHtml(details);
    }
  } catch (error) {
    console.error(error);
  }
}

getInfo();

function createHtml(details) {
  detailContainer.innerHTML = "";
  detailContainer.innerHTML = `<p>${details.description}</p>
  <a href="checkout.html?id=${details.id}" class="bat__button">Buy Now</a>
</section>
<figure id="batman">
  <img class="info-img" alt="${details.description}" src="${details.image}">
</figure>`;
}
