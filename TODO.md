## Project TODO

### Backend (`backend/`)
- [ ] `server.js`: Load environment config, add centralized error handling, and wire structured logging before route registration.
- [ ] `routes/tasks.js`: Add payload validation, pagination/query filters, and enforce consistent HTTP status mapping.
- [ ] `models/Task.js`: Expand schema with timestamps, status enum, and shared query helpers; cover updates with unit tests.
- [ ] `package.json`: Add lint/test/watch scripts, a nodemon-based dev command, and pin dependencies (including `dotenv`).

### Frontend (`frontend/`)
- [ ] `src/api.js`: Create a reusable Axios client with base URL/env handling plus request/response interceptors for auth and errors.
- [ ] `src/App.js`: Break UI into `TaskList`/`TaskForm`, integrate API module, and support optimistic UI updates.
- [ ] `src/index.css`: Introduce palette, spacing scale, and responsive layout rules for desktop/mobile breakpoints.
- [ ] `src/index.js`: Prepare global state provider (Context/Redux) wrapper for `<App />`.
- [ ] `public/index.html`: Add meta tags, favicon reference, and polished placeholder copy.
- [ ] `README.md`: Document app overview, setup, scripts, and environment requirements.
- [ ] `package.json`: Configure ESLint/Prettier scripts, React testing setup, and proxy for local API calls.

### Cross-Cutting
- [ ] Root docs: Replace `README.txt` with project overview covering stack, prerequisites, and deployment steps.
- [ ] Environment: Provide `.env.example` files for backend/frontend with variable descriptions.
- [ ] Code style: Add shared lint/format configuration and enforce Node version via `.nvmrc` or `engines`.
- [ ] CI: Configure workflow (e.g., GitHub Actions) to run backend/frontend tests and linting on push.

