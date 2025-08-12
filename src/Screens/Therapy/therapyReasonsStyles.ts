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
      marginBottom: hp(1),
    },
    logo: {
      width: wp(40),
      height: hp(10),
      resizeMode: 'contain',
    },
    // Question Styles
    questionContainer: {
      alignItems: 'center',
      marginBottom: hp(4),
      paddingHorizontal: wp(4),
    },
    mainQuestion: {
      fontSize: isTablet ? wp(6) : 26,
      fontFamily: 'Urbanist-SemiBold',
      color: '#000',
      fontWeight: '700',
      textAlign: 'center',
      lineHeight: isTablet ? wp(7) : 32,
      marginHorizontal: wp(12),
    },
    // Content Container
    contentContainer: {
      flex: 1,
      paddingHorizontal: wp(4),
    },
    scrollContent: {
      paddingBottom: hp(4),
    },
    // Reasons Container
    reasonsContainer: {
      marginBottom: hp(4),
    

    },
    reasonCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: wp(2),
      padding: wp(2),
      marginBottom: hp(2),
      marginHorizontal: wp(6),
      
     
     
    },
    checkbox: {
      width: wp(5),
      height: wp(5),
      borderWidth: 2,
      borderColor: '#E0E0E0',
      borderRadius: wp(1),
      marginRight: wp(4),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0E0E0',
    },
    checkboxChecked: {
      backgroundColor: '#264734',
      borderColor: '#264734',
    },
    reasonText: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Regular',
      color: '#000',
      flex: 1,
    },
    // Other Input Styles
    otherContainer: {
      marginBottom: hp(4),
      marginHorizontal: wp(6),
    },
    otherLabel: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Medium',
      color: '#000',
      marginBottom: hp(1),
    },
    otherInput: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: wp(10),
      padding: wp(4),
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Regular',
      color: '#000',
      minHeight: hp(2),
      textAlignVertical: 'top',
    },
    // Commitment Styles
    commitmentContainer: {
      marginBottom: hp(4),
      marginLeft: wp(6),
      marginRight: wp(2.2),
    },
    commitmentRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: wp(3),
    },
    commitmentCheckbox: {
      width: wp(5),
      height: wp(5),
      borderWidth: 2,
      borderColor: '#E0E0E0',
      borderRadius: wp(1),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp(0.5),
    },
    commitmentCheckboxChecked: {
      backgroundColor: '#264734',
      borderColor: '#264734',
    },
    commitmentText: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Regular',
      color: '#000',
      flex: 1,
      lineHeight: isTablet ? wp(5.5) : 24,
    },
    // Button Styles
    buttonContainer: {
      paddingHorizontal: wp(2),
      paddingBottom: hp(4),
      paddingTop: hp(2),
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