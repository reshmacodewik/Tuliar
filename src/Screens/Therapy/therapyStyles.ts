import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) => {
  const isTablet = wp(100) > 768;

  return StyleSheet.create({
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    mainContainer: {
      flex: 1,
      position: 'relative',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(4),
      paddingTop: hp(2),
      paddingBottom: hp(1),
    },
    backButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
    },
    // Logo Styles
    logoContainer: {
      alignItems: 'center',
      marginTop: hp(0),
      marginBottom: hp(0),
      flexDirection: 'row',
      justifyContent: 'center',
    },

    logo: {
      width: wp(40),
      height: hp(10),
      resizeMode: 'contain',
    },
    // Confirmation Message Styles
    confirmationContainer: {
      alignItems: 'center',
      marginBottom: hp(6),
      paddingHorizontal: wp(4),
    },
    confirmationTitle: {
      fontSize: isTablet ? wp(6) : 26,
      fontFamily: 'Urbanist-SemiBold',
      color: '#000',
      fontWeight: '700',
      marginBottom: hp(2),
      textAlign: 'center',
    },
    confirmationSubtitle: {
      fontSize: isTablet ? wp(4.5) : 14,
      fontFamily: 'Montserrat-Medium',
      color: '#000',
      textAlign: 'center',
      marginHorizontal: wp(18),
      lineHeight: isTablet ? wp(6) : 20,
    },
    confirmationSubtitletext: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Montserrat-Medium',
      color: '#000',
      textAlign: 'center',
      marginHorizontal: wp(4),
      marginTop: hp(-2),
      lineHeight: isTablet ? wp(6) : 26,
    },
    // Profile Picture Styles
    profileContainer: {

      marginBottom: hp(8),
      flex: 1,
      justifyContent: 'center',
      marginTop: hp(-10),
    },
    profileImageContainer: {
      alignItems: 'center',
      marginBottom: hp(8),
      justifyContent: 'center',
     
    },
    profileImage: {
      alignItems: 'center',
      width: isTablet ? wp(30) : wp(40),
      height: isTablet ? wp(30) : wp(40),
      borderRadius: isTablet ? wp(20) : wp(30),

      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
    // Button Styles
    buttonContainer: {
      paddingHorizontal: wp(4),
      paddingBottom: hp(2),
    },
    startChatButton: {
      backgroundColor: '#264734',
      paddingVertical: hp(1.8),
      borderRadius: wp(10),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      marginTop: hp(5),
    },
    startChatButtonText: {
      color: '#fff',
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
    },
  });
};

export default styles;
