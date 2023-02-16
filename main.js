let contactTable = document.getElementById("contactTable");
let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");

function addContact() {
  let name = nameInput.value;
  let phone = phoneInput.value;

  if (name && phone) {
    let newRow = contactTable.insertRow();
    let nameCell = newRow.insertCell(0);
    let phoneCell = newRow.insertCell(1);
    nameCell.innerHTML = name;
    phoneCell.innerHTML = phone;
    nameInput.value = "";
    phoneInput.value = "";
  }
}
