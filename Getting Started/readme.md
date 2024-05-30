<div align=center>
<h1>Macbook</h1> 
<img src="https://img.shields.io/badge/Apple-%23000000.svg?style=for-the-badge&logo=apple&logoColor=white width=400">
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&color=black width=400">
</div>
<br>


## Get Started

To start using Aceternity UI in your projects, simply install the library via your preferred package manager:

### Next.js

```bash
npx create-next-app@latest
```
On Installation, you will be prompted to choose a template. Select the default template and proceed with the installation.

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*

```
After the prompts, `create-next-app` will create a folder with your project name and install the required dependencies.

Create a root layout inside `app/layout.tsx` with the required `<html>` and ``<body>`` tags:

```tsx
// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```
Finally, create a home page `app/page.tsx` with some initial content:

```tsx
// app/page.tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```
Now, you can start the development server:

Run `npm run dev` to start the development server.
Visit `http://localhost:3000` to view your application.
Edit `app/page.tsx` (or `pages/index.tsx`) file and save it to see the updated result in your browser.


<a href="/Aceternity_UI/readme.md"><img src="https://github.com/Aksshay88/Macbook/assets/119944779/1c389169-463a-42e1-b4f0-28830ed4b8a8"></a>

