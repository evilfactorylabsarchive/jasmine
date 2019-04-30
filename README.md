# jasmine

evilfactory UI Components built on top baseweb

[![Netlify Status](https://api.netlify.com/api/v1/badges/4313596d-c15b-4570-bf97-b3c362f2f925/deploy-status)](https://app.netlify.com/sites/evilfactorylabs-jasmine/deploys)

## Technology stacks

- React
- Next.js
- Styletron
- Baseweb

## Disclaimer

> This project is still Work In Progress

## Getting started

### Clone repo

```bash
git clone git@github.com:evilfactorylabs/jasmine.git
```

### Install dependencies

```
cd $_ && yarn
```

### Start Development Server

```
yarn dev
```

### Future Usage

```javascript
import { JasmineTheme as Jasmine } from '@evilfactory/jasmine'
import { ThemeProvider } from 'baseui'
import { Provider as StyletronProvider } from 'styletron-react'

class SomeRootFragment extends SomeRootComponent {
  render () {
    return (
      <StyletronProvider value={styletron}>
        <ThemeProvider theme={Jasmine}>
          <App />
        </ThemeProvider>
      </StyletronProvider>
    )
  }
}
```

### Future Plan

Web Component as build target for the sake of framework agnostic and use the platform?

Related with: [evilfactorylabs/design](https://github.com/evilfactorylabs/design)
