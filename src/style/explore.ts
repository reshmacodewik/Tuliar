import { StyleSheet } from 'react-native';
const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      padding: wp(4),
      marginTop: hp(2),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      marginBottom: hp(2),
    },
    backArrow: {
      fontSize: wp(6),
    },
    headerTitle: {
      fontSize: wp(4.8),
      fontFamily: 'Poppins-SemiBold',
    },
    searchIcon: {
      width: wp(5),
      height: wp(5),
      resizeMode: 'contain',
    },
    filterRow: {
      flexDirection: 'row',
      gap: 14,
      marginBottom: hp(2),
    },
    filterBtn: {
      borderWidth: 1,
      borderColor: '#E29547',
      paddingHorizontal: wp(8),
      paddingVertical: hp(0.7),
      borderRadius: wp(5),
      backgroundColor: '#fff',
    },
    filterText: {
      color: '#000',
      fontSize: wp(3.5),
    },
    card: {
      borderRadius: wp(3),
      padding: wp(4),
      marginBottom: hp(2),
 
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: wp(20),
      height: wp(25),
      borderRadius: wp(2),
      marginTop: wp(-2),
    },
    nameRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    tagRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: hp(-0.5),
    },
    name: {
      fontSize: wp(4.2),
      fontFamily: 'Poppins-Bold',
    },
    profession: {
      fontSize: wp(3.2),
      color: '#979797',
      fontFamily: 'Poppins-Medium',
    },
    tagContainer: {
      flexDirection: 'row',
      marginTop: hp(0.5),
    },
    tag: {
      backgroundColor: '#E2F5EC',
      paddingHorizontal: wp(2),
      paddingVertical: hp(0.4),
      borderRadius: wp(5),
      marginRight: wp(2),
    },
    tagText: {
      fontSize: wp(3),
    },
    typeBadge: {
      paddingHorizontal: wp(8),
      paddingVertical: hp(1.4),
      borderRadius: wp(5),
      marginBottom: wp(4),
      marginLeft: wp(2),
    },
    typeText: {
      fontSize: wp(3.2),
    },
    iconRow: {
      flexDirection: 'row',
      marginTop: hp(0),
      marginBottom: hp(1),
    },
    icon: {
      width: wp(7.5),
      height: wp(7.5),
      resizeMode: 'contain',
      marginRight: wp(1.2),
    },
    priceText: {
      color: '#7A7A7A',
      marginBottom: hp(1),
      textAlign: 'right',
      fontFamily: 'Poppins-Medium',
    },
    bottomBar: {
      backgroundColor: '#163C2F',
      paddingVertical: hp(1),
      borderRadius: wp(5),
      paddingLeft: hp(1.5),
      width: wp(88),
      marginLeft: hp(-0.8),
    },
    bottomBarText: {
      color: '#fff',
      fontSize: wp(3),
      fontFamily: 'Poppins-Medium',
    },
  });
export default styles;
