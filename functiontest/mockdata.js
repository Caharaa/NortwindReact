const orders = Array.from({ length: 100 }, (_, i) => ({
  orderID: i + 1,
  orderDate: new Date().toISOString(),
  customerID: `C${String(i + 1).padStart(3, '0')}`,
  shipName: `Customer ${i + 1}`,
  shipCity: ["Bangkok", "Tokyo", "New York", "London", "Paris"][i % 5],
  shipCountry: ["Thailand", "Japan", "USA", "UK", "France"][i % 5]
}));

module.exports = orders;
