import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function wp(percentage: number): number {
  return (width * percentage) / 100;
}
function hp(percentage: number): number {
  return (height * percentage) / 100;
}

const styles = StyleSheet.create({
  bgimg: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    margin: wp(5),
    marginTop: wp(9),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    resizeMode: 'contain',
  },
  headerTitle: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
  entryCard: {
    backgroundColor: '#fff',
  },
  textInput: {
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#264734',
    alignSelf: 'flex-end',
  },
  addButtonText: {
    color: '#fff',
  },
  activityCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconWrapper: {},
  activityTitle: {
    fontFamily: 'Poppins-Bold',
  },
  activitySubtitle: {
    fontFamily: 'Poppins-Medium',
  },
  activityDescription: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  activityTime: {
    color: '#949494',
    fontFamily: 'Poppins-Medium',
  },
});
export default styles;
