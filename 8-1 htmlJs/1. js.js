//callback
//promise

const order={name: "ps5",orderId : 1};

const price = {
    1: 56700,
    2:30670,
    3:40000,
    4:54678
  }
  
  const promise  = createCart(order)
  console.log(promise,"promise<><><><><>")
  promise.then((orderId)=>{
    return checkOutPage(orderId)
  })
  .then((price)=>{
    console.log(price,"price<><><<>><")
    return paymentPage(price);
  })
  .catch((err)=>{
    console.log(err,"error<><><>")
  })
  .then(()=>{
    console.log("will it work !??????")
  })

  
function createCart(order){
 
    const promise = new Promise(function(resolve, reject){
      const isValidate = validateCart(order)
      if(isValidate){
        setTimeout(()=>{
          resolve(order.orderId)
        },2000)
      
      }
      else{
        reject("Cart is not valid")
      }
    })
    return promise
  }
  
  function validateCart (order){
    console.log(Object.keys(order))
    if(Object.keys(order).length && order.orderId){
      return true 
    }
    else{
      return false
    }
    
  }
  
  function checkOutPage(orderId){
    const orderPrice = price[orderId]
    console.log(orderPrice,orderId,"orderPrice<><><.")
    return orderPrice
  }
  function paymentPage(price){
    alert("make payment")
  }