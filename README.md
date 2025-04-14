# TomElite - E-Book Platform

TomElite is a modern e-book platform built with Next.js and Firebase, designed to provide a seamless reading experience. The application allows users to browse, search, and read e-books, with AI-powered features for enhanced content interaction.

## 🚀 Features

- **E-Book Browsing**: Browse featured e-books on the homepage
- **Book Details**: View detailed information about each book
- **E-Reader**: Built-in reader for e-books
- **AI-Powered Summaries**: Generate concise summaries of book content using AI
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**:
  - [Next.js 15](https://nextjs.org/) with App Router
  - [React 18](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - [shadcn/ui](https://ui.shadcn.com/) component library

- **Backend & Services**:
  - [Firebase](https://firebase.google.com/) for authentication, database, and storage
  - [GenKit](https://genkit.ai/) for AI-powered features

- **State Management**:
  - [TanStack Query](https://tanstack.com/query/latest) for data fetching and caching

## 📋 Prerequisites

- Node.js 20 or later
- npm or yarn
- A Firebase project

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tomelite-app.git
   cd tomelite-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   GOOGLE_GENAI_API_KEY=your-google-ai-api-key
   ```

## 🚀 Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the application.

For AI features development:

```bash
npm run genkit:dev
# or
npm run genkit:watch
```

## 📦 Building for Production

Build the application for production:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm run start
# or
yarn start
```

## 🧪 Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
# or
yarn typecheck
```

## 📁 Project Structure

```
tomelite-app/
├── public/             # Static assets
├── src/
│   ├── ai/             # AI-related code
│   │   ├── flows/      # AI workflows
│   │   └── ...
│   ├── app/            # Next.js App Router
│   │   ├── book/       # Book details page
│   │   ├── reader/     # E-reader page
│   │   └── ...
│   ├── components/     # React components
│   │   ├── ui/         # UI components
│   │   └── ...
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── services/       # Service layer
├── .env.local          # Environment variables (not in repo)
└── ...
```

## 🔒 Environment Variables

The application uses environment variables for configuration. In development, these are loaded from `.env.local`. Make sure to set up the following variables:

- `NEXT_PUBLIC_FIREBASE_*`: Firebase configuration variables
- `GOOGLE_GENAI_API_KEY`: Google AI API key for AI features

**Important**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Do not store sensitive secrets in these variables.

## 🧠 AI Features

The application uses Google's AI capabilities through GenKit to provide features like book summarization. The AI flows are defined in the `src/ai/flows` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.