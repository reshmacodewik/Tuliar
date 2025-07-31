import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: hp(10),
      paddingHorizontal: wp(5),
      position: 'relative',
    },
    backgroundImage: {
      position: 'absolute',
     
      width: '100%',
      height: '100%',
   
    },
    progressContainer: {
      alignItems: 'center',
      marginBottom: hp(4),
    },
    progressBar: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(2),
    },
    progressDot: {
      width: wp(12),
      height: hp(0.4),
      borderRadius: hp(0.2),
    },
    progressDotActive: {
      backgroundColor: '#60A5FA',
    },
    progressDotCurrent: {
      backgroundColor: '#0EA5E9',
    },
    title: {
      fontSize: wp(8),
      color: '#1F2937',
      fontFamily: 'Urbanist-Bold',
      textAlign: 'center',
      marginBottom: hp(2),
      lineHeight: wp(9),
    },
    description: {
      fontSize: 14,
      color: '#6B7280',
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
      marginBottom: hp(1.5),
      lineHeight: wp(6),
      paddingHorizontal: wp(3),
    },
    illustrationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      marginBottom: hp(8),
      paddingHorizontal: wp(3),
    },
    coachSection: {
      flex: 1,
      alignItems: 'center',
    },
    coachIllustration: {
      position: 'relative',
      marginBottom: hp(2),
    },
    coachImage: {
      width: wp(35),
      height: hp(25),
      resizeMode: 'contain',
    },
   
    mentorSection: {
      flex: 1,
      alignItems: 'center',
    },
    mentorIllustration: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: hp(-4),
      width: '100%',
    },
    mentorImage: {
      width: wp(90),
      height: hp(40),
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    sectionLabel: {
      fontSize: 32,
      color: '#1F2937',
      fontFamily: 'Urbanist-SemiBold',
      textAlign: 'center',
    },
    continueButton: {
      backgroundColor: '#264734',
      borderRadius: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      width: wp(60),
      height: hp(7),
      alignSelf: 'center',
      marginBottom: hp(4),
    },
    continueButtonText: {
      color: '#FFFFFF',
      fontSize: wp(4.5),
      fontFamily: 'Poppins-SemiBold',
    },
  });

export default styles; 