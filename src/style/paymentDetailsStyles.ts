import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      paddingHorizontal: wp(5),
      paddingTop: hp(4),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(3),
    },
    backButton: {
      marginRight: wp(3),
    },
    headerTitle: {
      fontSize: wp(5),
      fontFamily: 'Poppins-Bold',
      color: '#222',
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFE6C7',
      borderRadius: wp(6),
      width: wp(26),
      height: wp(23),
      marginBottom: hp(2),
      alignSelf: 'center',
    },
    logo: {
      width: wp(16),
      height: wp(16),
      resizeMode: 'contain',
    },
    sectionpayment: {
      marginBottom: hp(4),
  
    },
    section: {
      marginBottom: hp(4),
      alignItems: 'center',
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: 'Quicksand-SemiBold',
      color: '#222',
      marginBottom: hp(1),
      textAlign: 'left',
    },
    sectionTitleContainer: {
      marginBottom: hp(1),
    },
    sectionTitleUnderline: {
      height: 2,
      backgroundColor: '#007AFF',
      width: '100%',
      marginTop: hp(0.5),
    },
    sectionSubtitle: {
      fontSize: 15,
      fontFamily: 'Quicksand-Regular',
      color: '#000',
      marginBottom: hp(3),
    },
    amountButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: hp(3),
      marginHorizontal: wp(6),
    },
    amountButton: {
      flex: 1,
      backgroundColor: '#fff', 
      borderRadius: wp(2),
      paddingVertical: hp(1),
      paddingHorizontal: wp(0),
      marginHorizontal: wp(1),
      alignItems: 'center',
   
    },
    amountButtonSelected: {
      backgroundColor: '#264734',
      borderColor: '#264734',
    },
    amountButtonText: {
      fontSize: 14,
      fontFamily: 'Quicksand-Bold',
      color: '#222',
    },
    amountButtonTextSelected: {
      color: '#fff',
    },
    customAmountContainer: {
      marginBottom: hp(-2),
      width: '100%',
    },
    customAmountInput: {
      backgroundColor: '#fff',
      marginHorizontal: wp(6),
      borderWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: wp(10),
      paddingVertical: hp(2),
      paddingHorizontal: wp(4),
      fontSize: wp(4),
      fontFamily: 'Montserrat-Regular',
      color: '#222',
    },
    paymentMethodsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(2),
      backgroundColor: '#fff',
      borderRadius: wp(2),
    
     
    },
    paymentMethodButton: {
      flex: 1,
      borderRadius: wp(2),
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(5),
      marginHorizontal: wp(-0),
      alignItems: 'center',
 

    },
    paymentMethodButtonSelected: {
      backgroundColor: '#264734',
      borderColor: '#264734',
      paddingVertical: hp(2),
     
   
    },
    paymentMethodText: {
      fontSize: 15,
      fontFamily: 'Quicksand-Regular',
      color: '#000',
     
    },
    paymentMethodTextSelected: {
      color: '#fff',
    },
    paymentMethodIcon: {
      width: wp(22),
      height: wp(6),
      resizeMode: 'cover',
      marginBottom: hp(1),
    },
    paymentMethodButtonLeft: {
      borderTopLeftRadius: wp(2),
      borderBottomLeftRadius: wp(2),
      backgroundColor: '#264734',
      marginRight: 0,
    },
    paymentMethodButtonCenter: {
      borderRadius: 0,
      backgroundColor: '#fff',
      marginHorizontal: 0,
    },
    paymentMethodButtonRight: {
      borderTopRightRadius: wp(2),
      borderBottomRightRadius: wp(2),
      backgroundColor: '#fff',
      marginLeft: 0,
      alignItems: 'flex-end',
    },
    paypalRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    cardPaypalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    paypalSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paypalIcon: {
      width: wp(14),
      height: wp(4),
      resizeMode: 'contain',
      marginRight: wp(1),
    },
    paypalText: {
      fontSize: wp(3.5),
      fontFamily: 'Montserrat-Medium',
      color: '#000',
    },
    paymentInstruction: {
      fontSize: 15,
      fontFamily: 'Quicksand-Regular',
      color: '#000',
      textAlign: 'left',
      marginHorizontal: wp(0),
      paddingRight: wp(15),
      lineHeight: hp(2.5),
    },
    sectionTitlepayment: {
      fontSize: 13,
      fontFamily: 'Poppins-Bold',
      color: '#222',
      marginBottom: hp(1),
      textAlign: 'left',
    },
    saveButton: {
      backgroundColor: '#264734',
      borderRadius: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      width: '95%',
      height: hp(6),
      alignSelf: 'center',
      shadowColor: '#FFE0BD',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 2,
    },
    saveButtonText: {
      color: '#FFF',
      fontSize: wp(5),
      fontFamily: 'Poppins-Bold',
    },
    footer: {
      marginTop: hp(4),
      alignItems: 'center',
    },
    footerText: {
      fontSize: 15,
      fontFamily: 'Quicksand-Regular',
      color: '#000',
      textAlign: 'center',
    },
  });

export default styles; 