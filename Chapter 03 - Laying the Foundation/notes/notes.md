## like we learned last lecture we dont need to do 
npx parcel buid index.htlm OR 
npx parcel index.htlm... we will use script in package.json.
"scripts": {
    "start" : npx parcel index.htlm, //script run to dev build
    "build" : npx parcel build index.htlm, // //script run to production build
}
npm run start / npm start
npm run build