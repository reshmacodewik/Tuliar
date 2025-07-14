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
    },
    backButton: {
      top: hp(3),
      left: wp(-2),
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: hp(10),
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(5),
      width: '100%',
      marginTop: hp(-25),
    },
    title: {
      fontSize: wp(5),
      fontFamily: 'Poppins-Bold',
      marginTop: hp(6),
      marginRight: hp(10),
      textAlign: 'center',
    },
    amount: {
      fontSize: wp(4.8),
      fontFamily: 'Poppins-Bold',
      textAlign: 'center',
    },
    subText: {
      textAlign: 'center',
      fontSize: wp(2.9),
      color: '#000',
      marginBottom: hp(0),
      fontFamily: 'Poppins-Regular',
    },
    divider: {
      height: 1,
      backgroundColor: '#ddd',
      marginVertical: hp(3),
    },
    payWith: {
      fontFamily: 'Poppins-Bold',
      fontSize: wp(4),
      color: '#000',
    },
    howToPay: {
      fontSize: wp(3.5),
      marginBottom: hp(-2),
      color: '#000',
      fontFamily: 'Poppins-SemiBold',
      marginLeft: hp(2),
    },
    dividerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: hp(2),
    },

    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: '#C4C4C4',
      marginHorizontal: wp(4),
    },

    radioCircle: {
      width: wp(5),
      height: wp(5),
      borderRadius: wp(2.5),
      borderWidth: 2,
      borderColor: '#F4A825', // Orange color
      marginRight: wp(2),
    },

    radioRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(1),
      marginLeft: hp(1),
    },
    radioLabel: {
      fontFamily: 'Poppins-Regular',
      fontSize: wp(3.8),
      color: '#000',
    },

    cardInfoLabel: {
      fontSize: wp(3.8),
      fontFamily: 'Poppins-Bold',
      marginBottom: hp(1.5),
      marginLeft: hp(2),
        marginTop: hp(1.2),
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp(10),
      paddingHorizontal: wp(4),
      paddingVertical: hp(1.5),
      marginBottom: hp(1.5),
      fontSize: wp(3.5),
      backgroundColor: '#fff',
        marginLeft: hp(2)
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    halfInput: {
      width: '40%',
    },
    payButton: {
      backgroundColor: '#264734',
      paddingVertical: hp(1.8),
      borderRadius: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: wp(5),
      marginBottom: hp(4),
    },
    payButtonText: {
      color: '#fff',
      fontSize: wp(4),
      fontFamily: 'Poppins-Bold',
    },
  });

export default styles;
