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
      fontFamily: 'Montserrat-Medium',
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
      textAlign:'left'
      
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
      padding: wp(4),
      marginHorizontal: wp(2),
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
    calendarHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(1),
    },
    calendarTitle: {
      fontSize: wp(4),
      fontFamily: 'Poppins-Bold',
      color: '#fff',
      backgroundColor: '#264734',
      borderRadius: wp(2),
      paddingHorizontal: wp(3),
      paddingVertical: hp(1),
    },
    calendarNav: {
      fontSize: wp(6),
      color: '#264734',
      paddingHorizontal: wp(2),
    },
    calendarGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: hp(1),
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
      backgroundColor: '#264734',
    },
    calendarDayText: {
      fontSize: wp(3.7),
      color: '#222',
      fontFamily: 'Montserrat-Medium',
    },
    calendarDayTextSelected: {
      color: '#fff',
      fontFamily: 'Montserrat-Bold',
    },
    dropdown: {
      width: '100%',
      height: hp(6),
      borderRadius: wp(10),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#E0E0E0',
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
      height: hp(6.5),
      marginTop: hp(2),
      marginBottom: hp(2),

    },
    payButtonText: {
      color: '#FFF',
      fontSize: wp(4.5),
      fontFamily: 'Poppins-Bold',
    },
  });

export default styles; 