const productList = document.getElementById('product-list')
const datalink = "https://fakestoreapi.com/products"
const getProducts = async() => {
    const response = await fetch(datalink)
    const products = await response.json();
    products.forEach((products)=>{
        const productItems = document.createElement('div')
        productItems.classList.add('product-items')
        const productImage = document.createElement('img')
        productImage.classList.add('product-image')
        productImage.src = products.image;
        const productName = document.createElement('span')
        productName.textContent =products.title;
        const productPrice = document.createElement('span')
        productPrice.textContent = `${products.price}$`
productItems.appendChild(productImage)
productItems.appendChild(productName)
productItems.appendChild(productPrice)
productList.appendChild(productItems)

    })
    console.log(products);
  }

getProducts()


