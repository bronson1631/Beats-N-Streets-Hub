package com.beats.stripe.controller;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@RestController
public class PaymentController {

    @PostConstruct
    public void init() {
        String key = System.getenv("STRIPE_SECRET_KEY");
        if (key == null) {
            System.err.println("WARNING: STRIPE_SECRET_KEY not set in environment");
        } else {
            Stripe.apiKey = key;
        }
    }

    @PostMapping("/create-payment-intent")
    public ResponseEntity<Map<String, Object>> createPaymentIntent(@RequestBody Map<String, Object> body) {
        Integer amount = (Integer) body.getOrDefault("amount", 1000);
        String currency = (String) body.getOrDefault("currency", "usd");

        try {
            PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                    .setAmount((long) amount)
                    .setCurrency(currency)
                    .build();

            PaymentIntent intent = PaymentIntent.create(params);

            Map<String, Object> resp = new HashMap<>();
            resp.put("clientSecret", intent.getClientSecret());
            return ResponseEntity.ok(resp);
        } catch (StripeException e) {
            e.printStackTrace();
            Map<String, Object> err = new HashMap<>();
            err.put("error", e.getMessage());
            return ResponseEntity.status(500).body(err);
        }
    }
}
