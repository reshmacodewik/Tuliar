// src/style/DoctorProfileStyles.ts
import { StyleSheet } from 'react-native';

const styles = (wp: (val: number) => number, hp: (val: number) => number) =>
  StyleSheet.create({
    header: {
      zIndex: 10,
      paddingTop: hp(6),
      paddingBottom: hp(0),
      paddingHorizontal: wp(5),
    },
    backButton: {
      top: hp(0),
      left: wp(0),
      width: wp(12),
      height: wp(12),
    },
    profileImage: {
      width: wp(20),
      height: wp(20),
      borderRadius: wp(10),
      marginTop: hp(0),
    },
    name: {
      fontFamily: 'Poppins-Bold',
      fontSize: wp(5),
      marginTop: hp(1),
      color: '#222',
    },
    subtitle: {
      color: '#000',
      fontSize: wp(3.5),
      marginVertical: hp(0.5),
      textAlign: 'center',
      fontFamily: 'Poppins-Medium',
    },
    sessions: {
      fontSize: wp(3.5),
      marginVertical: hp(1),
      color: '#000',
      fontFamily: 'Poppins-SemiBold',
    },
    chipRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: wp(1.5),
      marginTop: hp(0.7),
      justifyContent: 'center',
    },
    chipColumn: {
     
      gap: wp(1.5),
      marginTop: hp(0.7),
      justifyContent: 'center',
    },
    chip: {
      backgroundColor: '#fff',
      borderRadius: wp(5),
      paddingHorizontal: wp(8),
      paddingVertical: hp(0.6),
      marginHorizontal: wp(1),
      borderWidth: 1,
      borderColor: '#ECA14C',
      marginTop: hp(0.5),
    },
    chipText: {
      fontSize: wp(2.8),
      color: '#333',
    },
    chipOutline: {
      borderWidth: 1,
      borderColor: '#FFA726',
      borderRadius: wp(5),
      paddingHorizontal: wp(5),
      paddingVertical: hp(0.5),
      marginRight: wp(2),
      marginTop: hp(0.5),
      backgroundColor: '#fff',
    },
    chipTextOutline: {
      color: '#000',
      fontSize: wp(2.7),
    },
    sectionTitle: {
      fontWeight: 'bold',
      marginBottom: hp(0.7),
      fontSize: wp(4.2),
      color: '#222',
    },
    bodyText: {
      color: '#888',
      marginBottom: hp(1.2),
      fontSize: wp(3.2),
      lineHeight: hp(2.5),
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginVertical: hp(1.2),
    },
    iconCircle: {
      width: wp(9),
      height: wp(9),
      borderRadius: wp(4.5),
      backgroundColor: '#FFA726',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: wp(3),
    },
    infoTitle: {
      fontWeight: 'bold',
      fontSize: wp(3.5),
      color: '#222',
    },
    infoContent: {
      color: '#979797',
      fontSize: wp(3),
      marginTop: hp(0.5),
      lineHeight: hp(2),
      marginHorizontal: wp(0),
      fontFamily: 'Poppins-Medium',
    },
    buttonContainer: {
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'transparent',
      alignItems: 'center',
      padding: wp(5),
      paddingBottom: hp(3),
    },
    button: {
      backgroundColor: '#264C3F',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: hp(7),
      borderRadius: wp(3),
    },
    buttonText: {
      color: '#fff',
      fontSize: wp(4.5),
      fontWeight: 'bold',
    },
  });

export default styles;
