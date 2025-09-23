import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    bgImg: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(0),
      paddingTop: hp(2),
      paddingBottom: hp(0),
      marginLeft: wp(-3),
    },
    headertxt: {
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
    },
    backButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
    },
    subHeader: {
      fontSize: wp(4),
      marginBottom: hp(3),
      color: '#1a3a2c',
      marginLeft: wp(1),
    },
    statsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      backgroundColor: '#264734',
      padding: wp(4),
      borderRadius: wp(3),
      marginBottom: hp(2),
    },
    statBox: {
      width: '48%',
      backgroundColor: '#fff',
      borderRadius: wp(2),
      padding: wp(3),
      marginBottom: hp(2),
      alignItems: 'center',
    },
    statIcon: {
      width: wp(8),
      height: hp(8),
      marginRight: wp(0),
      resizeMode: 'contain',
      marginBottom: hp(-2),
      marginTop: hp(-3),
    },

    statTitle: {
      fontSize: 10,
      textAlign: 'center',
      marginBottom: hp(0),
    },
    statValue: {
      fontSize: 27,
      fontWeight: 'bold',
      color: '#000',
    },
    goalStreakContainer: {
      flexDirection: 'row',
      marginBottom: hp(3),
    },
    goalContainer: {
      flex: 1,
      backgroundColor: '#264734',
      borderRadius: wp(3),
      padding: wp(3),
      marginRight: wp(2),
    },
    goalHeader: {
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: hp(1),
    },
    goalRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1),
      borderBottomWidth: 1,
      borderColor: '#fff',
      paddingBottom: hp(0.5),
    },
    goalText: {
      color: '#fff',
      fontSize: 11.5,
    },
    streakContainer: {
      flex: 1,
      backgroundColor: '#F7A300',
      borderRadius: wp(3),
      padding: wp(3),
      justifyContent: 'center',
      alignItems: 'center',
    },
    streakHeader: {
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: hp(1),
      fontFamily: 'Poppins-Bold',
      fontSize: 15,
    },
    streakImage: {
      width: wp(10),
      height: wp(12),
    },
    streakValue: {
      fontSize: wp(5),
      fontWeight: 'bold',
      marginBottom: hp(1),
      color: '#fff',
    },
    streakText: {
      color: '#fff',
      fontFamily: 'Poppins-Bold',
      fontSize: 11,
      fontWeight: '700',
    },
    moodHeader: {
      fontWeight: 'bold',
      fontSize: wp(5),
      marginBottom: hp(1),
      color: '#000',
    },
    moodContainer: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginBottom: hp(4),
      width: wp(50),
    },
    moodRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1),
    },
    moodEmoji: {
      fontSize: wp(5),
      marginRight: wp(3),
    },
    moodLabel: {
      flex: 1,
      fontSize: wp(4),
    },
    moodDays: {
      fontSize: wp(4),
      color: '#000',
    },
    shareButton: {
      backgroundColor: '#264734',
      paddingVertical: hp(1.8),
      borderRadius: wp(10),
      alignItems: 'center',
      marginBottom: hp(5),
    },
    shareButtonText: {
      color: '#fff',
      fontSize: wp(4),
      fontWeight: 'bold',
    },
  });

export default styles;
