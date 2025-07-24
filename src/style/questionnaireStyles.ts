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
      alignItems: 'flex-start',
      paddingHorizontal: wp(5),
      paddingTop: hp(6),
    },
    innercontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1),
    },
    header: {
      fontSize: 18,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      marginBottom: hp(-1),
      marginTop: hp(0),
    },
    subheader: {
      fontSize: 14,
      fontFamily: 'Montserrat-Light',
      color: '#000',
      marginBottom: hp(2),
      width: '100%',
      paddingHorizontal: wp(10),
      marginTop: hp(-0.9),
      lineHeight: 24,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      paddingBottom: hp(0),
      width: '100%',
      marginTop: hp(2),
      marginBottom: hp(2),
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
    },
    question: {
      fontSize: 18,
      fontFamily: 'Montserrat-SemiBold',
      color: '#000',
      marginBottom: hp(1),
    },
    optionsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: hp(0),
    },
    optionBox: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#264734',
      borderRadius: wp(2),
      paddingVertical: hp(1),
      paddingHorizontal: wp(3),
      marginRight: wp(4),
      marginBottom: hp(0),
      minWidth: wp(32),
      backgroundColor: '#fff',
    },
    optionBoxSelected: {
      borderColor: '#264734',
    },
    optionLabel: {
      fontSize: 12,
      fontFamily: 'Poppins-SemiBold',
      color: '#000',
    },
    optionCheck: {
      width: wp(5),
      height: wp(5),
      borderRadius: wp(1),
      borderWidth: 1.5,
      borderColor: '#264734',
      marginRight: wp(2),
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionCheckSelected: {
      borderColor: '#264734',
    },
    optionCheckInner: {
      width: wp(2.5),
      height: wp(2.5),
      borderRadius: wp(0.7),
      backgroundColor: '#264734',
    },
    button: {
      backgroundColor: '#264734',
      borderRadius: wp(7),
      justifyContent: 'center',
      alignItems: 'center',
      width: wp(80),
      height: hp(6),
      marginTop: hp(4),
    },
    buttonText: {
      color: '#FFF',
      fontSize: wp(4),
      fontFamily: 'Poppins-Bold',
    },
    buttonContainer: {
      marginBottom: hp(5),
      width: '100%',
      alignItems: 'center',
    },
  });

export default styles;
