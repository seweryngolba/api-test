const kitCont = document.getElementById("kitKat");
const kitBtn = document.getElementById("kitBtn");
const kitPht = document.getElementById("catPht");

const url = "https://api.thecatapi.com/v1/images/search";

kitBtn.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const kitUrl = data[0].url;
      kitPht.setAttribute("src", kitUrl);
    })
    .catch((err) => {
      console.log(err);
    });
});
