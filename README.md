# jasmine

evilfactory UI Components built on top baseweb

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