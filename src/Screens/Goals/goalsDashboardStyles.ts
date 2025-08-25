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
      paddingTop: hp(1),
      paddingBottom: hp(1),
      marginLeft:-10
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
    // Goal Card Styles
    goalCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(5),
      marginTop: hp(2),
      marginBottom: hp(4),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    goalTitle: {
      fontSize: isTablet ? wp(5.5) : 22,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
      marginBottom: hp(4),
    },
    // Progress Section Styles
    progressSection: {
      marginBottom: hp(4),
      backgroundColor: '#E0E0E0',
      padding: wp(5),
      borderRadius: wp(3),
      borderWidth:1,
      borderColor: '#F5F5F5',
      marginTop: hp(-2),
    },
    progressQuestion: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Medium',
      color: '#000',
      marginBottom: hp(2),
      lineHeight: isTablet ? wp(6) : 26,
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
    },
    progressBarContainer: {
      flex: 1,
    },
    progressBarTrack: {
      height: hp(1.5),
      backgroundColor: '#fff',
      borderRadius: wp(1),
      overflow: 'hidden',
    },
    progressBarFill: {
      height: '100%',
      backgroundColor: '#FFD700',
      borderRadius: wp(1),
    },
    progressRating: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(1),
    },
    progressRatingText: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
    },
    progressEmoji: {
      fontSize: isTablet ? wp(5) : 20,
    },
    // Steps Section Styles
    stepsSection: {
      marginTop: hp(2),
    },
    stepsTitle: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
      marginBottom: hp(3),
    },
    stepsList: {
      gap: hp(2),
    },
    stepItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
    },
    stepCheckbox: {
      width: wp(5),
      height: wp(5),
      borderWidth: 2,
      borderColor: '#264734',
      borderRadius: wp(2.5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepCheckboxChecked: {
      backgroundColor: '#264734',
    },
    stepText: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Regular',
      color: '#000',
      flex: 1,
    },
    stepTextCompleted: {
      textDecorationLine: 'line-through',
      color: '#666',
    },
    // Action Buttons Styles
    actionButtonsContainer: {
      gap: hp(2),
      marginBottom: hp(4),
      marginTop: hp(2),
    },
    editGoalsButton: {
      backgroundColor: '#00000000', 
      borderWidth: 2,
      borderColor: '#264734',
      paddingVertical: hp(1.8),
      borderRadius: wp(10),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    editGoalsButtonText: {
      color: '#264734',
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
    },
    addNewGoalButton: {
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
    addNewGoalButtonText: {
      color: '#fff',
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
    },
  });
};

export default styles; 