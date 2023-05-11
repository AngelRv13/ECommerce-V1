// first create a new xmlhttp-request object

// window.onload = function () {

fetch("./products.json")
  .then((response) =>
    response.json().then((products) => {
      let output = "";

      for (let item of products) {
        output += `
        <div class="product"> 
        <img src="${item.image}">
        <p class = "name" >${item.name}</p>
        <p class = "price">${item.price}</p>
        <p class = "description">${item.description}</p>
        <p class = "button">${item.button}</p>

  
     
        
      
        </div>
     `;
      }
      document.querySelector(".products").innerHTML = output;
    })
  )
  .catch((err) => {
    console.log(err);
  });

// };
//.products img{


//}