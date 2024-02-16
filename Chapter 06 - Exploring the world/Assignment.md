## Namaste React Course by Akshay Saini
# Chapter 06 - Exploring the world


## Theory Assignment:
- What is `Microservice`?
big companies use micro service archetecture, eg. UI- React, BackEnd-Java, DataBase-Puthon, SMS-GoLang, Email, Auth. SO we can use different techstacks for different services. 

# How All are the service connected ?
A: Like our all services run on there specific ports like UI service port: 1234, backENd port: 4567, DataBase port :1000, and at end all these services are mappped to domain name. /sms, /api, /ui, /email.   

- What is `Monolith architecture`?

- What is the `difference` between `Monolith and Microservice?
- Why do we need a `useEffect Hook`?
- What is `Optional Chaining`?
- What is `Shimmer UI`?
- What is the `difference` between `JS expression and JS statement`?
- What is `Conditional Rendering`? explain with a code example.
- What is `CORS`?
- What is `async and await`?
- What is the use of `const json = await data.json()`; in `getRestaurants()`?

# How we get data from backend ?
there 2 ways :
1) When app page Loads -> Do API call take (500 ms) [loader] -> as soon as we get the data we Render the Page with Data

2) When app page loads -> we render our UI -> now will make API call -> Re render application with data
In react we follow 2nd approach always, Why 2nd approach is we use ? Looks complex still why it is better ?
A: because In 1st approach, till the data load on page, We show nothing or Loader which is not good for user retainstion, BUt in2nd approach
   till the data came we show the skeleton sonuser experience is better in that term. 

# useEffect(() => {} , []); 2 parameter(callBack function, dependancie array)
whaterver you pass in this call back function  after the coponent has been rendered.
useEffect(() => {
    console.log('useEffect called');
} , []); 
console.log('body called');

retutn -> 'body called' -> return statement -> useEffect().
UseEffect will call every time my componenet is renders, my use effect will. But we put dependancy array here [], it changes the behaviour of its render. 
- If no Dependacy array it will useEffect will call on every component render.
- if Dependacy empty[] then useEffect will call only for initial render. Just once when component render 1st time.
- if Dependacy is ['btnName (state)'] thrn every time my btnName changes it will call useEffect

## Coding Assignment:
- Play with the `useEffect Hook` to see when it is called? (before or after render)
- Play with the `dependency array` in useEffect Hook.
- Play with the `developer console` by putting a `debugger` in render and `useEffect`.
- Call an `actual API call`.
- `Handle Error` in your `API call`.
- Build `Shimmer UI` when `data is not loaded`.
- `Render your UI` with `actual API data`.
- Make `Search functionality` work.
- Make a `Login Logout` button that `toggles with a state`.


## References:
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)