const jokeBtn = document.getElementById("joke-btn");

jokeBtn.addEventListener("click", () => {
  fetch("https://imdb8.p.rapidapi.com/title/get-quotes?tconst=tt0944947", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f34da56b35msh4f78b23ce0f98a8p141310jsnbc89ba607f58",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const quotes = data.quotes;
      const textBox = document.getElementById("text");

      if (quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex].lines[0].text;
        textBox.innerText = randomQuote;
      } else {
        textBox.innerText = "No quotes found";
      }
    })
    .catch((err) => {
      console.error(err);
    });
});
