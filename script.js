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

var offers;
var elems = [];
var isMobile;
var discountMultiplier = 0;

function calculatePrice(price){
  if(discountMultiplier){
    return("₹<s>"+price+"</s> "+Math.floor(price*discountMultiplier));
  } else {
    return("₹"+price);
  }
}

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
    options: ["0 - 200","200 - 400","400 - 600","600 - 800","800 - 1000","1000+"],
    prices: ["300","350","400","450","500","600"],
    unit: " Lines"
  },
  "cB": {
    options: ["0 - 200","200 - 350","350 - 500","500 - 750","750 - 1000","1000+"],
    prices: ["70","85","100","120","150","200"],
    unit: " Characters"
  },
  "cG": {
    options: ["0 - 200","200 - 350","350 - 500","500 - 750","750 - 1000","1000+"],
    prices: ["90","100","120","150","200","250"],
    unit: " Characters"
  },
  "cS": {
    options: ["0 - 200","200 - 350","350 - 500","500 - 750","750 - 1000","1000+"],
    prices: ["100","200","250","300","350","500"],
    unit: " Blocks"
  },
  "cE": {
    price: "120"
  },
  "gdP": {
    price: "100"
  },
  "gdI": {
    price: "50"
  },
  "gdT": {
    price: "100"
  },
  "gdE": {
    price: "80"
  },
  "vpV": {
    options: ["0 - 1","1 - 3","3 - 5","5 - 10","10 - 15","15+"],
    prices: ["70","100","120","140","160","200"],
    unit: " Minutes"
  },
  "vpP": {
    price: "80"
  },
  "mcA": {
    price: "0"
  },
  "mcC": {
    options: ["0 - 100","100 - 300","300 - 500","500 - 700","700 - 1000","1000 - 2000","2000+"],
    prices: ["20","50","100","150","200","250","350"],
    unit: " Characters"
  },
  "mcRD": {
    options: ["0 - 100","100 - 300","300 - 500","500 - 700","700 - 1000","1000+"],
    prices: ["80","120","150","200","250","400"],
    unit: " KB"
  },
  "mcS": {
    options: ["Make an Original Skin","Customize a Pre-Existing one"],
    prices: ["100","60"],
    unit: ""
  }
}

offers = {}

var pricingChoice1 = document.getElementById("pricingChoice1");
var pricingChoice2 = document.getElementById("pricingChoice2");
var pricingPrice = document.getElementById("pricingPrice");

var discount = document.getElementById("discount");

for(var i=0;i<Object.keys(offers).length;i++){
  var offer = offers[Object.keys(offers)[i]];
  discount.innerHTML = offer.name +" - "+ offer.discount+ "!";
  discountMultiplier += offer.discountValue;
}
  
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
      pricingPrice.innerHTML = "Price: "+calculatePrice(pricing[this.value].prices[0]);
    } else {
      pricingChoice2.hidden = true;
      pricingPrice.innerHTML = "Price: "+calculatePrice(pricing[this.value].price);
    }
  } else {
    pricingChoice2.hidden = true;
    pricingPrice.innerHTML = "";
  }
}

pricingChoice2.onchange = function() {
  pricingPrice.innerHTML = "Price: "+calculatePrice(this.value);
}

var countDownDate = new Date(offers[Object.keys(offers)[0]].endDate.toString()).getTime();
  
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("discountTimer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("discountTimer").innerHTML = "EXPIRED";
  }
}, 1000);


}
