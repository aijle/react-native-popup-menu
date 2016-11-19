import React from 'react';
import { Text } from 'react-native';
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

const CheckedOption = (props) => (
  <MenuOption {...props} text={(props.checked ? '\u2713 ' : '') + props.text} />
)

/* You can set default renderer for all menus just once in your application: */
//Menu.setDefaultRenderer(renderers.NotAnimatedContextMenu);

const ExtensionExample = () => (
  <MenuContext style={{flexDirection: 'column', padding: 30}}>
    <Text>Extensible hello world!</Text>
    <Menu
      onSelect={value => alert(`Selected number: ${value}`)}
      renderer={renderers.NotAnimatedContextMenu}
    >
      <MenuTrigger text='Select option' />
      <MenuOptions>
        <CheckedOption value={1} text='One' />
        <CheckedOption checked value={2} text='Two' />
      </MenuOptions>
    </Menu>
  </MenuContext>
);

export default ExtensionExample;
