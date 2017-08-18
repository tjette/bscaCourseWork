import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DATA from './DATA';

const getUserById = (id) => {
  let user;
  for(let i=0; i< DATA.users.length; i++) {
    if(DATA.users[i].id === id) {
      user = DATA.users[i];
      // user = DATA.users[i].name
    }
  }
  return user
}


// const getProductById = (id) => {
//   let product;
//
//   DATA.products.forEach((p) => {
//     if(p.id === id) {
//       product = p;
//     }
//   })
//   return product
// }

const getPriceById = (id) => {
  let product;

  DATA.products.forEach((p, index) => {
    if(p.id === id) {
      product = p.price;
    }
  })
  return product
}

const getProductsOver40 = () => {
  let higherPriced =[];

  DATA.products.map((product) => {
    if(product.price > 40){
        higherPriced.push(product)
    }

  })
  return higherPriced;

}
// const getProductById = (id) => {
//   return DATA.products.find((p) =>{
//     return p.id === id
//   })
// }


//loop over orders
//print user and user products
const getOrders = () => {

  DATA.orders.forEach((order) =>{
    console.log(order.id);
    console.log(getUserById(order.userId))
    console.log(getProductById(order.productId));

  })
}

const getActiveUsers = () => {
  const activeUsers=[];
    DATA.users.forEach((user) => {
      if(user.accountActive === true) {
        activeUsers.push(user)
      }
    })
    return activeUsers;
}

const getNonActiveUsers = () => {
  const nonActiveUser = [];
  DATA.users.map((user) => {
    if(user.accountActive === false) {
      nonActiveUser.push(user);
    }
  })
  return nonActiveUser;
}

// const getMostExpensiveProduct = () => {
//   let expensive;
//   DATA.products.forEach((product, index)=>{
//     expensive = Math.max(product.price)
//   })
//   return expensive;
// }

const getMostExpensiveProduct = () => {
  let mostExpensive
  DATA.products.forEach( (product) => {

    if (mostExpensive == null || mostExpensive.price < product.price) {
      // console.log(mostExpensive);
      mostExpensive = product
    }
  })
  return mostExpensive
}
//getActiveUsers()  returns an array of the users who have active accounts.

//getMostExpensiveProduct()  returns the product with the highest price

// getOrderInfo()  returns an array of objects.
// The objects should contain the following key/value pairs:
// userName: the user's name
// orderId: the order id
// price: the price of the product in the order


const getOrderInfo = () => {
  let orderInfoArr = []
  DATA.orders.forEach((order) => {
    const userName = getUserById(order.userId).name
    const orderId = order.id
    const price = getPriceById(order.productId)

    const orderInfo = {
      userName: userName,
      orderId: orderId,
      price: price
    }
    orderInfoArr.push(orderInfo)
  })
  return orderInfoArr
}

const getProductById = (productId) => {
  let productName
  DATA.products.forEach((product) =>{
    if (product.id === productId) {
      productName = product
      console.log(productName)
    }
  })
}

const getOrderById = (orderId) => {
  let orderName
  DATA.orders.forEach((order) => {
    if (order.id === orderId) {
      orderName = order.name
    }
  })
}


const getProductsForOrder = (id) => {
  // if (data == null || data.orders == null || id == null) {
  //   throw new Error('Missing data or id')
  // }
  const productsOfOrderArray = []
  DATA.orders.forEach((currentOrder) => {
    if (currentOrder.id === id ) {
      console.log(currentOrder);
      currentOrder.products.forEach((currentProductId) => {
        console.log(currentProductId);
        productsOfOrderArray.push({
          id: currentProductId,
          product: getProductById(currentProductId)

        })
      })
    }
  })
  console.log(productsOfOrderArray, "array");
  return productsOfOrderArray

}

const App = () => {

// console.log(getUserById(1));
console.log(getProductById(1));
// console.log(getOrders());
// console.log(getActiveUsers());
// console.log(getMostExpensiveProduct());
// console.log(getOrderInfo());
// console.log(getNonActiveUsers());
// console.log(getProductsOver40());
console.log(getProductsForOrder(1))

    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
}

export default App;
