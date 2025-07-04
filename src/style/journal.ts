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
    gap: wp(2),
  },
  backIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: wp(4.5),
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: wp(4.2),
  },
  entryCard: {
    backgroundColor: '#fff',
    borderRadius: wp(2),
    padding: wp(3),
  },
  textInput: {
    textAlignVertical: 'top',
    fontSize: wp(4),
    padding: wp(3),
  },
  addButton: {
    backgroundColor: '#264734',
    alignSelf: 'flex-end',
    borderRadius: wp(2),
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
  },
  addButtonText: {
    color: '#fff',
    fontSize: wp(4),
  },
  activityCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: wp(2),
    padding: wp(3),
  },
  iconWrapper: {
    marginRight: wp(3),
  },
  activityTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: wp(4.5),
  },
  activitySubtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: wp(4),
  },
  activityDescription: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3.8),
  },
  activityTime: {
    color: '#949494',
    fontFamily: 'Poppins-Medium',
    fontSize: wp(3.5),
  },
});

export default styles;
