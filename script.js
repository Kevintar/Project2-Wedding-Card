function guestName() {
  let showName = document.getElementById("inputName").value;
  document.getElementById("demo").innerHTML = `${showName}`;
}

function showDate() {
  let showDate = document.getElementById("inputDate").value;
  document.getElementById("demo2").innerHTML = `On <br> ${showDate}`;
}

function showAddress() {
  let showAddress = document.getElementById("inputAddress").value;
  document.getElementById("demo1").innerHTML = `At <br> ${showAddress}`;
}

{
  let btnChangeTheme = document.querySelector(`#btn`);
  function styleChange() {
    document.getElementById("weddingForm").style.backgroundImage =
      "url('images/Rose.jpg')";
    document.getElementById("main").style.backgroundImage =
      "url('images/Rose.jpg')";
    document.getElementById("bottom").style.backgroundImage =
      "url('images/Rose.jpg')";
    document.body.style.backgroundImage = "url('images/garden.jpg')";
    document.body.style.fontFamily = "Roboto, cursive";
  }
  btnChangeTheme.addEventListener("click", styleChange);
}

{
  let btnChangeTheme = document.querySelector(`#btn1`);
  function styleChange() {
    document.getElementById("weddingForm").style.backgroundImage =
      "url('images/Blue.jpg')";
    document.getElementById("main").style.backgroundImage =
      "url('images/Blue.jpg')";
    document.getElementById("bottom").style.backgroundImage =
      "url('images/Blue.jpg')";
    document.body.style.backgroundImage = "url('images/beach.jpg')";
    document.body.style.fontFamily = "Cookie, cursive";
  }
  btnChangeTheme.addEventListener("click", styleChange);
}

{
  let btnChangeTheme = document.querySelector(`#btn2`);
  function styleChange() {
    document.getElementById("weddingForm").style.backgroundImage =
      "url('images/Green.jpg')";
    document.getElementById("main").style.backgroundImage =
      "url('images/Green.jpg')";
    document.getElementById("bottom").style.backgroundImage =
      "url('images/Green.jpg')";
    document.body.style.backgroundImage = "url('images/forest.jpg')";
    document.body.style.fontFamily = "Mouse Memoirs, sans-serif";
  }
  btnChangeTheme.addEventListener("click", styleChange);
}
