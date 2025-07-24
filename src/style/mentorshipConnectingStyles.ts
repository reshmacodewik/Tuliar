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
      paddingHorizontal: wp(6),
      paddingTop: hp(10),

    },
    logo: {
      width: wp(38),
      height: hp(7),
      resizeMode: 'contain',
      marginTop: hp(2),
      marginBottom: hp(2),
    },
    title: {
      fontSize: 32,
      fontFamily: 'Urbanist-SemiBold',
      color: '#000',
      textAlign: 'center',
      marginBottom: hp(2.5),
      marginTop: hp(2),
    },
    subtitle: {
      fontSize: 18,
      fontFamily: 'Montserrat-SemiBold',
      color: '#000',
      textAlign: 'center',
      marginBottom: hp(2),
      paddingHorizontal: wp(10),
     
    },
    image: {
      width: wp(30),
      height: wp(30),
      resizeMode: 'contain',
      marginVertical: hp(2),
      marginTop: hp(-12),
    },
    timerDots: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp(2),
      marginBottom: hp(2),
    },
    dot: {
      width: wp(6),
      height: hp(0.5),
      borderRadius: wp(2),
      backgroundColor: '#B3D6E6',
      marginHorizontal: wp(1),
    },
    dotActive: {
      backgroundColor: '#264734',
      width: wp(15),
    },
    continueButton: {
      backgroundColor: '#264734',
      borderRadius: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: hp(6.5),
      marginBottom: hp(4),
    },
    continueButtonText: {
      color: '#FFF',
      fontSize: wp(4.5),
      fontFamily: 'Poppins-Bold',
    },
  });

export default styles; 