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
      
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(1),
      paddingTop: hp(0),
      paddingBottom: hp(1),
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
    stepsSection: {
      marginTop: hp(4),
      alignItems: 'center',
    },
    stepContainer: {
      alignItems: 'center',
      marginBottom: hp(2),
    },
    stepButton: {
      backgroundColor: '#ECA14C',
      paddingVertical: hp(2),
      paddingHorizontal: wp(8),
      borderRadius: wp(10),
      alignItems: 'center',
      shadowColor: '#FF8D4D33',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      width: isTablet ? wp(60) : wp(80),
      marginTop: hp(-1.5),
    },
    stepButtonText: {
      color: '#fff',
      fontSize: isTablet ? wp(4) : 18,
      fontFamily: 'Poppins-Bold',
      fontWeight: '700',
      textAlign: 'center',
    },
    stepSeparator: {
      marginVertical: hp(1),
      alignItems: 'center',
    },
    howItWorksSection: {
      marginTop: hp(4),
      paddingHorizontal: wp(2),
    },
    howItWorksCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(5),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    howItWorksTitle: {
      fontSize: isTablet ? wp(5) : 20,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      marginBottom: hp(2),
      fontWeight: '700',
    },
    howItWorksText: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Regular',
      color: '#666',
      lineHeight: isTablet ? wp(5) : 24,
    },
    bottomActionContainer: {
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
      marginHorizontal: wp(2),
      marginBottom: hp(1.5),
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