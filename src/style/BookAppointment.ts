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
      alignItems: 'center',
      paddingHorizontal: wp(5),
      paddingTop: hp(4),
    },
    backButton: {
      top: hp(7),
      left: wp(3),
      width: wp(12),
      height: wp(12),
    },
    logo: {
      width: wp(32),
      height: hp(7),
      resizeMode: 'contain',
      marginBottom: hp(2),
      marginTop: hp(2),
    },
    header: {
      fontSize: wp(6),
      fontFamily: 'Urbanist-SemiBold',
      color: '#222',
      textAlign: 'center',
      marginBottom: hp(1),
    },
    avatar: {
      width: wp(20),
      height: wp(20),
      borderRadius: wp(10),
      marginBottom: hp(1),
      alignSelf: 'center',
    },
    name: {
      fontSize: wp(5),
      fontFamily: 'Poppins-Bold',
      color: '#222',
      textAlign: 'center',
      marginTop: hp(1),
    },
    role: {
      fontSize: wp(4),
      fontFamily: 'Montserrat-SemiBold',
      color: '#222',
      textAlign: 'center',
      marginBottom: hp(2),
    },
    sectionTitle: {
      fontSize: wp(4),
      fontFamily: 'Poppins-Bold',
      color: '#222',
      marginTop: hp(2),
      marginBottom: hp(1),
      textAlign: 'left',
    },
    sectionTitleservice: {
      fontSize: wp(4),
      fontFamily: 'Poppins-Bold',
      color: '#222',
      marginTop: hp(0),
      marginBottom: hp(1),
      textAlign: 'center',
    },
    serviceRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    serviceButton: {
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(3),
      marginHorizontal: wp(2),
      paddingVertical: hp(1),
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#E0E0E0',
    },
    serviceButtonActive: {
      backgroundColor: '#264734',
      borderColor: '#264734',
    },
    serviceIcon: {
      width: wp(8),
      height: wp(8),
      resizeMode: 'contain',
      marginBottom: hp(0.5),
    },
    serviceLabel: {
      fontSize: wp(3.5),
      fontFamily: 'Montserrat-Medium',
      color: '#222',
      marginTop: hp(0.5),
    },
    serviceLabelActive: {
      color: '#fff',
    },
    calendarContainer: {
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(4),
      width: '100%',
      marginBottom: hp(2),
      marginTop: hp(2),
    },
    customCalendarHeader: {
      backgroundColor: '#264734',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      paddingVertical: hp(1.5),
      paddingBottom: wp(1),
      paddingHorizontal: wp(4),
    },
    calendarHeaderYear: {
      color: '#BFC9C6',
      fontSize: 14,
      fontFamily: 'Montserrat-Medium',
    },
    calendarHeaderDate: {
      color: '#fff',
      fontSize: 14,
      fontFamily: 'Poppins-Bold',
      marginTop: hp(0.5),
    },
    calendarNav: {
      fontSize: wp(6),
      color: '#264734',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(2),
      backgroundColor: '#f5f5f5',
      paddingVertical: hp(1),
    },
    calendarGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: hp(1),
      backgroundColor: '#fff',
      paddingBottom: wp(-10),
    },
    calendarDay: {
      width: '13%',
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp(2),
      marginBottom: hp(1),
    },
    calendarDaySelected: {
      backgroundColor: '#fff',
      borderRadius: wp(10),
    },
    calendarDayText: {
      fontSize: wp(3.7),
      color: '#222',
      fontFamily: 'Montserrat-Medium',
    },
    calendarDayTextSelected: {
      color: '#000',
      fontFamily: 'Montserrat-Bold',
    },
    dropdown: {
      width: '100%',
      height: hp(16),
      borderRadius: wp(6),
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingHorizontal: wp(4),
      marginBottom: hp(2),
   
    },
    dropdownText: {
      fontSize: wp(4),
      color: '#A0A3BD',
      fontFamily: 'Montserrat-Regular',
    },
    payButton: {
      backgroundColor: '#264734',
      borderRadius: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      width: '85%',
      height: hp(5.5),
      marginTop: hp(2),
      marginBottom: hp(2),
    },
    payButtonText: {
      color: '#FFF',
      fontSize: wp(4.5),
      fontFamily: 'Poppins-Bold',
    },
    timeSlotTrigger: {
      width: '100%',
      height: 52,
      borderRadius: 26,
      borderWidth: 1.5,
      borderColor: '#264734',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 12,
    },

    timeSlotTriggerText: {
      fontSize: 16,
      color: '#264734',
      fontFamily: 'Poppins-Medium',
    },

    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'flex-end',
    },

    modalContainer: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      padding: 24,
    },

    modalTitle: {
      fontSize: 18,
      fontFamily: 'Poppins-Bold',
      textAlign: 'center',
      marginBottom: 20,
    },

    slotButton: {
      height: 50,
      borderRadius: 25,
      borderWidth: 1.5,
      borderColor: '#264734',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
    },

    slotButtonActive: {
      backgroundColor: '#9E9E9E',
      borderColor: '#9E9E9E',
    },

    slotText: {
      color: '#264734',
      fontSize: 15,
      fontFamily: 'Poppins-Medium',
    },

    slotTextActive: {
      color: '#fff',
    },

    bookNowButton: {
      height: 56,
      borderRadius: 28,
      backgroundColor: '#264734',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },

    bookNowText: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'Poppins-Bold',
    },
    timeSlotGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 12,
    },

    timePill: {
      width: '32%',
      height: 35,
      borderRadius: 22,
      borderWidth: 1.5,
      borderColor: '#264734',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 14,
      backgroundColor: '#fff',
    },

    timePillActive: {
      backgroundColor: '#264734',
    },

    timePillText: {
      fontSize: 14,
      color: '#264734',
      fontFamily: 'Poppins-Medium',
    },

    timePillTextActive: {
      color: '#fff',
    },
  });

export default styles;
