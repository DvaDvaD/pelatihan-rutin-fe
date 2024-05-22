fetch("https://animechan.xyz/api/quotes/anime?title=sailor_moon")
  .then((response) => response.json())
  .then((quotes) => {
    const output = document.getElementById("output");

    quotes.forEach((quote) => {
      const quoteElement = document.createElement("div");
      quoteElement.innerHTML = `
        <h2>Anime Title: ${quote.anime}</h2>
        <h3>Character Name: ${quote.character}</h3>
        <p>Quote: ${quote.quote}</p>
        <hr />
      `;

      output.appendChild(quoteElement);
    });
  });
