# facade_design_pattern
The Facade Design Pattern is a structural design pattern that provides a simplified interface to a larger subsystem or complex set of classes. It hides the complexity of the subsystem by exposing a unified, easy-to-use interface

# When to Use the Facade Pattern
- When you want to simplify a complex subsystem for ease of use.
- To decouple clients from tightly interacting with multiple subsystems directly.
- To improve readability and maintainability by introducing a single entry point.

# Example Use Case
 The system involves multiple subsystems such as user validation, order validation, and payment gateway interaction. Instead of exposing these subsystems to the client directly, a PaymentFacade will handle the interactions.
