# react-native-popup-menu

Extensible popup menu component for React Native for both Android and iOS.

<img src="doc/img/context-menu.png" width="300">

## Features
* Simple to use popup/context menu
* Multiple modes: animated, not animated or slide in from bottom
* Easy styling
* Customizable on various levels - menu options, positioning, animations
* Can work as controlled as well as uncontrolled component
* Different lifecycle hooks

## Installation

```
npm install react-native-popup-menu --save
```

## Basic Usage
Wrap your application inside `MenuContext` and then simply use `Menu` component where you need it. Below you can find a simple example.

For more detailed documentation check [API](./doc/api.md).

```js
import React from 'react';
import { Text } from 'react-native';
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export const App = () => (
  <MenuContext style={{flexDirection: 'column', padding: 30}}>
    <Text>Hello world!</Text>
    <Menu onSelect={value => alert(`Selected number: ${value}`)}>
      <MenuTrigger text='Select option' />
      <MenuOptions>
        <MenuOption value={1} text='One' />
        <MenuOption value={2}>
          <Text style={{color: 'red'}}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text='Three' />
      </MenuOptions>
    </Menu>
  </MenuContext>
);
```

## Documentation

- [Examples](doc/examples.md)
- [API](doc/api.md)
- [Extension points](doc/extensions.md)

## Demo

<kbd>
![](./android.demo.gif)
</kbd>
