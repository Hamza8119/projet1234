

const thumbnails = document.querySelectorAll(".thumbnail-list img");
thumbnails.forEach(img => {
    img.addEventListener("click", function() {
        mainImage.src = this.src;
        thumbnails.forEach(i => i.classList.remove("active"));
        this.classList.add("active");
    });
});

const colorOptionList = document.querySelectorAll(".color-option");
const colorTitle = document.getElementById("colorTitle");

colorOptionList.forEach(color => {
  color.addEventListener("click", () => {
    // إزالة active من جميع الألوان
    colorOptionList.forEach(c => c.classList.remove("active"));

    // إضافة active للي تختار
    color.classList.add("active");

    // تحديث النص داخل h4
    const selectedColor = color.getAttribute("data-color");
    colorTitle.textContent = `Color: ${selectedColor}`;
  });
});

const sizeList = document.querySelectorAll(".size");
sizeList.forEach(size => {
    size.addEventListener("click", () => {
        sizeList.forEach(s => s.classList.remove("active"));
        size.classList.add("active");
    });
});

const notification = document.getElementById("notification");
function showNotification(message) {
    notification.textContent = message;
    notification.style.display = "block";
    setTimeout(() => {
        notification.style.display = "none";
    }, 1000);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}
updateCartCount();

const addToCartBtn = document.querySelector(".btn-cart");
addToCartBtn.addEventListener("click", () => {
    const selectedColorEl = document.querySelector(".color-option.active");
    const selectedSizeEl = document.querySelector(".size.active");

    if (!selectedColorEl || !selectedSizeEl) {
        showNotification(" : Le produit a été ajouté au panier.");
        return;
    }

    const productTitle = document.querySelector(".title").textContent;
   const productPrice = parseFloat(document.querySelector(".price").textContent.replace(/[^\d.]/g, ""));
    const productImage = document.querySelector(".main-image").src;
    const selectedColor = selectedColorEl.getAttribute("data-color");
    const selectedSize = selectedSizeEl.textContent;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
        title: productTitle,
        price: productPrice,
        color: selectedColor,
        size: selectedSize,
        image: productImage
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showNotification("Le produit a été ajouté au panier.");
});

const checkoutBtn = document.querySelector(".btn-checkout");
checkoutBtn.addEventListener("click", () => {
    window.location.href = '../Product/your_cart.html';
});
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  // الصورة الرئيسية
const mainImage = document.querySelector(".main-image");
const titleEl = document.querySelector(".title");
const priceEl = document.querySelector(".price");
const descEl = document.querySelector(".description");

// جميع related-card
const relatedCards = document.querySelectorAll(".related-card");

relatedCards.forEach(card => {
  card.addEventListener("click", () => {
    // تحديث الصورة الرئيسية
    const imgSrc = card.querySelector("img").src;
    mainImage.src = imgSrc;

    // تحديث العنوان
    const title = card.querySelector("h4").textContent;
    titleEl.textContent = title;

    // تحديث السعر
    const price = card.querySelector(".price").textContent;
    priceEl.textContent = price;

    // تحديث الوصف
    const desc = card.querySelector(".desc").textContent;
    descEl.textContent = desc;
  });
});
