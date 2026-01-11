````markdown
# Beats N Streets Hub — Mobile (Expo) + Java Stripe Server

This repository contains an Expo (React Native) mobile app scaffold (TypeScript) and a minimal Java (Spring Boot) server for Stripe payment integration.

Quick start (mobile):

1. Install dependencies

```bash
npm install
```

2. Copy `.env.example` to `.env` and fill the keys (or set Expo `extra` keys in `app.json` / config)

3. Start Expo

```bash
npx expo start
```

Mobile notes
- Authentication is planned with Supabase (you must provide Supabase project URL and anon key).
- Stripe payments are handled by the Java server (server/). The mobile app will call the server endpoint to create PaymentIntents.
- Map screens use `react-native-maps` — provide a Google Maps API key.

Java Stripe server
- Located in `server/` — a minimal Spring Boot app that exposes a `/create-payment-intent` endpoint.
- Set environment variable `STRIPE_SECRET_KEY` for the server.

Next steps
- Provide Supabase credentials so the auth flow can be wired.
- Provide Stripe keys and decide webhook handling strategy.
- Provide Google Maps API key for maps.

````
