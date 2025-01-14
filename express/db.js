const coffeeBeans = [
  { id: 1, bean: "Brazil Santos"},
  { id: 2, bean: "Kenya"},
  { id: 3, bean: "Mt. Apo"},
]

async function getCoffeeBean(beanId) {
  return coffeeBeans.find(bean => bean.id === beanId);
};

module.exports = { getCoffeeBean };