Episode 2:

1. On doing npm inti : a package.json file is created which is configuration of npm and using it can install all the packages with exact version no.

2. the most important package in our project is bundler.

3. Bundler will minify the code and make it production ready here we're using parcel bundler but by default create react app uses Webpack.

4. So, we'll install parcel, npm install -D parcel

5. when we install parcel it will give node modules folder which contain packages for managing the projects.

6.  We can delete node_modules folder for sharing the project and can regenrate by using cmd:
 -----> npm install

7. We can ignite our app using cmd:
    ----> npx parcel index.html 
This'll host our app on server and give us url link
npx will execute the package, here it is executing parcel, parcel will go to index.html and build a development build of our app and it host our build to port 1234.

8. we have used the cdn link to get react in our project, the other way to get it using react package that we can get from npm.

9. Parcel Work: (for more read parceljs website)
   a. Dev Build
   b. Local Server
   c. HMR- Hot Module Replacement  (auto refersh)
   d. File Watching algorithm
   e. faster build
   f. Image optimization
   g. Minify/Bundle/Compress our app
   h. Consistent Hashing
   i. Code Splitting
   j. Support of older browser
   k. Diagnostic
   l. Error Handling
   m. Tree Shaking - remove unused code
   n. Different Dev and Prod bundles, to create
    prod build we do: npx parcel build index.html

10. The build files will be in dist folder
 
11. browserList: (browserlis.dev site)

Episode 3:

1. functional component: a fn that return a jsx code is a functional component

2. We render a functional component like: root.render(<HeadingComponent/>);

3. & we render a react element like: root.render(heading);

4. Component Composition: Putting one component inside another component
   ex: 
   const HeadingComponent= ()=>{
   return 
       <div>
         <Title />
         <h1 className="heading"> Namaste React Walo</h1>
       </div>
   };

5. We can write any piece of js inside jsx inside { curly braces }.
Ex: const HeadingComponent= ()=>(
   <>
     <Title /> or {Title()}
     {number}
     <h1 className="heading"> Namaste React Walo</h1>
   </> 
);


