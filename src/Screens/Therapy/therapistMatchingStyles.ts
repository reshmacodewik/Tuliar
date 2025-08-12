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
      paddingTop: hp(5),
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
      marginTop: hp(2),
      marginBottom: hp(0),
    },
    logo: {
      width: wp(40),
      height: hp(10),
      resizeMode: 'contain',
    },
    // Heading Styles
    headingContainer: {
      alignItems: 'center',
      marginBottom: hp(6),
      paddingHorizontal: wp(4),
    },
    mainHeading: {
      fontSize: isTablet ? wp(5.5) : 32,
      fontFamily: 'Urbanist-SemiBold',
      color: '#000',
      fontWeight: '700',
      textAlign: 'center',
      lineHeight: isTablet ? wp(7) : 40,
     
    },
    // Illustration Styles
    illustrationContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: hp(6),
      position: 'relative',
      height: hp(25),
    },
    centerPlant: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      width: wp(20),
      height: wp(20),
      borderRadius: wp(10),
      backgroundColor: '#f0f9ff',
    },
    plant: {
      width: wp(90),
      height: wp(60),
      resizeMode: 'contain',
    },
    personTop: {
      position: 'absolute',
      top: hp(2),
      alignItems: 'center',
      justifyContent: 'center',
      width: wp(15),
      height: wp(15),
      borderRadius: wp(7.5),
      backgroundColor: '#fef3c7',
    },
    personRight: {
      position: 'absolute',
      right: wp(8),
      top: hp(8),
      alignItems: 'center',
      justifyContent: 'center',
      width: wp(15),
      height: wp(15),
      borderRadius: wp(7.5),
      backgroundColor: '#fef3c7',
    },
    personBottom: {
      position: 'absolute',
      bottom: hp(2),
      alignItems: 'center',
      justifyContent: 'center',
      width: wp(15),
      height: wp(15),
      borderRadius: wp(7.5),
      backgroundColor: '#fef3c7',
    },
    personLeft: {
      position: 'absolute',
      left: wp(8),
      top: hp(8),
      alignItems: 'center',
      justifyContent: 'center',
      width: wp(15),
      height: wp(15),
      borderRadius: wp(7.5),
      backgroundColor: '#fef3c7',
    },
    // Description Styles
    descriptionContainer: {
      alignItems: 'center',
      marginBottom: hp(6),
      paddingHorizontal: wp(4),
    },
    descriptionText: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Montserrat-SemiBold',
      color: '#000',
      textAlign: 'center',
      lineHeight: isTablet ? wp(6) : 26,
    },
    // Button Styles
    buttonContainer: {
      paddingHorizontal: wp(4),
      paddingBottom: hp(4),
    },
    learnMoreButton: {
      backgroundColor: '#264734',
      paddingVertical: hp(1.8),
      borderRadius: wp(10),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    learnMoreButtonText: {
      color: '#fff',
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
    },
  });
};

export default styles; 