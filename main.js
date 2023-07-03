function addContact() {

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;

  var table = document.getElementById("contatoTabela")
  var row = table.insertRow(-1);
  var nameCell = row.insertCell(0);
  var phoneCell = row.insertCell(1);
  nameCell.innerHTML = name;
  phoneCell.innerHTML = phone;
  
  document.getElementById("contactForm").reset();
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); 
  addContact();
});