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
      paddingHorizontal: wp(1),
      paddingTop: hp(0),
      paddingBottom: hp(1),
      marginLeft:wp(-2)
    },
    backButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
    },
    headerTitle: {
      fontSize: isTablet ? wp(5) : 20,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
    },
    headerSpacer: {
      width: wp(10),
    },
    container: {
      flex: 1,
      paddingHorizontal: wp(4),
    },
    scrollContent: {
      paddingBottom: hp(15),
    },
    // 3D Illustration Styles
    illustrationContainer: {
      alignItems: 'center',
      marginTop: hp(0),
      marginBottom: hp(1),
    },
    illustration: {
      width: wp(50),
      height: hp(20),
      resizeMode: 'contain',
    },
  
 
    stepsContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: wp(1),
    },
    stepBlock1: {
      width: wp(15),
      height: hp(3),
      backgroundColor: '#87CEEB',
      borderRadius: wp(1),
    },
    stepBlock2: {
      width: wp(15),
      height: hp(4),
      backgroundColor: '#4682B4',
      borderRadius: wp(1),
    },
    stepBlock3: {
      width: wp(15),
      height: hp(5),
      backgroundColor: '#6495ED',
      borderRadius: wp(1),
    },
    // Goal Display Styles
    goalDisplay: {
      alignItems: 'center',
      marginBottom: hp(10),
    },
    goalText: {
      fontSize: isTablet ? wp(5) : 22,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
    },
    // Step Input Card Styles
    stepInputCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(5),
      marginBottom: hp(3),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    stepQuestion: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Medium',
      color: '#000',
      marginBottom: hp(3),
      lineHeight: isTablet ? wp(6) : 26,
    },
    stepInput: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: wp(2),
      padding: wp(4),
      minHeight: hp(15),
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Regular',
      color: '#000',
      backgroundColor: '#fff',
      marginBottom: hp(3),
    },
    // Checkbox Styles
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: wp(5),
      height: wp(5),
      borderWidth: 2,
      borderColor: '#264734',
      borderRadius: wp(1),
      marginRight: wp(3),
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxChecked: {
      backgroundColor: '#264734',
    },
    checkboxLabel: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Regular',
      color: '#000',
    },
    // Add Another Step Styles
    addAnotherStep: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(3),
      paddingHorizontal: wp(2),
    },
    addAnotherStepText: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Medium',
      color: '#264734',
      marginLeft: wp(2),
    },
    // Existing Steps Styles
    existingStepsContainer: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(5),
      marginBottom: hp(3),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    existingStepsTitle: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      marginBottom: hp(2),
      fontWeight: '700',
    },
    existingStepItem: {
      marginBottom: hp(1),
    },
    existingStepText: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Regular',
      color: '#000',
      lineHeight: isTablet ? wp(5.5) : 24,
    },
    // Bottom Action Styles
    bottomActionContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
      backgroundColor: 'transparent',
    },
    saveButton: {
      backgroundColor: '#264734',
      paddingVertical: hp(1.8),
      borderRadius: wp(10),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      marginHorizontal: wp(0),
      marginBottom: hp(2),
    },
    saveButtonText: {
      color: '#fff',
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
    },
  });
};

export default styles; 