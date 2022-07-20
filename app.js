// https://calculator.swiftutors.com/contribution-margin-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const marginRatioRadio = document.getElementById('marginRatioRadio');
const marginRadio = document.getElementById('marginRadio');
const salesRadio = document.getElementById('salesRadio');

let marginRatio;
let margin = v1;
let sales = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

marginRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Price per product';
  variable2.textContent = 'Variable cost per product';
  margin = v1;
  sales = v2;
});

marginRadio.addEventListener('click', function() {
  variable1.textContent = 'Contribution margin ratio';
  variable2.textContent = 'Variable cost per product';
  marginRatio = v1;
  sales = v2;
});

salesRadio.addEventListener('click', function() {
  variable1.textContent = 'Contribution margin ratio';
  variable2.textContent = 'Contribution margin';
  marginRatio = v1;
  margin = v2;
});


btn.addEventListener('click', function() {
  
  if(marginRatioRadio.checked)
    result.textContent = `Margin ratio = ${computeMarginRatio().toFixed(2)}%`;

  else if(marginRadio.checked)
    result.textContent = `Margin = ${computeMargin().toFixed(2)}`;

  else if(salesRadio.checked)
    result.textContent = `Sales = ${computeSales().toFixed(2)}`;
})

// calculation

function computeMarginRatio() {
  return (Number(margin.value) / Number(sales.value)) * 100;
}

function computeMargin() {
  return (Number(marginRatio.value) * Number(sales.value)) / 100;
}

function computeSales() {
  return (Number(margin.value) / Number(marginRatio.value)) * 100;
}
