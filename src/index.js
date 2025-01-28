function displayPoem(response) {
  console.log("Preparing a delightful poem for you");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let poemTopic = document.querySelector("#poem-topic");
  let apiKey = "bfaafcoc80td400cfa803cbf6c5ff69f";
  let context = `You are a whimsical writer that writes poetry for children. Please create a short poem that includes ${poemTopic.value}. Follow "user instructions" and use simple words, 3 or 4 short sentences. Separate every sentence with a <br />Please behave.`;
  let prompt =
    "User Instructions: Please create a short poem to make the end user smile.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit", generatePoem);
