# Beats-N-Streets-Hub

(Existing project README content kept above...)

## Maps integration

This project includes a Map screen that displays event and artist markers (mock data for now).

Note for production: a MAPS_API_KEY is required for platform map providers (for example, Google Maps).
- Do not commit secret keys to source control.
- For Expo / React Native, add your maps API key using your preferred secrets management (environment variables, app config, or platform-specific configuration).
- Example (local dev):
  - export MAPS_API_KEY=your_maps_api_key_here

Refer to react-native-maps and your platform provider (Google/Apple) documentation for platform-specific setup steps.