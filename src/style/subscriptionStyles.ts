import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      marginBottom: hp(1),
    },
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: wp(5),
      paddingTop: hp(4),
    },
    logo: {
      width: wp(34),
      height: hp(7),
      resizeMode: 'contain',
      marginBottom: hp(2),
    },
    mainheader:{
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
      color: '#000',
      marginTop: hp(1),
      
    },
    header: {
      fontSize: 26,
      fontFamily: 'Urbanist-SemiBold',
      color: '#000',
      textAlign: 'center',
      marginBottom: hp(1),
    },
    subheader: {
      fontSize: 14,
      fontFamily: 'Montserrat-Medium',
      color: '#000',
      marginBottom: hp(3),
      textAlign: 'left',
    },
    cardContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: hp(2.5),
    },
    card: {
      width: '70%',
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(5),
      paddingVertical: hp(4),
      marginBottom: 0,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
      alignItems: 'center',
    },
    cardAlt: {
      backgroundColor: '#FCE9C7',
    },
    cardTitle: {
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
      color: '#000',
      textAlign: 'center',
      marginBottom: hp(0),
    },
    cardPrice: {
      fontSize: 14,
      fontFamily: 'Montserrat-Medium',
      color: '#FC8C0C',
      textAlign: 'center',
      marginBottom: hp(1.5),
    },
    cardFeature: {
      fontSize: 14,
      fontFamily: 'Montserrat-Medium',
      color: '#000',
      marginBottom: hp(0.5),
      textAlign: 'left',
      width: '100%',
      lineHeight: 24,
    },
    subscribeButton: {
      backgroundColor: '#264734',
      borderRadius: wp(7),
      justifyContent: 'center',
      alignItems: 'center',
      width: wp(42),
      height: hp(5),
      marginTop: hp(1),
      alignSelf: 'center',
    },
    subscribeButtonText: {
      color: '#FFF',
      fontSize: wp(4),
      fontFamily: 'Poppins-SemiBold',
    },
  });

export default styles; 