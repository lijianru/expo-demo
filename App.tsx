import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Provider as PaperProvider,
  Button,
  Banner,
  Card,
  Title,
  Paragraph,
  Checkbox,
  Chip,
  DefaultTheme,
} from 'react-native-paper';
import { Image } from 'react-native';

const theme: any = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    myOwnColor: '#BADA55',
  },
};

function App() {
  const [visible, setVisible] = useState(true);
  const [checked, setChecked] = useState(false);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider style={{ marginTop: 50, marginBottom: 50 }}>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>

        <Banner
          visible={visible}
          actions={[
            {
              label: 'Fix it',
              onPress: () => setVisible(false),
            },
            {
              label: 'Learn more',
              onPress: () => setVisible(false),
            },
          ]}
          icon={({ size }) => (
            <Image
              source={{
                uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
              }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}
        >
          There was a problem processing a transaction on your credit card.
        </Banner>

        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />

        <Chip icon="information" onPress={() => console.log('Pressed')}>
          Example Chip
        </Chip>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
