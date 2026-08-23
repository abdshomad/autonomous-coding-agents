# Mockup Data Directory (`data/mockup/`)

This directory contains static mock data sets, fixture JSON files, and mock API response contracts.

## 📁 Organization Rules

1. **Separation of Concerns**: All mock and sample data must live in this directory, decoupled from UI components, business logic, and styling.
2. **Mock API Layer**: The application must provide a mock API layer that consumes data from `data/mockup/` and mirrors the real backend API responses.
3. **Demo/Live Toggle**: The application must include a switcher control allowing developers and users to toggle between **Demo Mode** (consuming mock data from this directory) and **Live Mode** (interacting with real endpoints).
