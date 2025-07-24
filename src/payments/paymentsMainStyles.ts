import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: wp(5),
      paddingTop: hp(4),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: hp(2),
    },
    header: {
      fontSize: wp(5),
      fontFamily: 'Poppins-Bold',
      color: '#222',
    },
    filterIcon: {
      width: wp(7),
      height: wp(7),
      resizeMode: 'contain',
    },
    subheader: {
      fontSize: wp(3.7),
      fontFamily: 'Montserrat-Medium',
      color: '#222',
      textAlign: 'center',
      marginBottom: hp(2.5),
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(6),
      width: '100%',
      alignItems: 'center',
      marginBottom: hp(3),
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
    },
    cardTitle: {
      fontSize: wp(5),
      fontFamily: 'Poppins-Bold',
      color: '#222',
      textAlign: 'center',
      marginBottom: hp(1),
    },
    cardSubtitle: {
      fontSize: wp(3.7),
      fontFamily: 'Montserrat-Regular',
      color: '#222',
      textAlign: 'center',
      marginBottom: hp(1),
    },
    balance: {
      fontSize: wp(5),
      fontFamily: 'Poppins-Bold',
      color: '#264734',
      textAlign: 'center',
      marginBottom: hp(2),
    },
    paymentLogosRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: hp(2),
    },
    paymentLogo: {
      width: wp(16),
      height: wp(8),
      resizeMode: 'contain',
      marginHorizontal: wp(1.5),
    },
    actionButton: {
      backgroundColor: '#264734',
      borderRadius: wp(7),
      justifyContent: 'center',
      alignItems: 'center',
      width: wp(50),
      height: hp(6),
      marginTop: hp(2),
    },
    actionButtonText: {
      color: '#FFF',
      fontSize: wp(4),
      fontFamily: 'Poppins-SemiBold',
    },
  });

export default styles; 