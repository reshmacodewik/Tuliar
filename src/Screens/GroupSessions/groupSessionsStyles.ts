import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
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
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: hp(3.5),
      paddingBottom: hp(1),
    },
    backButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
      marginLeft: wp(-2),
      marginBottom:wp(2)
    },
    headerCenter: {
      flex: 1,
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: wp(5),
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
    },
    profileButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImage: {
      width: wp(9),
      height: wp(9),
      borderRadius: wp(6),
    },
    container: {
      flex: 1,
      paddingHorizontal: wp(4),
    },
    scrollContent: {
      paddingBottom: hp(5),
    },
    featuredSection: {
      marginBottom: hp(3),
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      marginBottom: hp(2),
      fontWeight: '700',
      marginLeft: wp(2),
    },
    featuredCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      position: 'relative',
     
    },
    featuredContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    featuredLeft: {
      flex: 1,
      marginRight: wp(3),
      paddingRight: wp(2),
    },
    featuredTitle: {
      fontSize: 25,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      marginBottom: hp(1),
      lineHeight: 24,
      fontWeight: '700',
      
    },
    featuredDate: {
      fontSize: 14,
      fontFamily: 'Quicksand-Regular',
      color: '#000',
      marginBottom: hp(2),
    },
    featuredButtons: {
      gap: hp(1.5),
    },
    chatButton: {
      backgroundColor: '#264734',
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(4),
      borderRadius: wp(6),
      alignItems: 'center',
      marginBottom: hp(1),
      width: wp(35),
    },
    watchAdButton: {
      backgroundColor: '#F97316',
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(4),
      borderRadius: wp(6),
      alignItems: 'center',
      width: wp(45),
    },
    buttonText: {
      color: '#fff',
      fontSize: 12,
      fontFamily: 'Poppins-SemiBold',
      fontWeight: '600',
    },
    payText: {
      color: '#fff',
      fontSize: 12,
      fontFamily: 'Quicksand-Regular',
      fontWeight: '600',
    },
    featuredRight: {
      alignItems: 'center',
      marginTop: hp(3.5),
      width: wp(30),
      position: 'relative',
    },
    featuredLeaderImage: {
      width: wp(22),
      height: wp(25),
      borderRadius: wp(0),
      marginBottom: hp(1),
      position: 'relative',
    },
    leaderInfo: {
      backgroundColor: '#fff',
      padding: wp(1.5),
      borderRadius: wp(2),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
      position: 'absolute',
      bottom: hp(-7),
      left: wp(0.5),
      right: wp(0.5),
      zIndex: 1,
    },
    leaderName: {
      fontSize: 14,
      fontFamily: 'Poppins-Bold',
      color: '#000',
      marginBottom: hp(0.3),
      fontWeight: '700',
    },
    participants: {
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
      color: '#666',
      marginBottom: hp(0.5),
    },
    payButton: {
      backgroundColor: '#264734',
      paddingVertical: hp(0.5),
      paddingHorizontal: wp(3),
      borderRadius: wp(5),
      alignItems: 'center',
      marginTop: hp(1),
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: hp(1.8),
      right: wp(7.5),
    },
    sessionsSection: {
      marginBottom: hp(2),
    },
    sessionCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      marginBottom: hp(2),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      position: 'relative',
    },
    sessionContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    sessionLeaderImage: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(6),
      marginRight: wp(3),
      marginBottom: hp(5),
    },
    sessionInfo: {
      flex: 1,
    },
    sessionTitleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(0.5),
    },
    sessionTitle: {
      fontSize: wp(4),
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
      flex: 1,
    },
    sessionDate: {
      fontSize: 15,
      fontFamily: 'Quicksand-Regular',
      color: '#000',
      marginBottom: hp(1),
    },
    sessionLeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    sessionLeaderInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    sessionLeaderSmall: {
      width: wp(6),
      height: wp(6),
      borderRadius: wp(3),
      marginRight: wp(1),
    },
    sessionLeaderName: {
      fontSize: wp(3.5),
      fontFamily: 'Poppins-Bold',
      color: '#000',
      fontWeight: '700',
    },
    sessionActions: {
      alignItems: 'flex-end',
    },
    reserveButton: {
      backgroundColor: '#264734',
      paddingVertical: hp(0.7),
      paddingHorizontal: wp(3),
      borderRadius: wp(6),
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    freeBadge: {
      backgroundColor: '#fff',
      paddingVertical: hp(0.3),
      paddingHorizontal: wp(2),
      borderRadius: wp(3),
    },
   freeIcon:{
    width: wp(5),
    height: wp(5),
   }
    
  });

export default styles;