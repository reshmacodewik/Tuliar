import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      paddingHorizontal: wp(4),
      paddingTop: hp(3),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1),
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: hp(10),
    },
    backButton: {
      top: hp(0),
      width: wp(10),
      height: wp(10),
      marginLeft: wp(-2),
    },
    title: {
      fontSize: wp(5),
      fontFamily: 'Poppins-SemiBold',
      marginTop: hp(0),
      marginRight: hp(22),
      textAlign: 'center',
      
    },

    eventCard: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginBottom: hp(0),
    },
    eventImg: {
      width: wp(35),
      height: wp(39),
      borderRadius: wp(2),
      marginRight: wp(4),
    },
    eventContent: {
      flex: 1,
    },
    tagsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1),
      justifyContent: 'space-between',
    },
    fromTag: {
      backgroundColor: '#264734',
      paddingHorizontal: wp(2),
      paddingVertical: wp(0.5),
      borderRadius: wp(5),
      marginRight: wp(2),
    },
    typeTag: {
      paddingVertical: wp(0),
      borderRadius: wp(0),
    },
    tagText: {
      fontSize: wp(3),
      color: '#fff',
      fontFamily: 'Poppins-Bold',
    },
    eventTitle: {
      fontSize: wp(3.5),
      fontFamily: 'Poppins-SemiBold',
      marginBottom: hp(0.5),
    },
    eventDesc: {
      fontSize: wp(3.1),
      color: '#979797',
      fontFamily: 'Poppins-Medium',
    },
  });

export default styles;
