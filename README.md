## Auth wiring

- Supabase auth is wired.
- Provide Supabase keys in `app.json` extras or use environment variables. Example keys (fill real values):
  - EXPO_PUBLIC_SUPABASE_URL
  - EXPO_PUBLIC_SUPABASE_ANON_KEY

- Sign in and sign up flows are implemented and session persistence uses `expo-secure-store`.
