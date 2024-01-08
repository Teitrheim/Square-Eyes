// remember to put export on fetchData function, and to remove the callback of the function at the bottom.
import { fetchData } from "./categories.js";

// Mocking the global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Movie Title",
          image: "image-url",
          description: "Description",
        },
      ]),
  })
);

describe("fetchData", () => {
  beforeEach(() => {
    // Set up the DOM element before each test
    document.body.innerHTML = '<div id="test"></div>';
  });

  it("fetches data and renders it to the DOM", async () => {
    await fetchData();

    // Expect the fetch to have been called
    expect(fetch).toHaveBeenCalledWith(
      "https://api.noroff.dev/api/v1/square-eyes"
    );

    // Check if the DOM has been manipulated as expected
    const element = document.getElementById("test");
    expect(element.innerHTML).toContain("Movie Title");
    expect(element.innerHTML).toContain("image-url");
  });
});
