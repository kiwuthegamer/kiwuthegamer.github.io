function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

var elems = [];
var isMobile;
window.onload = function() {
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  //var isMobile = 1;
  if (!isMobile) {
    document.getElementById("menu-button").hidden = "true";
    var elems = document.body.children;
    for(var i=0; i<elems.length;i++){
      elems[i].classList.add("pc")
      if (elems[i].children){
        for(var ii=0; ii<elems[i].children.length;ii++){
          elems[i].children[ii].classList.add("pc")
        }
      }
    }
  }
  document.getElementById("age").innerHTML = getAge("2009/11/22")

// Pricing
var pricing = {
  "cW": {
    options: ["0 - 50","50 - 100","100 - 150","150 - 300","300 - 500","500 - 1000","1000+"],
    prices: ["20","30","40","60","100","150","200"],
    unit: " Lines"
  },
  "cB": {
    options: ["0 - 200","200 - 350","350 - 500","500 - 750","750 - 1000","1000+"],
    prices: ["20","35","45","60","80","100"],
    unit: " Characters"
  },
  "cE": {
    price: "80"
  },
  "gdP": {
    price: "40"
  },
  "gdI": {
    price: "20"
  },
  "gdT": {
    price: "35"
  },
  "gdE": {
    price: "25"
  },
  "vpV": {
    options: ["0 - 1","1 - 3","3 - 5","5 - 10","10 - 15","15+"],
    prices: ["20","30","45","60","75","100"],
    unit: " Minutes"
  },
  "mcA": {
    price: "0"
  },
  "mcC": {
    options: ["0 - 100","100 - 300","300 - 500","500 - 700","700 - 1000","1000 - 2000","2000+"],
    prices: ["15","25","40","50","70","100","150"],
    unit: " Characters"
  },
  "mcRD": {
    options: ["0 - 100","100 - 300","300 - 500","500 - 700","700 - 1000","1000+"],
    prices: ["20","40","70","100","120","130"],
    unit: " KB"
  },
  "mcS": {
    options: ["Make an Original Skin","Customize a Pre-Existing one"],
    prices: ["50","30"],
    unit: ""
  }
}

var pricingChoice1 = document.getElementById("pricingChoice1");
var pricingChoice2 = document.getElementById("pricingChoice2");
var pricingPrice = document.getElementById("pricingPrice");

if(isMobile) {
  pricingChoice1.style.scale = "250%";
  pricingChoice2.style.scale = "250%";
}

pricingChoice1.onchange = function() {
  if(this.value){
    if(pricing[this.value].options){
      var out = "";
      for(var i=0;i<pricing[this.value].options.length;i++){
        out += '<option value="' + pricing[this.value].prices[i] + '">' + pricing[this.value].options[i] + pricing[this.value].unit + "</option>";
      }
      pricingChoice2.innerHTML = out;
      pricingChoice2.hidden = false;
      pricingPrice.innerHTML = "Price: ₹"+pricing[this.value].prices[0];
    } else {
      pricingChoice2.hidden = true;
      pricingPrice.innerHTML = "Price: ₹"+pricing[this.value].price;
    }
  } else {
    pricingChoice2.hidden = true;
    pricingPrice.innerHTML = "";
  }
}

pricingChoice2.onchange = function() {
  pricingPrice.innerHTML = "Price: ₹"+this.value;
}

}
