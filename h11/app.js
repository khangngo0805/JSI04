async function storedata() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  }
  storedata()
  