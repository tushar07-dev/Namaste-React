## Namaste React Course by Akshay Saini
# Chapter 07 - Finding the Path


## Theory Assignment:
- What are various ways to `add images` into our App? Explain with `code examples`.
- What would happen if we do `console.log(useState())`?
- How will `useEffect` behave if we `don't add` a `dependency array`?
- What is `SPA`?
- What is the `difference` between `Client Side Routing` and `Server Side Routing`?


<!-- ROUTES -->
# import createBrowserRounter from react-router-dom
and this createBrowserRounter take some configurations. which is list of Objects each and every object defines the path and what should happen on that path

const appRounter = createBrowserRounter([
    {
        path : "/",
        element : <AppLayOut>,
    },
    {
        path : "/about",
        element : <About>,
    },
    {
        path : "/contact",
        element : <Contact>,
    },
]);

Now you create this configuration now you have to provide this configuration by using "RounterProvider"

root.render(<RounterProvider rounter={appRounter}>)

there are few more Rounter provided by React-Rounter such as:
CreateHashRounter, CreateMemoryRounter, CreateStaticRounter, StaticRounterProvider have different use cases use it as per your use.





## Coding Assignment:
- Add `Shimmer Effect without installing a library`.
- Install `react-router-dom`.
- Create an `appRouter` and `Provide it to the app`.
- Create a `Home, About, and Contact Page` with Link (use child routes).
- Make an `Error page` for `routing errors`.
- Create a `Restaurant Page` with `dynamic restaurant ID`.
- (Extra) - Create a `login Page` using `Formik Library`.


## References:
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- [Formik](https://formik.org/)