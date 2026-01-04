# Nexio Agency API

Robust, production-ready backend server built with Node.js, Express, and TypeScript.

## Features
- **Security First**: Helmet, CORS, and Rate Limiting integrated.
- **Type Safety**: Fully typed with TypeScript and Zod validation.
- **Clean Architecture**: Separation of concerns between app logic and server entry.
- **Error Handling**: Global error middleware with environment-aware responses.

## Tech Stack
- **Framework**: Express 5 (latest)
- **Language**: TypeScript (NodeNext resolution)
- **Security**: Helmet, Express Rate Limit, CORS
- **Testing**: Jest + Supertest
- **Tools**: ESLint, Prettier, ts-node-dev

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Testing
```bash
npm test
```

## API Endpoints (v1)
- `GET /api/v1/health`: Returns service status.
