# Java Stripe Server

A minimal Spring Boot server that exposes a single endpoint to create Stripe PaymentIntents.

Run:

```bash
export STRIPE_SECRET_KEY=sk_test_...
cd server
./mvnw spring-boot:run
```

The endpoint is POST /create-payment-intent with JSON body { amount: 1000, currency: 'usd' } and returns { clientSecret }.
