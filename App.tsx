import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BottomSheet } from './src/component/bottomsheet/BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";


const App = () => {
  const defaultBottomSheetReference = React.useRef<BottomSheetModal>(null);

  const handleOpenPress = () => {
    defaultBottomSheetReference.current?.present();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>Hello</Text>

          <Button title="Open Bottom Sheet" onPress={handleOpenPress} />
          <BottomSheet ref={defaultBottomSheetReference}>
            <Text>Selection BottomSheet Content</Text>
          </BottomSheet>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});

export default App;