import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#202020',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '300',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },
  calculatorContainer: {
    flex : 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  button: {
    height: 82,
    width: 80,
    backgroundColor: 'red',
    borderRadius: 80,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 6,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
  row :{
    flexDirection: 'row',
    jutifyContent: 'center',
    marginBotton: 20,
    paddingHorizontal: 1,
  }
});
