# Studio Kookajoo website

## Installation

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

We're using [pnpm](https://pnpm.io/cli/add) for package management, so be sure to prefix everything accordingly.

- `curl -fsSL https://get.pnpm.io/install.sh | sh -`
- `pnpm dlx create-next-app@latest kookajoo.com --typescript`
- `pnpm install -D tailwindcss postcss autoprefixer`
- `pnpm install`

## Coding

We're using [DaisyUI](https://daisyui.com/components) on top of Tailwind:

- `pnpm add -D daisyui@latest`
- Add to `tailwind.config.js`:

  ```javascript
  module.exports = {
  //...
    plugins: [
        require('daisyui'),
    ],
  }
  ```

## Start-up notes

To run the dev server:

```bash
pnpm dev
```
