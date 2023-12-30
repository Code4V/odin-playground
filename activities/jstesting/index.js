const someOrder = {
  items: [
    {name: 'Cat Food', price: 8, quantity: 1},
    {name: 'Cat Cage (small)', price: 100, quantity: Math.round(Math.random() * 10)},
    {name: 'Cat Cage (medium)', price: 200},
    {name: 'Shipping', price: 40, shipping: true},
  ]
}

const orderTotal = order => {
  const totalItems = order.items
    .filter(x => !x.shipping)
    .reduce((prev, cur) => prev + (parseInt(cur.price ?? 0) * parseInt(cur.quantity ?? 1)), 0)

  const shippingItem = order.items.find(x => !!x.shipping)
  const shipping = 
    totalItems > 1000 ? 0 : shippingItem.price

  return totalItems + shipping
}
result = orderTotal(someOrder)
console.log(result)