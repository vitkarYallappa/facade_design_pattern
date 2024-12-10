class PaymentGateway {
    processPayment(amount) {
      console.log(`Processing payment of $${amount}`);
      return true; // Assume the payment is always successful
    }
  }
  
  module.exports = PaymentGateway;
  