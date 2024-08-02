This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


### Running with Docker

First we compile the Dockerfile to create an image, then create and run a container using the image. 

#### For development

```bash
docker build -t splash-brew -f Dockerfile.dev

```

We can create and run the application in the container with the following command:
```bash
docker run --rm --name splash-brew -p 3000:3000 -v ./:/usr/src/app -it splash-brew bash
```

We also use -v to mount the localfolder to /usr/src/app so that we can share data between the local folder and the container so that any changes made locally is represented inside the container. 

#### For production

```bash
docker build -t splash-brew

```

And then create and run the container. 

```bash
docker run --rm --name splash-brew -p 3000:3000 splash-brew 
```

### Running without Docker

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
