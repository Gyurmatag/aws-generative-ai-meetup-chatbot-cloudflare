# AWS Generative AI Meetup Chatbot (Cloudflare)

A Next.js-based chatbot application that leverages Cloudflare's Workers AI platform to provide an interactive chat experience using Meta's Llama 2 model.

## Features

- 🤖 AI-powered chat interface using Cloudflare Workers AI
- ⚡ Built with Next.js 15 and React 19
- 🎨 Modern UI with Tailwind CSS
- 🚀 Cloudflare deployment ready
- 💬 Streaming responses for real-time interaction

## Prerequisites

- Node.js 18.17 or later
- Cloudflare account with Workers AI access
- Wrangler CLI installed

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   └── page.tsx         # Main page
├── components/          # React components
├── lib/                 # Utility functions
├── public/             # Static assets
└── .dev.vars           # Local development variables
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd aws-generative-ai-meetup-chatbot-cloudflare
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables in `.dev.vars`:
```
AI_API_TOKEN=your-cloudflare-ai-api-token
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to Cloudflare
- `npm run preview` - Preview Cloudflare deployment locally
- `npm run cf-typegen` - Generate Cloudflare environment types

## Deployment

This project is configured for deployment to Cloudflare using the OpenNext.js adapter. To deploy:

1. Ensure you have the Cloudflare Wrangler CLI configured
2. Run the deploy command:
```bash
npm run deploy
```

## Technologies

- [Next.js](https://nextjs.org/) - React framework
- [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/) - AI platform
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - UI components
- [workers-ai-provider](https://www.npmjs.com/package/workers-ai-provider) - Cloudflare AI integration

## License

This project is MIT licensed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
