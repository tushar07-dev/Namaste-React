## Namaste React Course by Akshay Saini
# Chapter 02 - Igniting our App


## Theory Assignment:
- What is `NPM`? 
A: it has no full form also node package manager is also not an full form you can check on npm site.

- What is `Parcel/Webpack`? Why `do we need it`?
A: Parcel has alot of feature provided for us to ignite project on server & yes we need it.

- What is `.parcel-cache`
A:  it store the build in cache so it help to give production build as faster than before

- What is `npx` ?
A: it "Node Package eXecute" It is basically a NPM package runner, which allows us to run JavaScript packages without installing it.

- What is `difference` between `dependencies` vs `devDependencies`
A: depedencies are used for production + development environment and devDependencies are used for development environment only

- What is `Tree Shaking`?
A: it is process used in JS to remove dead code.which refers to code that is not being used or refered anywhere in application. it relies on impot export statement to detect code modules used betwen js files.

- What is `Hot Module Replacement`?
A: Hot Module Replacement (HMR) is a feature that allows Parcel to automatically refresh the browser modules and their dependencies dynamically as changes are made to the codebase, thereby updating the application's state without requiring a full page reload.

- List down your `favorite 5 superpowers of Parcel` and `describe any 3` of them in your
own words.
A:  Speedy delivery | Real time tracking | Secure packaging


- What is `.gitignore`? What should `we add` and `not add` into it ?
A: It store the files names that ignore when tracking changes in a repository Files that are generated during the build process or contain sensitive information like passwords or API keys should typically be added to .gitignore.

- What is the `difference` between `package.json` and `package-lock.json`
A: The package.json file stores approximate versions and required dependencies, while the package-lock.json file stores exact versions and dependencies.

- Why should I not modify `package-lock.json`?
A: can clead to inconsistancy and conflicts in project. Instead manage dependacies using npm commands and update 'package.json to maintain consistancy.

- What is `node_modules` ? Is it a `good idea to push that on git`?
A: no we should not push anything on git that we can generate while building


- What is the `dist` folder?
A: hold the final distribution version of software project, containing compress code that is ready to deployment to end-use.

- What is `browserlists`
A: tool in web development used to define browser compability requirements for css & js. it insure that code works on diffeernt browser & 
   versions, enhancing compability and performance.

- Read about `dif bundlers`: `vite`, `webpack`, `parcel`
A: 


- Read about: `^` - `caret` and `~` - `tilde`
A: This is carate "^" it means, when that Dependencies has some minor update it will get updated in our project also without asking us
    -This is tilde "~" it means, when that Dependencies has some major update it will get updated in our project also without asking us This  
    should be avoid if there is makor update maybe your project can get crash.

- Read about `Script types in html` (MDN Docs)
A: 


## Project Assignment:
- In your `existing project`
    - initialize `npm` into your `repo`
    - install `react` and `react-dom`
    - `remove CDN` links of `react`
    - `install parcel`
    - `ignite your app` with parcel
    - add scripts for `“start”` and `“build”` with `parcel commands`
    - add `.gitignore` file
    - add `browserlists`
    - `build a production version` of your code using `parcel build`


## References:
- [Creating your own create-react-app](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
- [Parcel Documentation](https://parceljs.org/getting-started/webapp/)
- [Parcel on Production](https://parceljs.org/features/production/)
- [BrowsersList](https://browserslist.dev/)