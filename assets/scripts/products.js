
function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
const wishlistDetails = [];

const productDetails = [
  {
    name: "Fortnite Public",
    price: 6.99,
    imageUrl: "/assets/imgs/box.png",
    qty: 10,
    heading: "Fortnite Public External",
    link: "", // this is no need tho
    des:
      "Argon has remained undetected as an External Cheat for both professionals and amateurs since its release. During this time, users have been able to confidently participate in tournaments and Unreal lobbies with ease."
  },
  {
    name: "Perm Spoofer",
    price: 4.99,
    imageUrl: "/assets/imgs/spoofer.png",
    qty: 15,
    heading: "Perm Spoofer",
    link: "",
    des:
      "Argon Perm Spoofer is a cost-effective, high-performance HWID spoofer renowned for its effectiveness in bypassing anti-cheat systems such as EAC, BE, VGK, FiveM, and CoD. It's a top choice for gamers seeking an affordable and reliable solution to avoid HWID bans and enjoy their favorite games."
  },
];


// button components for better Ux {

function QtyBtn(qty = 1) {
  if (qty == 0) return AddBtn();
  return `
<div>
  <button class='btn-qty' onclick="qtyChange(this,'sub')"><i class="fa-solid fa-minus"></i></button>
  <p class='qty'>${qty}</p>
  <button class='btn-qty' onclick="qtyChange(this,'add')"><i class="fa-solid fa-plus"></i></button>
</div>`;
}

function WishlistItems() {
  let wishlistItems = wishlistDetails.map(item => {
    return `
      <div class='wishlist-item'>
        <div class='wishlist-img'>
          <img src='${item.imageUrl}' alt='' />
        </div>
        <strong class='name'>${item.name}</strong>
        <button onclick='removeFromWishlist("${item.name}")'>
          <i class='fas fa-trash'></i>
        </button>
      </div>`;
  });

  return wishlistItems.join("");
}

function Wishlist() {
  return `
    <div class='wishlist'>
      <div class='wishlist-header'>
        <h2>Wishlist</h2>
        <button onclick='closeWishlist()' class='close-btn'><i class='fas fa-times'></i></button>
      </div>
      <div class='wishlist-items'>
        ${WishlistItems()}
      </div>
    </div>`;
}



//Ui components {
  function Product(product = {}) {
    let { name, price, imageUrl, heading, des, link } = product;
    return `
  <div class='card'>
    <div class='top-bar'>
      <i class='fab fa-apple'></i>
      <em class="stocks">In Stock</em>
    </div>
    <div class='img-container'>
      <img class='product-img' src='${imageUrl}' alt='' />
      <div class='out-of-stock-cover'><span>Out Of Stock</span></div>
    </div>
    <div class='details'>
      <div class='name-fav'>
        <strong class='product-name'>${name}</strong>
        <button onclick='addToWishlist(this)' class='heart'><i class='fas fa-heart'></i></button>
      </div>
      <div class='wrapper'>
        <h5>${heading}</h5>
        <p>${des}</p>
      </div>
      <div class='purchase'>
        <p class='product-price'>€ ${price}</p>
        <span class='btn-add'>${AddBtn({ name, imageUrl })}</span>
        </div>;
    </div>
  </div>`;
  }
  
  function AddBtn(product) {
    return `
    <div>
    <button class='add-btn' onclick="openModal('${product.name}', '${product.imageUrl}')">Buy<i class="fa-solid fa-plus"></i></button>
    </div>
    `;
  }



  function openModal(productName, imageUrl) {
    const modalContent = `
        <img src="${imageUrl}" id="modalProductImage" alt="" class="modal-image">
        <h2 id="modalProductName" class="modal-title">${productName}</h2>
        <h3 id="modalProductPrice" class="modal-price"></h3>
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <div class="modal-duration">
        ${productName === 'Fortnite Public' ? `<button data-duration="1-day" onclick="selectDuration('Fortnite Public', '1-day');" class="modal-button">1 Day</button>` : ''}
        ${productName === 'Fortnite Public' ? `<button data-duration="1-week" onclick="selectDuration('Fortnite Public', '1-week');" class="modal-button">1 Week</button>`: ''}
        ${productName === 'Fortnite Public' ? `<button data-duration="1-month" onclick="selectDuration('Fortnite Public', '1-month');" class="modal-button">1 Month</button>` : ''}
        ${productName === 'Fortnite Public' ? `<button data-duration="lifetime" onclick="selectDuration('Fortnite Public', 'lifetime');" class="modal-button">Lifetime</button>` : ''}
        ${productName === 'Perm Spoofer' ? `<button data-duration="one-day" onclick="selectDuration('Perm Spoofer', 'one-day');" class="modal-button">1 Day</button>` : ''}
        ${productName === 'Perm Spoofer' ? `<button data-duration="lifetime" onclick="selectDuration('Perm Spoofer', 'lifetime');" class="modal-button">Lifetime</button>` : ''}
        
        </div>
        <button id="purchaseBtn" class="modal-button" disabled>Purchase</button>
    `;
  
    const blurContainer = document.querySelector('.blur-container');
    blurContainer.style.zIndex = '1'; // Add blur effect
  
    document.getElementById('productModal').innerHTML = modalContent;
    document.getElementById('productModal').style.display = 'block';
  
    const purchaseBtn = document.getElementById('purchaseBtn');
    purchaseBtn.addEventListener('click', () => purchaseProduct(productName));
  }
  
  function selectDuration(productName, duration) {
    const durationButtons = document.querySelectorAll('.modal-duration .modal-button');
    durationButtons.forEach(button => button.classList.remove('active'));
    const selectedButton = document.querySelector(`.modal-duration button[data-duration="${duration}"]`);
    selectedButton.classList.add('active');
  
    // const purchaseBtn = document.getElementById('purchaseBtn');
    // const sellixProductId = selectedButton.getAttribute('data-sellix-product');
    // purchaseBtn.setAttribute('data-sellix-product', sellixProductId);
    purchaseBtn.removeAttribute('disabled');
  
    updatePriceDisplay(productName, duration);
  }
  
  function updatePriceDisplay(productName, duration) {
    const prices = {
      'Fortnite Public': {
        '1-day': '€ 6.99',
        '1-week': '€ 13.99',
        '1-month': '€ 34.99',
        'lifetime': '€ 95.99'
      },
      'Perm Spoofer': {
        'one-day': '€ 4.99',
        'one-week': '€ 11.99',
        'lifetime': '€ 44.99'
      }
    };
  
    const priceDisplay = prices[productName]?.[duration];
    if (priceDisplay) {
      document.getElementById('modalProductPrice').innerText = `${priceDisplay}`;
    } else {
      console.error('Invalid product or duration for price display.');
    }
  }
  

function purchaseProduct(productName) {
  const selectedDuration = document.querySelector('.modal-duration .active');
  const duration = selectedDuration ? selectedDuration.getAttribute('data-duration') : '';
  const productLink = generateProductLink(productName, duration);

  if (productLink) {
    console.log(`Redirecting to: ${productLink}`);
    window.location.href = productLink;
  } else {
    console.error('Invalid product or duration.');
  }
  closeModal();
}

function generateProductLink(productName, duration) {
  const productIdMap = {
    'Fortnite Public': {
      '1-day': '6591882d8dad8',
      '1-week': '65918bd3df14d',
      '1-month': '65918bd62acfe',
      'lifetime': '65918bd89eed0'
    },
    'Perm Spoofer': {
      'one-day': '65918ea95d047',
      'one-week': 'temp-perm-spoofer-week',
      'lifetime': '659527c38ef71'
    }
  };

  const productId = productIdMap[productName]?.[duration];
  if (productId) {
    return `https://argonsoftwaree.mysellix.io/product/${productId}`;
  }

}


function closeModal() {
  const blurContainer = document.querySelector('.blur-container');
  blurContainer.style.zIndex = '0'; // Remove blur effect

  document.getElementById('productModal').style.display = 'none';
}


function closeModal() {
  const blurContainer = document.querySelector('.blur-container');
  blurContainer.style.zIndex = '-1'; // Remove blur effect

  document.getElementById('productModal').style.display = 'none';
}

const navbar = document.getElementById("navbar");
const hero = document.querySelector(".headline");

function handleScroll() {
  const scrollPosition = window.scrollY;
  const heroTop = hero.getBoundingClientRect().top + window.scrollY;

  if (scrollPosition >= heroTop) {
    navbar.classList.add('fixed-navbar');
    navbar.classList.add('fake-slide-down');
  } else {
    navbar.classList.remove('fixed-navbar');
    navbar.classList.remove('fake-slide-down');
  }
}

window.addEventListener('scroll', handleScroll);

function showWishlist() {
  const wishlistContainer = document.querySelector('.wishlist');
  wishlistContainer.classList.add('show')
}

function closeWishlist() {
  const wishlistContainer = document.querySelector('.wishlist');
  wishlistContainer.classList.remove('show')
}
function Banner() {
  return `
<div class='banner'>
<nav id="navbar">
    <div class="nav">
      <div class="navleft">
        <div class="logo">
          <img src="assets/imgs/logo.png" alt="" />
        </div>
        <ul class="navlinks">
          <li class="navItem"><a href="/index.html">Home</a></li>
          <li class="navItem"><a href="#buy">Product</a></li>
          <li class="navItem"><a href="/index.html#Feature">Features</a></li>
          <li class="navItem"><a target="_blank" href="https://discord.gg/invite/argons">Discord</a></li>
          <li class="navItem"><a href="/index.html#Contact">Contact</a></li>

        </ul>
      </div>
      <div class="navright">
      <button class="navbtn"><a style="text-decoration: none; color: #fff;" href="/index.html">Get Started</a></button>
        <div class="sts">
          <i class="ri-eye-off-fill"></i>
          <div class="letters">
            <h3>Current Status</h3><br>
            <span>Undetected</span>
          </div>
        </div>
        <button class="btn--nav" onclick="burgerHandle()" id="burger" data-btn-close>
          <div class="burger">
            <span></span>
          </div>
        </button>
      </div>
    </div>
  </nav>
<h1 id="buy" class='headline'>Argon Products</h1>
  <div class='main-cart'>${DisplayProducts()}</div>
  <!--
<div class='carat' id='Cart'>
  <div class='nav cooler1'>
  <div class='cooler'>
  <button onclick='sideNav(1)'><i class='fas fa-shopping-cart'></i></button>
  <span class= 'total-qty'>0</span>
  </div>
    <h2>Cart</h2>
    <button onclick='sideNav(0)'><i class='fas fa-times'></i></button>
    </div>
  <div onclick='sideNav(0)' class='cover'></div>
  <div class='cover purchase-cover'></div>
  <div class='cart'>${CartSideNav()}</div>
  <div class='stock-limit'>
    <em>You Can Only Buy 10 Items For Each Product</em>
    <button class='btn-ok' onclick='limitPurchase(this)'>Okay</button>
  </div>
  <div  class='order-now'></div>
  </div>
  ${Wishlist()}
</div>
  -->
`;
}



function CartSideNav() {
  return `
<div class='side-nav'>
  <div class='cart-items'></div>
  <div class='final'>
    <strong>Total: ₹ <span class='total'>0</span>.00/-</strong>
    <div class='action'>
      <button onclick='buy(1)' class='btn buy'>Purchase <i class='fas fa-credit-card' style='color:#6665dd;'></i></button>
      <button onclick='clearCart()' class='btn clear'>Clear Cart <i class='fas fa-trash' style='color:#bb342f;'></i></button>
      <button onclick="showWishlist()" class='btn wish'>Wishlist <i class="fa-solid fa-heart" style='color:red;'></i></button>
    </div>
  </div>
</div>`;
}

function Purchase() {
  let toPay = document.getElementsByClassName("total")[0].innerText;
  let itemNames = cartDetails.map((item) => {
    return `<span>${item.qty} x ${item.name}</span>`;
  });
  let itemPrices = cartDetails.map((item) => {
    return `<span>₹ ${item.price * item.qty}</span>`;
  });
  return `
<div class='invoice'>
 <h1 class='checkout'>Checkout from Argon</h1>
  <div class='shipping-items'>
    <div class='item-names'>${itemNames.join("")}</div>
    <div class='items-price'>${itemPrices.join("")} /-</div>
  </div>
<hr>
  <div class='payment'>
    <div>
      <p>Total amount to be paid:</p><span class='pay'>₹ ${toPay}/-</span>
    </div>
  </div>
  <div class='order'>
    <button onclick='order()' class='btn-order btn'>Order Now</button>
    <button onclick='buy(0)' class='btn-cancel btn'>Cancel</button>
  </div>
</div>`;
}

function OrderConfirm() {
  let orderId = Math.round(Math.random() * 1000);
  let totalCost = document.getElementsByClassName("total")[0].innerText;
  return `
<div>
  <div class='order-details'>
  <div class='lassi'>
    <em>your order has been placed</em>
    <p>Your order-id is : <span>${orderId}</span></p>
    <p>your order will be delivered to you in 3-5 working days</p>
    <p>you can pay <span>₹ ${totalCost}</span> by card or any online transaction method after the products have been dilivered to you</p>
    </div>
    </div>

  <button onclick='okay(event)' class='btn-ok'>okay</button>
</div>`;
}
//}

  function DisplayProducts() {
    let products = productDetails.map((product) => {
      let productHtml = Product(product);
    
      // Add a custom class to center specific products
      if (product.name === "Fortnite Public" || product.name === "Perm Spoofer") {
        productHtml = productHtml.replace('<div class=\'card\'>', '<div class=\'card center-product\'>');
      }
    
      return productHtml;
    });
  
    return products.join("");
  }
  
function DisplayCartItems() {
  let cartItems = cartDetails.map((cartItem) => {
    return CartItems(cartItem);
  });
  return cartItems.join("");
}


function RenderWishlist() {
  const wishlistItemsContainer = document.getElementsByClassName("wishlist-items")[0];
  if (wishlistDetails.length === 0) {
    wishlistItemsContainer.innerHTML = "<span class='empty-wishlist'>Click 💓 to add Products to Wishlist </br> Your Wishlist is currently empty</span>";
  } else {
    wishlistItemsContainer.innerHTML = WishlistItems();
  }
}

function RenderCart() {
  const cartItemsContainer = document.getElementsByClassName("cart-items")[0];
  if (cartDetails.length === 0) {
    cartItemsContainer.innerHTML = "<span class='empty-cart'>Your cart is empty</span>";
  } else {
    cartItemsContainer.innerHTML = DisplayCartItems();
    RenderWishlist(); // Add this line to update the wishlist
  }
}

function SwitchBtns(found) {
  let element = found.getElementsByClassName("btn-add")[0];
  element.classList.toggle("qty-change");
  let hasClass = element.classList.contains("qty-change");
  found.getElementsByClassName("btn-add")[0].innerHTML = hasClass
    ? QtyBtn()
    : AddBtn();
}

function ToggleBackBtns() {
  let btns = document.getElementsByClassName("btn-add");
  for (let btn of btns) {
    if (btn.classList.contains("qty-change")) {
      btn.classList.toggle("qty-change");
    }
    btn.innerHTML = AddBtn();
  }
}

function CartIsEmpty() {
  let emptyCart = `<span class='empty-cart'>Looks Like You Haven't Added Any Product In The Cart</span>`;
  if (cartDetails.length == 0) {
    document.getElementsByClassName("cart-items")[0].innerHTML = emptyCart;
  }
}

function CartItemsTotal() {
  let totalPrice = cartDetails.reduce((totalCost, item) => {
    return totalCost + item.price * item.qty;
  }, 0);
  let totalQty = cartDetails.reduce((total, item) => {
    return total + item.qty;
  }, 0);
  document.getElementsByClassName("total")[0].innerText = totalPrice;
  document.getElementsByClassName("total-qty")[0].innerText = totalQty;
}

function Stocks() {
  cartDetails.forEach((item) => {
    productDetails.forEach((product) => {
      if (item.name == product.name && product.qty >= 0) {
        product.qty -= item.qty;
        if (product.qty < 0) {
          product.qty += item.qty;
          document.getElementsByClassName("invoice")[0].style.height = "180px";
          document.getElementsByClassName(
            "order-details"
          )[0].innerHTML = `<em class='thanks'>Stocks Limit Exceeded</em>`;
        } else if (product.qty == 0) {
          OutOfStock(product, 1);
        } else if (product.qty <= 5) {
          OutOfStock(product, 0);
        }
      }
    });
  });
}


function OutOfStock(product, handler) {
  let products = document.getElementsByClassName("card");
  for (let items of products) {
    let stocks = items.getElementsByClassName("stocks")[0];
    let name = items.getElementsByClassName("product-name")[0].innerText;
    if (product.name == name) {
      if (handler) {
        items.getElementsByClassName("out-of-stock-cover")[0].style.display =
          "flex";
        stocks.style.display = "none";
      } else {
        stocks.innerText = "Only Few Left";
        stocks.style.color = "orange";
      }
    }
  }
}

function App() {
  return `
<div>
  ${Banner()}
</div>`;
}
//}

// injects the rendered component's html
document.getElementById("app").innerHTML = App();
