// import React from 'react';
// import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform } from 'react-native';

// export default function App() {
//   const handlePress = () => alert('dasd')
//   return (
//     <SafeAreaView style={styles.container}>
//       <Image 
//         blurRadius={1}
//         fadeDuration={1000}
//         resizeMode={'contain'}
//         source={{
//           width: 200,
//           height: 300,
//           uri: "https://picsum.photos/id/237/200/300"
//         }}
//       />
//       <Text numberOfLines={2} onPress={handlePress}>Hello world! Hello world! Hello world! Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!</Text>
      
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//   },
// });
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Card from './app/components/Card';


export default function App() {
  return (
    // <ViewImageScreen />
    // <WelcomeScreen />

    <ListingDetailsScreen />
  );
}
