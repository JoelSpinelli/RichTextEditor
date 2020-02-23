$ = document.querySelector.bind(document);

let oDoc;

function initDoc() {
  oDoc = $('.textBox');
  setDocMode();
}

function formatDoc(sCmd, sValue) {
  document.execCommand(sCmd, false, sValue); oDoc.focus();
}

function setDocMode() {
  var oContent;

  if (document.all) {
    oDoc.innerHTML = oDoc.innerText;
  } else {
    oContent = document.createRange();
    oContent.selectNodeContents(oDoc.firstChild);
    oDoc.innerHTML = oContent.toString();
  }
  oDoc.contentEditable = true;

  oDoc.focus();
}
