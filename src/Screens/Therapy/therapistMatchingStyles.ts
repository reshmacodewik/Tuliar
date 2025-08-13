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
    // Modal Styles
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      height: hp(100),
   
    },
    modalContainer: {
      backgroundColor: '#fff',
      borderRadius: wp(4),
      width: wp(100),
      maxHeight: hp(80),
      paddingHorizontal: wp(4),
      paddingVertical: hp(3),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 8,
      height: '100%',
      
   
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(3),
    },
    modalLogoContainer: {
      alignItems: 'center',
      flex: 1,
    },
    modalLogo: {
      width: wp(30),
      height: hp(6),
      resizeMode: 'contain',
    },
    closeButton: {
      width: wp(8),
      height: wp(8),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(4),
    },
    modalTitleContainer: {
      alignItems: 'center',
      marginBottom: hp(4),
      paddingHorizontal: wp(2),
    },
    modalTitle: {
      fontSize: isTablet ? wp(4.5) : 24,
      fontFamily: 'Urbanist-Bold',
      color: '#000',
      fontWeight: '700',
      textAlign: 'center',
      lineHeight: isTablet ? wp(6) : 32,
    },
    modalScrollView: {
      flex: 1,
    },
    // Step Card Styles
    stepCard: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: '#fff',
      borderRadius: wp(3),
      borderWidth: 1,
      borderColor: '#e5e7eb',
      padding: wp(4),
      marginBottom: hp(2),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    stepIconContainer: {
      marginRight: wp(3),
      marginTop: wp(1),
    },
    stepIcon: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(6),
      backgroundColor: '#dcfce7',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    stepIconCheck: {
      position: 'absolute',
      top: -wp(1),
      right: -wp(1),
      backgroundColor: '#22c55e',
      borderRadius: wp(1.25),
      width: wp(2.5),
      height: wp(2.5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepIconBuilding: {
      position: 'absolute',
      bottom: -wp(1),
      right: -wp(1),
      backgroundColor: '#3b82f6',
      borderRadius: wp(1.5),
      width: wp(3),
      height: wp(3),
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepIconStars: {
      position: 'absolute',
      top: -wp(2),
      right: -wp(2),
      flexDirection: 'row',
      gap: wp(0.5),
    },
    stepTextContainer: {
      flex: 1,
    },
    stepTitle: {
      fontSize: isTablet ? wp(3.5) : 16,
      fontFamily: 'Urbanist-SemiBold',
      color: '#000',
      fontWeight: '600',
      marginBottom: hp(0.5),
      lineHeight: isTablet ? wp(4.5) : 22,
    },
    stepDescription: {
      fontSize: isTablet ? wp(3) : 14,
      fontFamily: 'Montserrat-Regular',
      color: '#6b7280',
      lineHeight: isTablet ? wp(4) : 20,
    },
  });
};

export default styles; 