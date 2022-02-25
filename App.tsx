import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Actionsheet,
  Box,
  Button,
  Center,
  NativeBaseProvider,
  useDisclose,
  Text,
  PresenceTransition,
  HStack,
  Progress,
} from 'native-base';
import { theme } from './customerTheme';

function App() {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [toggle, setToggle] = useState(false);

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider style={{ marginTop: 50, marginBottom: 50 }}>
        <Center>
          <Button onPress={onOpen}>Actionsheet</Button>
          <Actionsheet isOpen={true} disableOverlay>
            <Actionsheet.Content>
              <Box w="100%" h={60} px={4} justifyContent="center">
                <Text
                  fontSize="16"
                  color="gray.500"
                  _dark={{
                    color: 'gray.300',
                  }}
                >
                  Albums
                </Text>
              </Box>
              <Actionsheet.Item>Delete</Actionsheet.Item>
              <Actionsheet.Item>Share</Actionsheet.Item>
              <Actionsheet.Item>Play</Actionsheet.Item>
              <Actionsheet.Item>Favourite</Actionsheet.Item>
              <Actionsheet.Item>Cancel</Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        </Center>

        <Center mt={4}>
          <HStack>
            <PresenceTransition
              visible={toggle}
              initial={{
                translateX: 0,
              }}
              animate={{
                translateX: 200,
                transition: {
                  duration: 250,
                },
              }}
            >
              <Text w={100} bg={'amber.100'}>
                Pick up
              </Text>
            </PresenceTransition>
            <Button w={100} onPress={() => setToggle(!toggle)}>
              XX
            </Button>
            <PresenceTransition
              visible={toggle}
              initial={{
                translateX: 0,
              }}
              animate={{
                translateX: -200,
                transition: {
                  duration: 250,
                },
              }}
            >
              <Text w={100} bg={'amber.100'}>
                Drop off
              </Text>
            </PresenceTransition>
          </HStack>
        </Center>

        <Center mt={4}>
          <Box w={300} bg={'blueGray.300'} rounded="md">
            <Text>1123123</Text>
            <Text>1123123</Text>
            <Text>1123123</Text>
            <Progress rounded="0" roundedBottomLeft={'md'} roundedBottomRight={'md'} />
          </Box>
        </Center>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

export default App;
