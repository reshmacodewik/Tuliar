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
      marginLeft: wp(-2),
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
      fontWeight: '700',
      marginBottom: hp(2),
      lineHeight: isTablet ? wp(6) : 26,
    },
    // Options Container
    optionsContainer: {
      gap: hp(1.5),
    },
    ratingNumbers: {
      alignItems: 'center',
      marginTop: hp(2),
    },
    ratingText: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Regular',
      color: '#666',
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
      flex: 1,
    },
    // Slider Styles
    sliderContainer: {
      marginTop: hp(2),
    },
    slider: {
      width: '100%',
      height: hp(2),
    },
    sliderThumb: {
      backgroundColor: '#264734',
      width: wp(6),
      height: wp(6),
      borderRadius: wp(3),
    },
    sliderLabels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(1),
    },
    sliderLabel: {
      fontSize: isTablet ? wp(3.5) : 14,
      fontFamily: 'Poppins-Regular',
      color: '#666',
    },
    // Rating Styles
    ratingContainer: {
      marginTop: hp(2),
    },
    ratingLabel: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Medium',
      color: '#000',
      marginBottom: hp(1),
    },
    ratingButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: wp(2),
    },
    ratingButton: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
      borderWidth: 2,
      borderColor: '#275258',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    ratingButtonSelected: {
      backgroundColor: '#264734',
      borderColor: '#264734',
    },
    ratingButtonText: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Bold',
      color: '#275258',
      fontWeight: '700',
    },
    ratingButtonTextSelected: {
      color: '#fff',
    },
    // Rating Numbers
   
    // Diagnosis Input
    diagnosisInput: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: wp(2),
      padding: wp(4),
      marginTop: hp(2),
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Regular',
      color: '#000',
      minHeight: hp(8),
      textAlignVertical: 'top',
    },
    // Button Styles
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: wp(2),
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