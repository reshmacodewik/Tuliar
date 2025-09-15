import { StyleSheet } from 'react-native';

const styles = (wp: (v: number) => number, hp: (v: number) => number) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(1.2),
      paddingTop: hp(5),
      paddingBottom: hp(2),
      
    },
    backButton: {
      padding: wp(1),
    },
    headerLogo: {
      width: wp(34),
      height: hp(4),
      resizeMode: 'contain',
      marginLeft: wp(-1),
    },
    headerTagline: {
      fontSize: wp(3),
      color: '#333',
      marginLeft: wp(0),
      fontWeight:'bold'
    },
    headerRight: {
      flex: 1,
      alignItems: 'flex-end',
    },
    headerIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    bellIcon: {
      width: wp(6),
      height: wp(6),
      marginRight: wp(3),
    },
    userIcon: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: hp(1),
    },
    menuText: {
      fontSize: wp(3.5),
      marginLeft: wp(2),
      color: '#000',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(5),
      paddingTop: hp(2),
      paddingBottom: hp(2),
    },
    logo: {
      width: wp(30),
      height: hp(4),
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: wp(2.5),
      color: '#333',
    },
    profileImage: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
    },
    notificationIcon: {
      marginRight: wp(4),
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: wp(5),
    },
    titleContainer: {
      marginTop: hp(1),
      marginBottom: hp(2),
      flexDirection:'row',
      alignItems:'center',
      gap:5,
      marginLeft:wp(-2),
    },
    title: {
      fontSize: wp(5),
      fontWeight: 'bold',
      color: '#000',
      lineHeight: hp(2.8),
      marginHorizontal:wp(2),
    },
    tagcardContainer: {
      backgroundColor: '#fff',
      padding: wp(2),
      borderRadius: wp(3),
    },
    tagContainer: {
      alignSelf: 'flex-end',
      marginBottom: hp(1),
    },
    tagText: {
      color: '#FFFFFF',
      fontSize: wp(3.2),
      fontWeight: '600',
    },
    sessionImage: {
      width: '100%',
      height: hp(15),
      borderRadius: wp(5),
      marginBottom: hp(2),
      paddingHorizontal: wp(5),
    },
    sessionInfoContainer: {
      marginBottom: hp(2),
    },
    sessionTitle: {
      fontSize: wp(3),
      fontWeight: 'bold',
      color: '#000',
      marginBottom: hp(0.5),
    },
    sessionDescription: {
      fontSize: wp(3),
      color: '#333',
      marginBottom: hp(1),
    },
    dateTimeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(0),
    },
    dateTimeIcon: {
      marginRight: wp(2),
    },
    dateTimeText: {
      fontSize: wp(3),
      color: '#000',
      fontWeight: 'bold',
    },
    formatContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(0.5),
    },
    formatLabel: {
      fontSize: wp(3),
      color: '#000',
      fontWeight: 'bold',
    },
    registeredCount: {
      fontSize: wp(3),
      color: '#000',
      fontWeight: 'bold',
    },
    accessPaymentContainer: {
      marginTop: hp(2),
      backgroundColor: '#fff',
      padding: wp(2),
      borderRadius: wp(3),
    },
    sectionTitle: {
      fontSize: wp(3),
      fontWeight: 'bold',
      color: '#000',
      marginBottom: hp(1),
      marginTop: hp(0.7),
    },
    paymentInfoContainer: {
      marginBottom: hp(2),
    },
    paymentRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: hp(0.5),
    },
    paymentLabel: {
      fontSize: wp(3),
      color: '#333',
 
       marginTop: hp(-0.5),
    },
    paymentValue: {
      fontSize: wp(3),
      fontWeight: 'bold',
      color: '#000',
    },
    confirmButton: {
      backgroundColor: '#264734',
      paddingVertical: hp(1),
      borderRadius: wp(8),
      alignItems: 'center',
      marginTop: hp(-1),
      marginBottom: hp(1),
      width:'55%',
      alignSelf:'center',
      elevation:2
    },
    confirmButtonText: {
      color: '#FFFFFF',
      fontSize: wp(4),
      fontWeight: 'bold',
    },
  });

export default styles;
