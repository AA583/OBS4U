const productId = parseInt(document.querySelector("body").firstElementChild.value);

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");

if (parseInt(plusButton.nextElementSibling.innerText) === 1) plusButton.disabled = true;

plusButton.addEventListener("click", () => {
  let amount = parseInt(plusButton.nextElementSibling.innerText);
  if (amount > 1) plusButton.nextElementSibling.innerText = amount - 1;
  if (amount - 1 === 1) plusButton.disabled = true;
});

minusButton.addEventListener("click", () => {
  let amount = parseInt(minusButton.previousElementSibling.innerText);
  minusButton.previousElementSibling.innerText = amount + 1;
  minusButton.previousElementSibling.previousElementSibling.disabled = false;
});

const detailedButton = document.getElementById("detailedButton");

detailedButton.addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("quantity").innerText);
  console.log(quantity);
  if (cart[productId] == null) {
    cart[productId] = {
      id: productId,
      amount: quantity
    };
  } else {
    cart[productId].amount = cart[productId].amount + quantity;
  }
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
  document.getElementById("modalBody").firstElementChild.innerText = `"${books[productId].name}"`;
});