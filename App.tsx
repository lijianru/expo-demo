import React, { useState } from 'react';
import { View, TextField, Text, Button, Colors, ThemeManager, Dialog } from 'react-native-ui-lib';

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
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

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
      <Button
        text70
        white
        background-orange30
        label="Show Modal 1"
        onPress={() => setVisible(true)}
      />
      <Dialog visible={visible}>
        <View background-withe>
          <Text pink text20>
            Welcome modal 1
          </Text>
          <Button
            link
            text70
            orange30
            label="Open Modal 2"
            onPress={() => {
              setVisible(false);
              setVisible2(true);
            }}
          />
        </View>
      </Dialog>
      <Dialog visible={visible2}>
        <Text pink text20>
          Welcome modal 2
        </Text>
        <Button
          link
          text70
          orange30
          label="Open Modal 1"
          onPress={() => {
            setVisible2(false);
            setVisible(true);
          }}
        />
      </Dialog>
    </View>
  );
}

export default App;
