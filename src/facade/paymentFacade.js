const UserValidation = require('../subsystems/userValidation');
const OrderValidation = require('../subsystems/orderValidation');
const PaymentGateway = require('../subsystems/paymentGateway');

class PaymentFacade {
  constructor() {
    this.userValidation = new UserValidation();
    this.orderValidation = new OrderValidation();
    this.paymentGateway = new PaymentGateway();
  }

  processPayment(userId, orderId, amount) {
    if (!this.userValidation.validateUser(userId)) {
      throw new Error('Invalid user');
    }

    if (!this.orderValidation.validateOrder(orderId)) {
      throw new Error('Invalid order');
    }

    if (!this.paymentGateway.processPayment(amount)) {
      throw new Error('Payment failed');
    }

    console.log('Payment processed successfully');
    return true;
  }
}

module.exports = PaymentFacade;
