import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FEF5E6',
      alignItems:'center',
      justifyContent:'flex-start',
     
     
    },
    title: {
      fontSize: 32,
      color: '#000',
      fontFamily: 'Urbanist-SemiBold',
      marginTop: hp(10),
      textAlign: 'center',
   
    },
    subtitle: {
      fontSize: 18,
      color: '#000',
      fontFamily: 'Montserrat-SemiBold',
      textAlign: 'center',
      marginTop: hp(2),
      marginBottom: hp(2),
    },
    illustration: {
      width: '100%',
      height: hp(28),
      resizeMode: 'cover',
      marginVertical: hp(5),
    },
    button: {
      backgroundColor: '#264734',
      borderRadius: wp(7),
      justifyContent: 'center',
      alignItems: 'center',
      width: wp(70),
      height: hp(6),
      marginTop: hp(2),
    },
    buttonText: {
      color: '#FFF',
      fontSize: wp(4),
      fontFamily: 'Poppins-SemiBold',
    },
    logo: {
      width: wp(40),
      height: hp(7),
      resizeMode: 'contain',
      marginTop: hp(7),
    },
  });

export default styles; 