# CollegeBay

Empowering student communities through a unique e-commerce platform. Buy and sell with ease as college students connect to exchange products within their community. Affordable essentials for every student, fostering a culture of support and accessibility.

## App Setup (localhost)

1. Install node.js compatible with your system from [the official website](https://nodejs.org/en/download) . 

2. Install npm on your desktop from terminal .
```bash
 npm install
  ```


 3. Check the versions of Node.js and npm in the command prompt.
  
  ```bash
 node -v
npm -v
  ```



4. Open a directory of your choice on your system and clone the GitHub repository using Git Bash.

```bash
 git clone https://github.com/vanshdhar999/College-ecommerce
  ```
5. Open the cloned folder in VS Code and run the following command in the terminal to install necessary packages.
```bash
 npm i daisyui prisma @prisma/client next-auth @auth/prisma-adapter prettier eslint-config-prettier prettier-plugin-tailwindcss
  ```



## Deployment 
Run the following command in the VS Code terminal .

```bash
 npm run dev
  ```

## Prisma Deployment 
Create MonogDB database and define the query field for your data.
Run 
```bash
npx prisma init
```
Pull data from database 
```bash
npx prisma db pull
```
Replace <password> and <projectname> with your MongoDB password and projectname

<img width="974" alt="Screenshot 2024-01-21 at 11 08 27 PM" src="https://github.com/vanshdhar999/College-ecommerce/assets/118869994/cc5a7ab6-3317-4dfb-a4b6-7ccd6e9fe890">

```bash
npx prisma generate
```
Run this command to generate Prisma Client 


Go to http://localhost:3000 on your browser to view the result .

## Environment Variables 
Ensure to set the following environment variables:

DATABASE_URL: Put your Database URL here.

GOOGLE_CLIENT_ID: Put your Google Client ID here.

GOOGLE_CLIENT_SECRET: Put your Google Client Secret here.

NEXTAUTH_URL: Put your NextAuth URL here.

NEXTAUTH_SECRET: Put your NextAuth Secret here.


## Features 


1. User Authentication : Seamless authentication via OAuth .

2. User Management : Effortless management of user data stored on MongoDB .

3. Responsive Design : Ensures optimal performance on various desktop screen sizes. 


4. Search Functionality: Case-insensitive search bar efficiently queries the underlying database .


5. Content Management: Users can interact with the website and add items for sale.

6. Database Integration: MongoDB enables secure and efficient data retrieval.

7. API Integration: Integration with Google API Console for OAuth 2.0 .











## Technologies Used

### Client side 
1. Next.js
2. TailwindCSS
3. TypeScript
4. DaisyUI 

### Server side 
1. Node.js
2. Prisma
3. TypeScript
4. MongoDB
5. NextAuth.js
6. OAuth Google

## Documentation

[Next.js](https://nextjs.org/docs)

[TailwindCSS](https://v2.tailwindcss.com/docs)

[TypeScript](https://www.typescriptlang.org/docs/)

[MongoDB](https://www.mongodb.com/docs/)

[DaisyUI](https://daisyui.com/)

[Node.js](https://nodejs.org/docs/latest/api/)

[Prisma](https://www.prisma.io/docs)

[NextAuth.js](https://next-auth.js.org/)



OAuth Google - https://developers.google.com/identity/protocols/oauth2

## Feedback 
For raising issues or contribution please connect through 

1. 11avanshdhar@gmail.com
2. bkiisc@gmail.com
3. kanishkaman42@gmail.com
4. saumysharan25@gmail.com





















