import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  detailsContainer: {
    padding: 20,
    justifyContent: 'center'
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  },
  title: {
    marginBottom: 7,
    fontSize: 18
  }
})

export default styles;