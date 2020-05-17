function handleCallAylienForNLP(event) {

  event.preventDefault();

  const url = document.getElementById("test-url").value;
  const polarity = document.getElementById("polarity");
  const polarity_confidence = document.getElementById("polarity_confidence");
  const subjectivity = document.getElementById("subjectivity");
  const subjectivity_confidence = document.getElementById("subjectivity_confidence");
  const textDetails = document.getElementById("textDetails");
  const apiMethod = "POST";
  const apiMode = "cors";
  const apiContentType = "application/json";


  if (!url) return;
  console.log(url);
  fetch("/analyseText", {
    method: apiMethod,
    mode: apiMode,
    headers: {
      "Content-Type": apiContentType
    },
    body: JSON.stringify({ text: url })
  })
    .then(res => res.json())
    .then(data => {
      polarity.innerHTML = data.polarity;
      subjectivity.innerHTML = data.subjectivity;
      polarity_confidence.innerHTML =
        data.polarity_confidence;
      subjectivity_confidence.innerHTML =
        data.subjectivity_confidence;
        textDetails.innerHTML = data.text;
    });
}

export { handleCallAylienForNLP };
