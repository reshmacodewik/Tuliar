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
      paddingTop: hp(3),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(2),
      paddingTop: hp(2),
      paddingBottom: hp(1),
    },
    backButton: {
      width: wp(10),
      height: wp(10),

      borderRadius: wp(5),
    },
    headerTitle: {
      fontSize: isTablet ? wp(5) : 20,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
      marginBottom: wp(2),
    },
    headerSpacer: {
      width: wp(10),
    },
    container: {
      flex: 1,
      paddingHorizontal: wp(5),
    },
    scrollContent: {
      paddingBottom: hp(15),
    },
    greetingSection: {
      marginBottom: hp(3),
      paddingTop: hp(1),
    },
    greetingTitle: {
      fontSize: 24,
      fontFamily: 'Poppins-Medium',
      color: '#000',
      marginBottom: hp(1),
      paddingRight: wp(10),
      lineHeight: 40,
      marginTop: hp(1),
    },
    greetingSubtitle: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Light',
      color: '#000',
      lineHeight: isTablet ? wp(5) : 25,
      paddingRight: wp(25),
    },
    cardsSection: {
      gap: hp(2),
    },
    journeyCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    cardIcon: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(6),
      backgroundColor: '#F0F8FF',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: wp(3),
      position: 'relative',
      marginBottom: hp(3),
    },
    iconImage: {
      width: wp(8),
      height: wp(8),
      resizeMode: 'contain',
    },

    cardText: {
      flex: 1,
    },
    cardTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(0.5),
    },
    cardTitle: {
      fontSize: isTablet ? wp(4.5) : 16,
      fontFamily: 'Poppins-SemiBold',
      color: '#000',
      marginBottom: hp(1),
      fontWeight: '700',
    },
    cardSubtitle: {
      fontSize: isTablet ? wp(3.5) : 14,
      fontFamily: 'Poppins-Light',
      color: '#A7A7A7',
    },
    cardButton: {
      backgroundColor: '#ECA14C',
      paddingVertical: hp(0.8),
      paddingHorizontal: wp(4),
      borderRadius: wp(6),
      alignItems: 'center',
    },
    cardButtonGoal: {
      backgroundColor: '#ECA14C',
      paddingVertical: hp(0.6),
      width: wp(25),
      borderRadius: wp(6),
      alignItems: 'center',
      marginLeft: wp(10),
    },
    buttonText: {
      color: '#fff',
      fontSize: isTablet ? wp(3.5) : 14,
      fontFamily: 'Poppins-SemiBold',
      fontWeight: '600',
    },
    splitCard: {
      flexDirection: 'row',
      gap: wp(3),
    },
    splitLeft: {
      flex: 1,
      justifyContent: 'space-between',
    },
    splitRight: {
      flex: 1,
    },
    calendarTitle: {
      fontSize: isTablet ? wp(4) : 16,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      marginBottom: hp(1),
      marginTop: hp(-1),
      fontWeight: '700',
    },
    calendarContainer: {
      borderRadius: wp(4),
      padding: wp(6),
      width: wp(50),
      marginTop: hp(-3.5),
      marginLeft: wp(-7),
    },
    customCalendarHeader: {
      backgroundColor: '#264734',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      paddingVertical: hp(0.5),
      paddingBottom: wp(1),
      paddingHorizontal: wp(4),
    },
    calendarHeaderYear: {
      color: '#BFC9C6',
      fontSize: 10,
      fontFamily: 'Montserrat-Medium',
    },
    calendarHeaderDate: {
      color: '#fff',
      fontSize: 10,
      fontFamily: 'Poppins-Bold',
      marginTop: hp(0.5),
    },
    calendarNav: {
      fontSize: 10,
      color: '#264734',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(0),
      backgroundColor: '#f5f5f5',
      paddingVertical: hp(0),
    },
    calendarGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: hp(1),

      paddingBottom: wp(-10),
    },
    calendarDay: {
      width: '13%',
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp(2),
      marginBottom: hp(1),
      marginTop: hp(-1.4),
    },
    calendarDaySelected: {
      borderRadius: wp(10),
    },
    calendarDayText: {
      fontSize: 10,

      color: '#222',
      fontFamily: 'Montserrat-Medium',
    },
    calendarDayTextSelected: {
      color: '#000',
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
      height: hp(5.5),
      marginTop: hp(2),
      marginBottom: hp(2),
    },
    payButtonText: {
      color: '#FFF',
      fontSize: wp(4.5),
      fontFamily: 'Poppins-Bold',
    },
    //
    calendarHeader: {
      backgroundColor: '#264734',
      borderRadius: wp(2),
      padding: wp(2),
      marginBottom: hp(1),
    },
    calendarHeaderLeft: {
      alignItems: 'center',
      marginBottom: hp(0.5),
    },
    calendarYear: {
      fontSize: isTablet ? wp(3) : 12,
      fontFamily: 'Poppins-Regular',
      color: '#fff',
    },
    calendarDate: {
      fontSize: isTablet ? wp(2.5) : 10,
      fontFamily: 'Poppins-Regular',
      color: '#fff',
    },
    calendarHeaderCenter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    calendarMonth: {
      fontSize: isTablet ? wp(3.5) : 14,
      fontFamily: 'Poppins-Bold',
      color: '#fff',
      fontWeight: '700',
    },
    calendarDays: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: hp(1),
    },
    dayHeader: {
      fontSize: isTablet ? wp(2.5) : 10,
      fontFamily: 'Poppins-Bold',
      color: '#666',
      fontWeight: '700',
      width: wp(8),
      textAlign: 'center',
    },

    selectedDay: {
      backgroundColor: '#264734',
      borderRadius: wp(4),
    },
    dayText: {
      fontSize: isTablet ? wp(2.5) : 10,
      fontFamily: 'Poppins-Regular',
      color: '#666',
    },
    selectedDayText: {
      color: '#fff',
      fontWeight: '700',
    },
    bottomActionBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,

      paddingHorizontal: wp(4),
      paddingVertical: hp(3),
      borderTopLeftRadius: wp(3),
      borderTopRightRadius: wp(3),
    },
    actionTitle: {
      fontSize: isTablet ? wp(4.5) : 18,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      textAlign: 'center',
      marginBottom: hp(2),
      fontWeight: '700',
    },
    actionButtons: {
      flexDirection: 'row',
      gap: wp(3),
    },
    actionButton: {
      flex: 1,
      backgroundColor: '#264734',
      paddingVertical: hp(1),
      borderRadius: wp(6),
      alignItems: 'center',
    },
    actionButtonText: {
      color: '#fff',
      fontSize: isTablet ? wp(3.5) : 13,
      fontFamily: 'Poppins-Regular',
      fontWeight: '600',
    },
    progressCardContent: {
      flexDirection: 'column',
      gap: hp(2),
    },
    cardActionBar: {
      paddingHorizontal: wp(3),
      paddingVertical: hp(2),
      borderRadius: wp(2),
      marginTop: hp(2),
    },
    goalsCalendarSection: {
      flexDirection: 'row',
      gap: wp(3),
      marginTop: hp(2),
      marginBottom: hp(2),
    },
    goalsCard: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      height: hp(23),
    },
    goalsCardHeader: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: hp(2),
    },
    goalsCardContent: {
      flex: 1,
      marginLeft: wp(3),
    },
    calendarCard: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),

      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      height: hp(23),
    },
    trackButton: {
      backgroundColor: '#ECA14C',
      paddingVertical: hp(0.5),
      paddingHorizontal: wp(5),
      borderRadius: wp(6),
      alignItems: 'center',
      marginLeft: wp(15),
      marginTop: hp(-2),
      marginBottom: hp(-2),
      width: wp(28),
    },
  });
};

export default styles;
