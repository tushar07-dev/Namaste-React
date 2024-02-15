## What is Production ready code ?
A: We need to remove unwanted comments consoles, Bundle all the code, code splitting, chunking, image optimization, compress it.

## Whenwe do npm i react app, it already give you ready made files so you can upload your react server, but here we we will do by our self,

--- Create your own React App ---

Suppose we want to build fast production ready app, can react it self can do that ?
No, There are lot of other packages, library with react that make out app fast, Now we can see which are they and how to istall them in out react app.
- npm - is is not [Node Package Manager], There is no Full form.
1) How to add npm itself to our project ?
npm init 
package name
discription
entry point
test command
git repo
keywords

it will create package.json file this will help full when we add different Dependencies

2) adding bundler package - [Webpack, parcel, veet] all 3 together called bundler
A : "parcel": "^2.11.0"
    -This is carate "^" it means, when that Dependencies has some minor update it will get updated in our project also without asking us
    -This is tilde "~" it means, when that Dependencies has some major update it will get updated in our project also without asking us This  
    should be avoid if there is makor update maybe your project can get crash.

3) Dependencies ?
A: there are 2 Dependencies 1st is Dev Dependencies 2 is normal Dependencies
Dev Dependencies are generally used for development phase
Normal depencies are used in  production also.

4) package-lock.json ?
A: it keeps the tract of exact version of Dependencies used in project, package.json can have approax version i.e "^2.11.0" but package-lock.json have exact version "2.8.3"

5) Why node_modules files are so huge ?
A:  node modules contain files that are req for dependacies, but that it dependencies might be req more dependencies to also that req more dependencies to work and node_modules download all of thse it is called "transitive dependecies"

6) How to Ignite our app ?
A: npx parcel index.htlm -> It will ignite out app , it create server for us, on local host on port 1234
Parcel also install React/React-dom to out app as one of the depedacies
npx parcel index.htlm  -> give dev build compress for 1 file
npx parcel build index.htlm  -> give production build  compress for js/css/html

7) Browser List?
A:  Suppose you want to support your browser to different browsers and version of browser, you have to mention it in BrowserList
"browsersList" : [
    "last 10 Chrome version",
    "last 20 Firefox version",
] OR
 [
    "last 2 versions", // not specify which browser so it will support all the browsers of last 2 version
 ]
You can check this on BrowsersList.dev site search last 10 Chrome version / last 2 versions
to check Overall browser coverage of users you can get by this. If we increase version 2 to 3, 4, 5 it will impact on node_modules files and can slow down your site as your not it have to maintain dev dependencies for all. with coutry specific details on Query compositions.
this happens beacause of parcel with browserList

This is the reason why your app is fast than other how you made your app faster comparitive to others