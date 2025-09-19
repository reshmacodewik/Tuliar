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
      paddingHorizontal: wp(0),
      paddingTop: hp(2),
      paddingBottom: hp(1),
    },
    backButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
      marginLeft: wp(-2),
    },
    headerTitle: {
      fontSize: isTablet ? wp(5) : 20,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
      flex: 1,
      
    },
    headerSpacer: {
      width: wp(10),
    },
    // Content Container
    contentContainer: {
      flex: 1,
      paddingHorizontal: wp(4),
    },
    scrollContent: {
      paddingBottom: hp(15),
    },
    // Main Card
    mainCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(5),
      marginTop: hp(2),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    // Question Section
    questionSection: {
      marginBottom: hp(4),
    },
    questionText: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Montserrat-SemiBold',
      color: '#000',
      fontWeight: '600',
      marginBottom: hp(2),
      lineHeight: isTablet ? wp(6) : 26,
    },
    // Options Container
    optionsContainer: {
      gap: hp(1.5),
    },
    optionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
    },
    checkbox: {
      width: wp(5),
      height: wp(5),
      borderWidth: 2,
      borderColor: '#275258',
      borderRadius: wp(1),
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxChecked: {
      backgroundColor: '#264734',
      borderColor: '#264734',
    },
    optionText: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-SemiBold',
      color: '#000',
      flex: 1,
    },
    // Button Styles
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: wp(4),
      paddingVertical: hp(3),
      backgroundColor: 'transparent',
    },
    nextButton: {
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
    nextButtonText: {
      color: '#fff',
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
    },
  });
};

export default styles; 