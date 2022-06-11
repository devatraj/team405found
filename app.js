
const productList = document.getElementById("productList");
const searchBar = document.getElementById("searchBar");
let ourProducts = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredProducts = ourProducts.filter((products) => {
    return (
      products.title.toLowerCase().includes(searchString) ||
      products.category.toLowerCase().includes(searchString) ||
      products.description.toLowerCase().includes(searchString)
    );
  });
  displayProducts(filteredProducts);
});

// const loadProducts = async () => {
//     try {
//         const res = await fetch("product_dummy_data.json", {
//             method: "GET",
//             headers: {
//                 "Content-Type":"application/json",
//             }
//         });
//         ourProducts = await res.json();
//         displayProducts(ourProducts);
//     } catch (err) {
//         console.error(err);
//     }
// };

const loadProducts = async () => {
  try {
    const res = await fetch("product_dummy_data.json", {
      method: "GET",
    });
    let obj = await res.json();
    ourProducts = obj.products;
    displayProducts(ourProducts);
  } catch (err) {
    console.error(err);
  }
};



const displayProducts = (products) => {
  const htmlString = products
    .map((products) => {
      return `
            <li class="products">
                <h2>${products.title}</h2>
                <p>Price: ${products.price}</p>
                <img src="${products.thumbnail}"></img>
            </li>
        `;
    })
    .join("");
    
  productList.innerHTML = htmlString;
};

loadProducts();