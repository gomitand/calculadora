import { Pressable, Text, View } from "react-native";
import { colors, styles } from "../config/theme/app-theme.tsx";
import { CaluclatorButton } from "../components/CaluclatorButton.tsx";
import {useCalculator} from "../hook/useCalculator.tsx";

export const CalculatorScreen = ()  =>{
  const {
    number,
    prevNumber,
    buildNumber,
    toggleSing,
    clean,
    deleOperation,
    divideOperation,
    multuplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
    formula,
  } = useCalculator();



  return(
    <View style={styles.calculatorContainer}>

      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>

        <Text adjustsFontSizeToFit
              numberOfLines={ 1 }
              style={styles.mainResult}>{formula}</Text>

        {
          (formula === prevNumber)
          ? <Text style={ styles.subResult }> </Text>
            : (
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={ styles.subResult }>
                { prevNumber }
              </Text>
            )
        }
      </View>

      <View style={styles.row}>
        <CaluclatorButton onPress={clean} blackText label="C" color={colors.lightGray}/>
        <CaluclatorButton onPress={toggleSing} blackText label="+/-" color={colors.lightGray}/>
        <CaluclatorButton onPress={deleOperation} blackText label="Del" color={colors.lightGray}/>
        <CaluclatorButton onPress={divideOperation} label="÷" color={colors.orange}/>
      </View>

      <View style={styles.row}>
        <CaluclatorButton onPress={()=>buildNumber('7')} label="7" color={colors.lightGray}/>
        <CaluclatorButton onPress={()=>buildNumber('8')} label="8" color={colors.lightGray}/>
        <CaluclatorButton onPress={()=>buildNumber('9')} label="9" color={colors.lightGray}/>
        <CaluclatorButton onPress={multuplyOperation} label="*" color={colors.orange}/>
      </View>

      <View style={styles.row}>
        <CaluclatorButton onPress={()=>buildNumber('4')} label="4" color={colors.lightGray}/>
        <CaluclatorButton onPress={()=>buildNumber('5')} label="5" color={colors.lightGray}/>
        <CaluclatorButton onPress={()=>buildNumber('6')} label="6" color={colors.lightGray}/>
        <CaluclatorButton onPress={subtractOperation} label="-" color={colors.orange}/>
      </View>

      <View style={styles.row}>
        <CaluclatorButton onPress={()=>buildNumber('1')} label="1" color={colors.lightGray}/>
        <CaluclatorButton onPress={()=>buildNumber('2')} label="2" color={colors.lightGray}/>
        <CaluclatorButton onPress={()=>buildNumber('3')} label="3" color={colors.lightGray}/>
        <CaluclatorButton onPress={addOperation} label="+" color={colors.orange}/>
      </View>

      <View style={styles.row}>
        <CaluclatorButton onPress={()=>buildNumber('0')} label="0" color={colors.lightGray} doubleSize />
        <CaluclatorButton onPress={()=>buildNumber('.')} label="." color={colors.lightGray}/>
        <CaluclatorButton onPress={calculateResult} label="=" color={colors.orange}/>
      </View>



    </View>
  );
};

