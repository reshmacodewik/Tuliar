import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      paddingHorizontal: wp(4),
      paddingTop: hp(3),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    backButton: {
      width: wp(10),
      height: wp(10),
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    title: {
      fontFamily: 'Poppins-Bold',
      fontSize: wp(5),
      color: '#000',
      marginLeft: wp(2),
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      overflow: 'hidden',
      elevation: 3,
      marginBottom: hp(2),
    },
    sessionImage: {
      width: '93%',
      height: hp(20),
      resizeMode: 'cover',
      margin: wp(3),
    },
    cardContent: {
      padding: wp(3),
    },
    sessionTitle: {
      fontFamily: 'Poppins-Bold',
      fontSize: wp(4),
      color: '#000',
      marginTop: hp(-2),
    },
    nextSessionText: {
      fontFamily: 'Poppins-Medium',
      fontSize: wp(3.2),
      color: '#A2A2A2',
      marginTop: hp(0),
    },
    sessionDetailsCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginBottom: hp(2),
    },
    sessionDetailsTitle: {
      fontFamily: 'Poppins-Bold',
      fontSize: wp(4),
      marginBottom: hp(0),
       marginTop: hp(2),
      color: '#000',
    },
    sessionDetailsText: {
      fontFamily: 'Poppins-Regular',
      fontSize: wp(3.2),
      color: '#333',
      marginBottom: hp(0),
    },
    boldLabel: {
      fontFamily: 'Poppins-SemiBold',
      color: '#000',
    },
    progressCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginBottom: hp(2),
    },
  });

export default styles;
