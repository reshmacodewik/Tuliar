import { StyleSheet } from 'react-native';

export default (wp: (v: number) => number, hp: (v: number) => number) =>
  StyleSheet.create({
    bgimg: { flex: 1, paddingTop: hp(3.5) },
    scrollContainer: { flexGrow: 1, paddingHorizontal: wp(5), paddingBottom: hp(4) },

    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(3),
    },
    header: { fontSize: wp(5), fontWeight: '700', color: '#000' },
    filtertext:{flexDirection:'row',justifyContent:'space-around', alignItems: 'center',},
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      marginBottom: hp(2),
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 3,
    },

    customCalendarHeader: {
      backgroundColor: '#264734',
      borderRadius: wp(0),
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(3),
      marginBottom: hp(0),
    },
    calendarHeaderYear: { color: '#C7E7C9', fontSize: wp(3), fontWeight: '600' },
    calendarHeaderDate: { color: '#fff', fontSize: wp(3.5), fontWeight: '700' },

    calendarNav: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#F4F7F6',
      borderRadius: wp(0),
      paddingVertical: hp(1),
      paddingHorizontal: wp(3),
      marginBottom: hp(1.5),
    },
    monthTitle: { fontSize: wp(4), color: '#264734', fontWeight: '700' },

    calendarGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    calendarDay: {
      width: `${100 / 7}%`,
      paddingVertical: hp(1.2),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp(2),
      marginVertical: hp(0.2),
    },
    calendarDaySelected: { backgroundColor: '#264734' },
    calendarToday: { backgroundColor: '#fff' },
    calendarDayText: { fontSize: wp(3.5), color: '#264734' },
    calendarDow: { fontWeight: '700' },
    calendarDayTextSelected: { color: '#fff', fontWeight: '700' },
    calendarTodayText: { color: '#264734', textDecorationLine: 'underline' },
    outsideMonth: { color: '#CFCFCF' },

    sectionTitle: { fontSize: wp(4), fontWeight: '700', color: '#000', marginBottom: hp(1) },
    itemRow: { flexDirection: 'row', alignItems: 'center', marginBottom: hp(1) },
    itemText: { fontSize: wp(3.6), color: '#333' },
    divider: { height: 1, backgroundColor: '#E6E6E6', marginVertical: hp(1.5) },

    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.15)',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      paddingTop: hp(10),
      paddingRight: wp(6),
    },
    filterCard: {
      backgroundColor: '#fff',
      borderRadius: wp(2),
      width: wp(45),
      paddingVertical: hp(1),
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
    },
    filterItem: { paddingVertical: hp(1.2), paddingHorizontal: wp(3) },
    activeFilter: { backgroundColor: '#F4F7F6' },
    filterText: { fontSize: wp(3.6), color: '#333' },
  });


