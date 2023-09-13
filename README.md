This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Item manager
This project consists about creating an small "Wallapop" that receives info from an API

## What will you find?

- Home with a listing of all items extracted from the API
- Max of 5 products per page 
- Pagination that offers you the possibility to go to next products
- Searchbar to filter among all the items based on title, price, email and description
- Sort where you can select the type of sorting that you want to do, based on title, price, email and description.
- "Easy ordering", it appears only when you decide to filter, and automatically put it in ascending. It also changes the color when you click on it.
- You can save your favorite items by clicking the heart.
- You also have a modal where you can see them and filter them by title.
- Responsive web



## Getting Started

###  Node- & NPM-Versions

This app uses Node version 16.16.0 and npm version 9.8.1.

You need to install them to run the project using: 

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Tests
 
To run the tests, use:

```bash
npm run test
```

## Considerations

- I've decided to use Next.js because it simplifies performance optimization and SEO for my web applications. It also enables the creation of dynamic routes and provides flexibility to generate static pages or load dynamic data on the client, which is essential for projects with frequently updated content.
- I've used typescript because it encourages the use of strong typing and interfaces, leading to better code quality.
- I've decided to do integration tests because they can validate the entire user flow through my application. I used Jest with React Testing Library.





Hope you enjoy it as much as I did ! <3





