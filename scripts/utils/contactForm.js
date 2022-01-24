function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

//FORM MODAL
/*function formModal(photographer) {
  const photographerNameContent = document.querySelector("#form-modal div.form-text");
  const photographerName = document.createElement("span");
  photographerName.textContent = photographer.name;
  photographerNameContent.appendChild(photographerName);

  const formModalBg = document.querySelector("#form-modal.bground");
  const closeFormBtn = document.querySelector("#form-modal button.close");
  const formModalBtn = document.querySelector("#main-photographer #contact");

  */