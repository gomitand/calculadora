import {StatusBar, Text, View} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {CalculatorScreen} from './screens/CalculatorScreen.tsx';
import {styles} from './config/theme/app-theme.tsx';

function App() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      {/*<Text>Calculadora</Text>*/}
      <CalculatorScreen />
    </View>
  );
}

export default App;
