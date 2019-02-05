function addButton(content, classe, url) {
  console.log(url);
  var element = document.createElement("a");
  element.appendChild(document.createTextNode(content));
  element.className += classe;
  element.onclick = function() {
    window.location.href = url;
  };
  document
    .getElementsByClassName("wc-proceed-to-checkout")[0]
    .appendChild(element);
}
