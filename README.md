# Week13CRD_Vite

A TypeScript version of the CRD (Create, Read, Delete) application built with Vite.

## Features
- Create new NFL teams
- View list of NFL teams
- Delete NFL teams
- TypeScript implementation
- Modular code structure

## Technologies Used
- TypeScript
- Vite
- json-server
- Bootstrap CSS

## Setup
1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. In a separate terminal, start the json-server:
```bash
npx json-server --watch db.json --port 3000
```

## Project Structure
- `src/types.ts`: Type definitions
- `src/api.ts`: API-related functions
- `src/ui.ts`: UI-related functions
- `src/main.ts`: Main application logic
- `db.json`: Mock database 