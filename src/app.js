const PaymentFacade = require('./facade/paymentFacade');

const paymentFacade = new PaymentFacade();

try {
  const userId = 1;
  const orderId = 101;
  const amount = 50.0;

  paymentFacade.processPayment(userId, orderId, amount);
  console.log('Transaction completed');
} catch (error) {
  console.error(`Transaction failed: ${error.message}`);
}
