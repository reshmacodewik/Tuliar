import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Responsive helpers
function wp(percentage: number): number {
  return (width * percentage) / 100;
}
function hp(percentage: number): number {
  return (height * percentage) / 100;
}

const styles = StyleSheet.create({
  container: {
    padding: wp(5),

    flexGrow: 1,
    minHeight: hp(100),
  },
  header: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(1),
    color: '#222',
  },
  successBanner: {
    backgroundColor: '#b8f7c1',
    borderRadius: wp(2),
    padding: wp(2),
    marginBottom: hp(2),
    alignItems: 'center',
  },
  successText: {
    color: '#256029',
    fontSize: wp(3.7),
  },
  bold: {
    fontWeight: 'bold',
  },
  icon: {
    width: 26,
    height: 26,
    marginLeft: wp(2),
    tintColor: '#fff',
  },
  sectionLabel: {
    fontFamily:'Poppins-Bold',
    fontSize: wp(3.7),
    marginTop: hp(2),
    marginBottom: hp(1),
    color: '#222',
  },
  commRow: {
    flexDirection: 'row',
    gap: wp(10),
    justifyContent: 'center',
    marginVertical: hp(2),
    paddingHorizontal: wp(4),
  },

  commColumn: {
    alignItems: 'center',
    flex: 0,
  },

  commButtonSquare: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },

  commButtonActive: {
    backgroundColor: '#1c4431',
  },

  commButtonInactive: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },

  commIconSquare: {
    width: wp(8),
    height: wp(8),
    resizeMode: 'contain',
  },

  commLabelSquare: {
    marginTop: hp(1),
    fontSize: wp(3.3),
    color: '#000',
    fontWeight: '500',
  },
  durationButtonNew: {
    backgroundColor: '#f4f4f4',
    borderRadius: wp(10),
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    marginHorizontal: wp(1),
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  durationButtonActiveNew: {
    backgroundColor: '#f5a623',
  },
  durationButtonTextNew: {
    color: '#333',
    fontWeight: '500',
    fontSize: wp(3.6),
  },
  durationButtonTextActiveNew: {
    color: '#fff',
    fontWeight: '600',
  },

  // Selected Date Header
  calendarHeaderText: {
    fontWeight: 'bold',
    fontSize: wp(3.7),
    marginBottom: hp(1),
    color: '#256029',
  },

  commButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: wp(3),
    alignItems: 'center',
    paddingVertical: hp(2),
    marginHorizontal: wp(14),
  },

  commIcon: {
    fontSize: wp(7),
    marginBottom: hp(0.5),
  },
  commText: {
    fontSize: wp(3.5),
    color: '#222',
  },
  durationBox: {
    backgroundColor: '#fff',
    borderRadius: wp(2.5),
    padding: wp(4),
    marginBottom: hp(2),
    marginTop: hp(0.5),
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  durationNote: {
    fontSize: wp(3.2),
    color: '#666',
    marginBottom: hp(1),
  },
  durationRow: {
    flexDirection: 'row',
    gap: wp(2.5),
    justifyContent: 'center',
  },
  durationButton: {
    backgroundColor: '#e8e8e8',
    borderRadius: wp(5),
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    marginHorizontal: wp(1),
  },
  durationButtonActive: {
    backgroundColor: '#256029',
  },
  durationButtonText: {
    color: '#256029',
    fontWeight: '600',
    fontSize: wp(3.7),
  },
  durationButtonTextActive: {
    color: '#fff',
  },
  calendarBox: {
    backgroundColor: '#fff',
    borderRadius: wp(2.5),
    padding: wp(4),
    marginBottom: hp(2),
    marginTop: hp(0.5),
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(0.7),
  },

  calendarMonthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(0.7),
  },
  calendarMonth: {
    fontWeight: 'bold',
    color: '#256029',
    fontSize: wp(3.7),
  },
  calendarNav: {
    fontSize: wp(4.5),
    color: '#256029',
    paddingHorizontal: wp(2.5),
  },
  calendarWeekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(0.3),
  },
  calendarWeekDay: {
    flex: 1,
    textAlign: 'center',
    color: '#888',
    fontWeight: '600',
    fontSize: wp(3.2),
  },
  calendarDaysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: hp(0.5),
  },
  calendarCol: {
    width: '14.2%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(0.3),
    borderRadius: wp(5),
  },
  calendarColSmall: {
    width: '14.2%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(0.15),
    borderRadius: wp(4),
  },
  calendarColSelected: {
    backgroundColor: '#256029',
  },
  calendarDayText: {
    color: '#222',
    fontSize: wp(3.7),
  },
  calendarDayTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
