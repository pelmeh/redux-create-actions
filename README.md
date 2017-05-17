# redux-create-actions
Made actions with namespace 

## Features
* Make constants for redux actions (Immutable by modify Object's desctiptors)
* Store page's name 
* Add prefix
* Swap prefix and constant (if constant is wrapped in array)
* Can be serialized (ex. for websockets)

## Using
### Initialization 

createActions(`prefix`: String, `constants`: Array, [`pageName`: String, `symbol`: String])
### Action file (actions/home.js)

Export constants:

```
export const actions = createActions('HOME_PAGE', [
  ['LOAD'], // -> LOAD_HOME_PAGE
  'SHOW_MENU', // -> HOME_PAGE_SHOW_MENU
  'HIDE_MENU' // -> HOME_PAGE_HIDE_MENU
], 'home')
```

Export actions:

```
export const load = data => ({
  type: actions.LOAD,
  payload: data
})
...
```

### Add import in domain file (actions/index.js)

```
import * as Home from './home'
...

export {
  Home
  ...
}

```

### Reducer file (reducers/home.js)
Import constants

```
import { actions } from '/actions/'
export const load = data => ({
  type: actions.LOAD,
  payload: data
})
...
```

### Page file (pages/home.js)
Import actions as domain make refactor easier
```
import { Home as page } from '/actions/'
const { actions } = page
...
// Page actions:
page.*action*

// Page name:
actions.pageName

// Page constants:
actions.*constant*
```
Redux mapDispatchToProps: 
```
const mapDispatchToProps = (dispatch, ownProps) => ({
  load: (data) => dispatch(page.load(data)),
  ...
})
```
