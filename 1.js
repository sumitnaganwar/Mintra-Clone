document.addEventListener("DOMContentLoaded", function() {
  // Define an array of item objects with their properties
  var items = [
      {
          imgSrc: "1.jpg",
          rating: "4.5 ⭐|1.4k",
          companyName: "London",
          itemName: "CZ Floral",
          currentPrice: "Rs 606",
          originalPrice: "Rs 1045",
          discount: "(42% OFF)"
      },
      // Add more item objects as needed
  ];

  // Get the item container element
  var itemContainer = document.querySelector(".item-container");

  // Loop through the items array and create HTML for each item
  items.forEach(function(item) {
      // Create HTML elements for each item
      var itemElement = document.createElement("div");
      itemElement.classList.add("item");

      itemElement.innerHTML = `
          <a href="#">
              <img src="${item.imgSrc}">
              <div class="rating">${item.rating}</div>  
              <div class="company-name">${item.companyName}</div>
              <div class="item-name">${item.itemName}</div>
              <div class="price">
                  <span class="current-price">${item.currentPrice}</span>
                  <span class="original-price">${item.originalPrice}</span>
                  <span class="discount">${item.discount}</span>
              </div>
              <button class="btn-add-bag">Add to bag</button>
          </a>
      `;

      // Append the item element to the item container
      itemContainer.appendChild(itemElement);
  });
});
