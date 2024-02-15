## Namaste React Course by Akshay Saini
# Chapter 04 - Talk is Cheap, show me the code


## Theory Assignment:
- Is `JSX` mandatory for React?
- Is `ES6` mandatory for React?
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
- How can I write `comments` in JSX?
- What is `<React.Fragment></React.Fragment>` and `<></>`?
- What is `Reconciliation` in React?
- What is `React Fiber`?
- Why do we need `keys` in React?
React optimize its render cycles of components of same level.so these component should have unique id, so DOM can identify it.
e.g. Suppose we have total 5 restaurent cards. Then an new restautent card at 1st place is inseted. If there no ID then react will not able to uniquely identify card. rerender all 5+1 restaurents. To optimize this we need unique id i.e. key.

People use index as key in map. It works fine no issues. But react itself says never you Index as key, 


- Can we use `index as keys` in React?

- What is `props in React`? Ways to ?
A: Props is short form of properties, and as we know React component is js js function like that Props we pass to component are just that fucntion's arguyment.

- What is `Config Driven UI`?


#1 Decide Design what your page should look like by wire frame design 
#2 Decide which will be the component we need to build & are these reusable


## Coding Assignment:
- Build a `Food Ordering App`
    - Think of a `cool name` for your app
    - Build an `AppLayout`
    - Build a `Header Component` with `Logo` & `Nav Items` & `Cart`
    - Build a `Body Component`
        - Build `RestaurantList Component`
        - Build `RestaurantCard Component`
            - Use `static data initially`
            - Make your `card dynamic`(pass in props)
                - `Props` - passing arguments to a function - `Use Destructuring` & `Spread operator`
            - `Render` your cards with `dynamic data of restaurants`
            - Use `Array.map` to render all the restaurants

### PS. Basically do everything that I did in the class, in the `same sequence`. `Don't skip small things`.


## References:
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
- [Virtual DOM](https://reactjs.org/docs/faq-internals.html)
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
- [React Without ES6](https://reactjs.org/docs/react-without-es6.html)
- [Index Keys as Anti-Pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)
