//click events
document.getElementById("btn").addEventListener("click", addItem);

const inputFeild = document.getElementById("inputValue");

const display = document.getElementById("displayList");

let list = [];

//Function to additem

function addItem(e) {
  value = inputFeild.value;
  const item = {
    value: value,
    id: Date.now(),
  };
  list.push(item);

  dipslayItem();

  e.preventDefault();
}

//Function to displayItem
const dipslayItem = () => {
  let count = "";
  list.forEach((item) => {
    count += `
    <ul><li>${item.value} <button class="delete" id=${item.id}>Delete </button></li></ul>`;
  });
  document.getElementById("displayList").innerHTML = count;
};

document.getElementById("displayList").addEventListener("click", deleteItem);

//Function to delete Item
function deleteItem(e) {
  const deleteItem = document.getElementById("delete");
  if (e.target.className == "delete") {
    list.forEach((item) => {
      if (item.id == e.target.id) {
        e.target.parentElement.remove();
        list = list.filter((item) => item.id != e.target.id);
        console.log(list);
      }
    });
  }
  e.preventDefault();
}
