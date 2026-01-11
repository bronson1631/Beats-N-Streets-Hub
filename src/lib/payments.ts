// Placeholder mobile-side helper that calls the Java server to create a PaymentIntent
export async function createPaymentIntent(amount: number, currency = 'usd') {
  const res = await fetch('https://your-server.example.com/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, currency }),
  });
  return res.json();
}
