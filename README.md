# CollegeBay

Empowering student communities through a unique e-commerce platform. Buy and sell with ease as college students connect to exchange products within their community. Affordable essentials for every student, fostering a culture of support and accessibility.

## App Setup (localhost)

Install node.js compatible with your system from the website . 
```bash
 https://nodejs.org/en/download
  ```

  Check the version of your node.js and npm on command prompt.
  
  ```bash
 node -v
npm -v
  ```
Getting output as below means you have succesfully installed node and npm .

![App Screenshot](public/npm.png?text=App+Screenshot+Here)


Open a Directory of your choice on the system and clone the Github repository via running the code on git-bash .

```bash
 git clone https://github.com/vanshdhar999/College-ecommerce
  ```

Looks like this while execution 


![App Screenshot](public/glone.png?text=App+Screenshot+Here)



## Deployement 
After cloning, open the folder in VS-Code and Run the following command
```bash
 npm run dev
  ```
Something like this will appear 

![App Screenshot](public/host.png?text=App+Screenshot+Here)


Go to http://localhost:3000 on your browser to see the result .

#Prisma Setup
run npx prisma init after setting up your MongoDB database 
```bash
npx prisma init
```
To pull or push yyour queries from database into your local machine run 
```bash
npx prisma db pull/push
```

## Environment Variables 
DATABASE_URL="..." // Put your Database URL here . 

GOOGLE_CLIENT_ID = "..." // Put Google_Client_Id here .

GOOGLE_CLIENT_SECRET = "..." // Put your Google_Client_Secret here

NEXTAUTH_URL = "..." // put your NextAuth URL here .

NEXTAUTH_SECRET = "..." // put your NextAuth Secret here .

## Features 


1. User Authentication : Seamless Authentication of the user via OAuth .

2. User Management : The Data of Users is managed effortlessly on MongoDB , that is accessible from anywhere .

3. Responsive Design : Website works well on different desktop screen sizes. 


4. Search Functionality: Search bar on the top is case insensitive and searches the underlying database .
Ensure fast and efficient search performance, minimizing latency in delivering results.

5. Content Management: User can interact with the website and add items for sale on the website .

6. Database Integration: MongoDB allows the admin to access database from anywhere . Fetching data from database is fast and efficient .

7. API Integration: OAuth 2.0 from the Google API Console is integrated .











## Technologies Used

Client side - Next.js , TailwindCSS , TypeScript , DaisyUI 

Server side - Node.js , Prisma , TypeScript , MongoDB , NextAuth.js , OAuth Google

## Documentation

Next.js - https://nextjs.org/docs

TailwindCSS - https://v2.tailwindcss.com/docs

TypeScript - https://www.typescriptlang.org/docs/

MongoDB - https://www.mongodb.com/docs/

DaisyUI - https://daisyui.com/

Node.js - https://nodejs.org/docs/latest/api/

Prisma - https://www.prisma.io/docs

NextAuth.js - https://next-auth.js.org/

OAuth Google - https://developers.google.com/identity/protocols/oauth2

## feedback -- link





















