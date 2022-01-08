import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CheckBox,
  Icon,
  Image,
  Input,
  Tab,
  TabView,
  Text,
  ThemeProvider,
  useTheme,
} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { customerTheme } from './customerTheme';

function App() {
  const { theme } = useTheme();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [check1, setCheck1] = useState(false);
  const [index, setIndex] = React.useState(0);

  const users = [
    {
      name: 'brynn',
      avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
    {
      name: 'thot leader',
      avatar:
        'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
  ];

  return (
    <ThemeProvider theme={customerTheme}>
      <SafeAreaProvider style={{ marginTop: 50, marginBottom: 50 }}>
        <ScrollView>
          <Button title={'Click'} />

          <ButtonGroup
            buttons={['SIMPLE', 'BUTTON', 'GROUP']}
            selectedIndex={selectedIndex}
            onPress={(value) => {
              setSelectedIndex(value);
            }}
            containerStyle={{ marginBottom: 20 }}
          />

          <Badge value="3" status="success" />

          <Card>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider />
            {users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image style={styles.image} resizeMode="cover" source={{ uri: u.avatar }} />
                  <Text style={styles.name}>{u.name}</Text>
                </View>
              );
            })}
          </Card>

          <CheckBox center title="Click Here" checked={check1} onPress={() => setCheck1(!check1)} />

          <Input
            placeholder="INPUT WITH CUSTOM ICON"
            leftIcon={<Icon name="timer" size={24} color="black" />}
          />

          <Input
            placeholder="INPUT WITH ERROR MESSAGE"
            errorStyle={{ color: 'red' }}
            errorMessage="ENTER A VALID ERROR HERE"
          />

          <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
              backgroundColor: 'white',
              height: 3,
            }}
            variant="primary"
          >
            <Tab.Item
              title="Recent"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
            />
            <Tab.Item
              title="favorite"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
            />
            <Tab.Item
              title="cart"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
            />
          </Tab>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
              <Text h1>Recent</Text>
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
              <Text h1>Favorite</Text>
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
              <Text h1>Cart</Text>
            </TabView.Item>
          </TabView>

          <Text style={styles.text} h1 h1Style={{ color: theme?.colors?.secondary }}>
            Heading 1
          </Text>
          <Text style={styles.text} h2 h2Style={{ color: theme?.colors?.success }}>
            Heading 2
          </Text>
          <Text style={styles.text} h3 h3Style={{ color: theme?.colors?.warning }}>
            Heading 3
          </Text>
          <Text style={styles.text} h4 h4Style={{ color: theme?.colors?.primary }}>
            Heading 4
          </Text>
        </ScrollView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
});

export default App;
