const handleAddCart = newProd => {
  console.group(newProd, productIDs)
  console.groupEnd()

  if (!productIDs.filter(prod => prod.productId === newProd.productId).length)
    setProductIDs([...productIDs, newProd])
  else {
    const updatedIDs = productIDs.map(prod => {
      if (prod.productId === newProd.productId)
        return {
          ...prod,
          quantity: (prod.quantity += 1)
        }
      else return prod
    })
    setProductIDs(updatedIDs)
  }

  setCartSuccess(true)

  setTimeout(() => {
    setCartSuccess(false)
  }, 1500)

  return 0
}

export { handleAddCart }
