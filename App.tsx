import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NativeBaseProvider,
  Button,
  Checkbox,
  HStack,
  Select,
  CheckIcon,
  Box,
  Slider,
  Badge,
  Progress,
  Heading,
  FormControl,
  Input,
  Modal,
  ScrollView,
  Center,
} from 'native-base';
import { theme } from './customerTheme';

function App() {
  const [service, setService] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider style={{ marginTop: 50, marginBottom: 50 }}>
        <ScrollView>
          <Center
            bg="emerald.400"
            _text={{
              color: 'white',
            }}
            rounded="xl"
            w={[100, 200, 300, 400, 500]}
            h={24}
          >
            This is a box
          </Center>

          <Box m="2">
            <Button onPress={() => {}} _stack={{ margin: 2 }}>
              Click
            </Button>
          </Box>

          <Box m="2">
            <HStack space={6}>
              <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
              <Checkbox
                value="test"
                accessibilityLabel="This is a dummy checkbox"
                defaultIsChecked
              />
            </HStack>
          </Box>

          <Box m="2">
            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </Box>

          <Box m="2">
            <Slider
              defaultValue={70}
              minValue={0}
              maxValue={100}
              accessibilityLabel="hello world"
              step={1}
            >
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </Box>

          <Box m="2">
            <Badge>NEW FEATURE</Badge>
          </Box>

          <Box m="2">
            <Progress value={45} max={100} />
          </Box>

          <Box m="2">
            <Button onPress={() => setShowModal(true)}>Show Modal 1</Button>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Contact Us</Modal.Header>
                <Modal.Body>
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input />
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="ghost"
                      colorScheme="blueGray"
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onPress={() => {
                        setShowModal(false);
                        setShowModal2(true);
                      }}
                    >
                      Open Modal 2
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
            <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Contact Us 2</Modal.Header>
                <Modal.Body>
                  <FormControl>
                    <FormControl.Label>Name 2</FormControl.Label>
                    <Input />
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>Email 2</FormControl.Label>
                    <Input />
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="ghost"
                      colorScheme="blueGray"
                      onPress={() => {
                        setShowModal2(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onPress={() => {
                        setShowModal2(false);
                        setShowModal(true);
                      }}
                    >
                      Open Modal 1
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Box>

          <Heading size="xs">xs</Heading>
          <Heading size="sm">sm</Heading>
          <Heading size="md">md</Heading>
          <Heading size="lg">lg</Heading>
          <Heading size="xl">xl</Heading>
          <Heading size="2xl">2xl</Heading>
          <Heading size="3xl">3xl</Heading>
          <Heading size="4xl">4xl</Heading>
        </ScrollView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

export default App;
