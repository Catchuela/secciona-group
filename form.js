const form = document.getElementById("buyingForm");
const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");
const quantityInput = document.getElementById("quantity");
const totalDisplay = document.getElementById("total");
const popupModal = document.getElementById("popupModal");
const closeModalButton = document.getElementById("closeModal");

const carModels = {
  Tesla: ["Model S", "Model E", "Model Y"],
  Mitsubishi: ["Mirage", "Xpander", "Pajero Sports"],
  Mazda: ["Mazda CX5", "Mazda CX-30", "Mazda CX-9"],
  Toyota: ["Corolla", "Innova", "Fortuner"],
  Honda: ["Amaze", "Elevate", "City"]
};

// Update model options based on selected brand
brandSelect.addEventListener("change", function () {
  const selectedBrand = brandSelect.value;
  const models = carModels[selectedBrand] || [];
  modelSelect.innerHTML = "<option value=''>--Select Model--</option>";
  
  models.forEach(function (model) {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });

  modelSelect.disabled = !models.length;
  updateTotal(); // Update total price when brand is changed
});

// Update total price based on selected model and quantity
function updateTotal() {
  const selectedBrand = brandSelect.value;
  const selectedModel = modelSelect.value;
  const quantity = quantityInput.value;

  let price = 0;

  if (selectedBrand === "Tesla") {
    price = selectedModel === "Model S" ? 4500000 : selectedModel === "Model E" ? 3500000 : 5500000;
  } else if (selectedBrand === "Mitsubishi") {
    price = selectedModel === "Mirage" ? 700000 : selectedModel === "Xpander" ? 1000000 : 1500000;
  } else if (selectedBrand === "Mazda") {
    price = selectedModel === "Mazda CX5" ? 1500000 : selectedModel === "Mazda CX-30" ? 1700000 : 2000000;
  } else if (selectedBrand === "Toyota") {
    price = selectedModel === "Corolla" ? 800000 : selectedModel === "Innova" ? 1200000 : 1500000;
  } else if (selectedBrand === "Honda") {
    price = selectedModel === "Amaze" ? 600000 : selectedModel === "Elevate" ? 900000 : 1000000;
  }

  const total = price * quantity;
  totalDisplay.textContent = total.toLocaleString();
}

// Handle form submission and show popup
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const selectedModel = modelSelect.value;
  const quantity = quantityInput.value;

  // Show the popup
  popupModal.style.display = "flex";

  // Reset the form
  form.reset();
  totalDisplay.textContent = "0";
});

// Close the modal when the "Close" button is clicked
closeModalButton.addEventListener("click", function () {
  popupModal.style.display = "none";
});
