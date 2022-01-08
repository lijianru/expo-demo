import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, Box } from 'native-base';
import { ScrollView } from 'react-native';

function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider style={{ marginTop: 50, marginBottom: 50 }}>
        <ScrollView>
          <Box>Hello world</Box>
        </ScrollView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

export default App;
