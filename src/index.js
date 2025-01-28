function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Your poem is being generated.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit", generatePoem);
