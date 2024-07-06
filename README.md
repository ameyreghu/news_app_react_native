# News App with React Native

## Three Branches
### sate-only
uses only local state management through useState
### with-redux
uses the popular Redux library for state management
### with-redux-thunk
uses Redux in conjunction with Thunk middleware

note: main has latest code for "with-redux-thunk"


## Getting Started

### Api key
- Get your Free Api Key from [NewsApi](https://newsapi.org/register)

To start working on this project, simply clone the repository and navigate to the branch you'd like to work on:

```
git clone https://github.com/ameyreghu/news_app_react_native.git
cd news_app_react_native
git checkout main (or With-Redux or With-Redux-Thunk)
npm install
Update src/constants.js with your Api key
npx expo start
```

### To Update Expo  Sdk and dependencies if required 
```
npm install expo@latest
npx expo install --fix
```