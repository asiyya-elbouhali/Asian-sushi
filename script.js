let add_pd=document.getElementsByClassName('btn_pd');
for (let i = 0;i < add_pd.length; i++){
    add_pd[i].addEventListener('click', topanier);
}
function topanier() {
    window.location.reload()
    
}
function addToCart(event){
    btn=event.target;
}


let carts = document.querySelectorAll('.btn_pd');

let products = [
    {
        name: 'CALIFORNIA CLASSIC', coin: 'DH', price: 45, inCart: 0
    },
    {
        name: 'CALIFORNIA TOBIKO', coin: 'DH', price: 50, inCart: 0
    },
    {
        name: 'AROMAKI SAUMON CUIT', coin: 'DH', price: 35, inCart: 0
    },
    {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60,inCart: 0
    },
    {
        name: 'CALIFORNIA CREAM CHEESE', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'BENTO TSUMATA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'BENTO MURAWAY', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'BENTO ATO', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'WOK JAP POULET', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'WOK JAP GAMBAS', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'WOK AIGRE DOUX', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    }, {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    },
    {
        name: 'AROMAKI LOUP TEMPURA', coin: 'DH', price: 60, inCart: 0
    },


]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);

    } else {
        localStorage.setItem('cartNumbers', 1);

    }
    setItems(product);

}

function setItems(product) {

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }

        }
        cartItems[product.name].inCart += 1;
    } else {
        product.inCart = 1;

        cartItems = {
            [product.name]: product
        }

    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost(product) {
    // console.log('the product price is : ', product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log(typeof cartCost);

    console.log("My carte cost is : ", cartCost);
    if (cartCost != null) {
        cartCost = parseInt(cartCost);

        localStorage.setItem("totalCost", cartCost + product.price);

    } else {
        localStorage.setItem("totalCost", product.price);


    }



}

function dispalyCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)

    let cartCost = localStorage.getItem('totalCost');
    let productContainer = document.querySelector(".basket-products");


    if (cartItems) {


        if (cartItems && productContainer) {
            productContainer.innerHTML = '';

            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
    <div class="productp">
    <img src="img/sushi/${item.name}.png">
    <span> ${item.name}</span> 
    <div class="price">${item.price}<span>,00 DH</span></div>
    <div class="quantity">${item.inCart}</div>
    <div class="totalforproduct"> ${item.price * item.inCart},00 DH </div>
       </div>`;

            });

            productContainer.innerHTML += ` <div class="total">
            <p>Total:</p> 
            <h4 class="basketTotal">${cartCost},00DH </h4>
        </div>`;
        }
    }

}


dispalyCart();




// *************************************************************************************
// *************************************************************************************
// *************************************************************************************







// let cmd = document.querySelector(".cmd");
let cmd = document.getElementsByClassName('cmd')
console.log(cmd);
cmd.style.fontFamily = "sans-serif";

const btn = document.getElementById('btn');
const button = document.getElementById('button');

// btn.addEventListener('click', function onClick(event){
//   // 👇️ Change text color for clicked element only

//   const box=document.querySelector(".cmd");  

//   box.style.color = 'white';
// }); 

btn.onmouseover=function() {
    this.style.backgroundColor = "black";
    this.style.color= "yellow";
}
btn.onmouseout=function() {
    this.style.backgroundColor = "yellow";
    this.style.color="black"
}
button.onmouseover=function()
{
    this.style.backgroundColor = "white";
    this.style.color="gray";
}
button.onmouseout=function()
{
    this.style.backgroundColor = "gray";
    this.style.color="white";
}
    var mn = document.getElementById("menu_links1");
    mn.onmouseover=function(){
       mn.style.backgroundColor="white";
    }
    mn.onmouseout=function(){
       this.style.backgroundColor="";
    }




    // functions of categories
function displayElement (unproduit) {
    var el=document.querySelector(unproduit);
    el.style.display="grid";
}
function AfficherLaCategorieSuivante(Produit){  
    cachertout();
    displayElement(Produit);   
}
// function test() {
//     console.log('in test');
// }
function cachertout(){
    var entree=document.querySelector(".products_entree");
    entree.style.display="none";
    var brochette=document.querySelector(".products_brochette");
    brochette.style.display="none";
    var riz=document.querySelector(".products_riz");
    riz.style.display="none";
    var dessert=document.querySelector(".products_dessert");
    dessert.style.display="none";
    var bento=document.querySelector(".products_bento");
    bento.style.display="none";
    var sushi=document.querySelector(".products");
    sushi.style.display="none";

}
// end functions of categories 




// functions of hovering 

function cleancategorie(x){
   var opct=document.querySelector(x);
   opct.style.opacity="100%";
}

function fhvrall(){
    var hovr1=document.querySelector(".categorie1");
    hovr1.style.opacity="70%";
    var hovr2=document.querySelector(".categorie2");
    hovr2.style.opacity="70%";
    var hovr3=document.querySelector(".categorie3");
    hovr3.style.opacity="70%";
    var hovr4=document.querySelector(".categorie4");
    hovr4.style.opacity="70%";
    var hovr5=document.querySelector(".categorie5");
    hovr5.style.opacity="70%";
    var hovr2=document.querySelector(".categorie6");
    hovr2.style.opacity="70%";
}

function opacityofcategorie(ctg){
    fhvrall();
    cleancategorie(ctg);
 }

// end functions of hovering 












