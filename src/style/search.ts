import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

function wp(percentage: number): number {
  return (width * percentage) / 100;
}

function hp(percentage: number): number {
  return (width * percentage) / 100;
}

const styles = StyleSheet.create({
  bgimg: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    marginTop: wp(7),
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    color: '#000',
  },
  sectionTitle: {
    fontFamily:"Poppins-Medium"
  },
  recentSearchList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchTag: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  expertCard: {
    backgroundColor: '#fff',
    position: 'relative',
  },
  expertImage: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  expertInfo: {
    marginLeft: 90,
  },
  expertName: {
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  expertTitle: {
    color: '#979797',
    marginVertical: 4,
    fontFamily: 'Poppins-Medium',
  },
  tagRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  tag: {
    backgroundColor: '#EDEDED',
    marginRight: 8,
  },
  iconRow: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
  },
  icon: {
    width: 26,
    height: 26,
    marginLeft: wp(2),
  },
  priceText: {
    marginTop: 5,
    color: '#555',
    textAlign: 'right',
  },
  priceValue: {
    fontWeight: 'bold',
    color: '#000',
  },
  selectionBanner: {
    backgroundColor: '#234536',
    paddingLeft: hp(3),
    marginTop: 0,
  },
});
export default styles;
