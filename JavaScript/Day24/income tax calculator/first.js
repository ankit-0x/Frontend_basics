const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let income = document.getElementById("income").value;
  let tax = 0;

  if (income > 1000000) {
    tax += 0.3 * (income - 1000000);
    income = 1000000;
  }
  if (income > 500000 && income <= 1000000) {
    tax += 0.2 * (income - 500000);
    income = 500000;
  }
  if (income > 250000) {
    tax += 0.05 * (income - 250000);
  }

  tax += tax * 0.04;  //  Health & Education Cess (4%) of tax amount
  const result = document.getElementById('result');
  result.innerText = `Tax Amount : ${tax}`;
});
