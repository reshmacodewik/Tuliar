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
      marginLeft:wp(-5)
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
    // Title and Question Styles
    titleContainer: {
      alignItems: 'center',
      marginBottom: hp(4),
      paddingHorizontal: wp(4),
    },
    mainTitle: {
      fontSize: isTablet ? wp(6) : 26,
      fontFamily: 'Urbanist-SemiBold',
      color: '#000',
      fontWeight: '700',
      marginBottom: hp(2),
      textAlign: 'center',
    },
    questionText: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Montserrat-Medium',
      color: '#000',
      textAlign: 'center',
      lineHeight: isTablet ? wp(6) : 26,
      marginHorizontal: wp(12),
    },
    // Options Container Styles
    optionsContainer: {
      flex: 1,
      paddingHorizontal: wp(4),
    },
    optionsContent: {
      paddingBottom: hp(4),
    },
    // Therapy Card Styles
    therapyCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(5),
      marginBottom: hp(3),
      borderWidth: 1,
      borderColor: '#E0E0E0',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      position: 'relative',
    },
    therapyCardSelected: {
      borderColor: '#264734',
      borderWidth: 2,
      backgroundColor: '#F8FFF8',
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: wp(4),
    },
    iconContainer: {
      width: wp(12),
      height: wp(12),
      
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp(0.5),
    },
    icon: {
      width: wp(12),
      height: wp(12),
      resizeMode: 'contain',
    },
    cardContent: {
      flex: 1,
    },
    cardTitle: {
      fontSize: isTablet ? wp(5) : 20,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
      marginBottom: hp(1),
    },
    cardDescription: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Regular',
      color: '#666',
      lineHeight: isTablet ? wp(5.5) : 24,
      marginBottom: hp(2),
    },
    cardPrice: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Medium',
      color: '#264734',
      fontWeight: '600',
    },
    selectedIndicator: {
      position: 'absolute',
      top: wp(4),
      right: wp(4),
    },
    // Button Styles
    buttonContainer: {
      paddingHorizontal: wp(1),
      paddingBottom: hp(4),
      paddingTop: hp(3),
    },
    continueButton: {
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
    continueButtonDisabled: {
      backgroundColor: '#ccc',
    },
    continueButtonText: {
      color: '#fff',
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
    },
  });
};

export default styles; 