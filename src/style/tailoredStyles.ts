import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: wp(7),
    },
    icon: {
      width: wp(35),
      height: wp(35),
      resizeMode: 'contain',
      marginTop: hp(11),
      marginBottom: hp(4),
     

    },
    title: {
      fontSize: 32,
      color: '#000',
      fontFamily: 'Urbanist-SemiBold',
      textAlign: 'center',
      marginBottom: hp(3),
    },
    bulletList: {
      width: '100%',
      marginBottom: hp(3),
    },
    bulletItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: hp(2),
    },
    bulletDot: {
      fontSize: wp(6),
      color: '#000',
      marginRight: wp(2),
      marginTop: hp(0.2),
    },
    bulletText: {
      fontSize: 14,
      color: '#222',
      fontFamily: 'Montserrat-Light',
      flex: 1,
      lineHeight: hp(2.7),
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
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
  });

export default styles; 