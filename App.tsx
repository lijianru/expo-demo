import React from 'react';
import { View, TextField, Text, Button, Colors, ThemeManager } from 'react-native-ui-lib';

Colors.loadColors({
  pink: 'green',
});

ThemeManager.setComponentTheme('Button', (props: any) => {
  return {
    // this will apply a different backgroundColor
    // depending on whether the Button has an outline or not
    backgroundColor: props.outline ? 'black' : 'green',
  };
});

function App() {
  return (
    <View flex paddingH-25 paddingT-120>
      <Text pink text20>
        Welcome
      </Text>
      <TextField text50 placeholder="username" grey10 />
      <TextField text50 placeholder="password" secureTextEntry grey10 />
      <View marginT-100 center>
        <Button text70 white background-orange30 label="Login" />
        <Button link text70 orange30 label="Sign Up" marginT-20 />
      </View>
    </View>
  );
}

export default App;
