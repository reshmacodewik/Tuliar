import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: hp(1),
    },
    menuText: {
      marginLeft: wp(2),
      fontSize: wp(3.8),
      color: '#000',
    },

    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    innercontainer: {
      backgroundColor: '#fff',
      borderRadius: 15,
      height: hp(61),
      justifyContent: 'center',
      alignContent: 'center',
      paddingHorizontal: hp(2),
      paddingTop: hp(2),
      marginTop: hp(-2),
    },
    container: {
      flex: 1,
      padding: wp(4),
      marginTop: hp(1.5),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(3),
    },
    logo: {
      width: wp(40),
      height: hp(6),
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: wp(3),
      marginTop: hp(0),
      color: '#000',
      marginLeft: hp(1),
      fontFamily: 'Quicksand-SemiBold',
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
      width: wp(8),
      height: wp(8),
      borderRadius: wp(4),
    },
    featureRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: hp(3),
      marginTop: hp(1.5),
      marginHorizontal: hp(2.4),
    },
    featureBtn: {
      width: wp(19),
      height: wp(21),
      borderWidth: 1,
      borderColor: '#F97316',
      borderRadius: wp(2.5),
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: hp(2),
      backgroundColor: 'white',
    },
    featureIcon: {
      width: wp(8),
      height: wp(8),
      marginBottom: hp(1),
    },
    featureText: {
      fontSize: wp(2.8),
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    sectionTitle: {
      fontSize: wp(5),
      fontWeight: '700',
      fontFamily: 'Poppins-Bold',
    },
    arrow: {
      fontSize: wp(10),
      color: '#000',
    },
    journeyCard: {
      width: wp(55),
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginRight: wp(4),
    },
    journeyImg: {
      width: '100%',
      height: hp(12),
      borderRadius: wp(0),
      marginBottom: hp(1),
    },
    journeyTitle: {
      fontSize: wp(4),
      marginBottom: hp(0),
      fontFamily: 'Poppins-Bold',
    },
    journeyText: {
      fontSize: wp(3.2),
      color: '#979797',
      marginBottom: hp(1),
      fontFamily: 'Poppins-Medium',
    },
    detailsBtn: {
      backgroundColor: '#003300',
      paddingVertical: hp(1),
      borderRadius: wp(10),
      alignItems: 'center',
      shadowColor: '#FFE0BD',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 6,
      elevation: 2,
    },
    detailsText: {
      color: '#fff',
      fontSize: wp(3.8),
      fontFamily: 'Poppins-Bold',
    },
    eventCard: {
      width: wp(55),
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginBottom: hp(2),
    },
    eventImg: {
      width: '100%',
      height: hp(15),
      borderRadius: wp(2),
      marginRight: wp(4),
      marginBottom: hp(1),
    },
    eventContent: {
      flex: 1,
    },
    tagsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1),
      justifyContent: 'space-between',
    },
    fromTag: {
      backgroundColor: '#264734',
      paddingHorizontal: wp(2),
      paddingVertical: wp(0.5),
      borderRadius: wp(5),
      marginRight: wp(2),
    },
    typeTag: {
      paddingVertical: wp(0),
      borderRadius: wp(5),
    },
    tagText: {
      fontSize: wp(3),
      color: '#fff',
      fontFamily: 'Poppins-Bold',
    },
    eventTitle: {
      fontSize: wp(3.5),
      fontFamily: 'Poppins-SemiBold',
      marginBottom: hp(0.5),
    },
    eventDesc: {
      fontSize: wp(3.1),
      color: '#979797',
      fontFamily: 'Poppins-Medium',
    },
    outercontainer: {
      position: 'absolute',
      bottom: hp(0),
      right: wp(0),
      flexDirection: 'column',
      alignItems: 'center',
    },
    fab: {
      width: wp(17),
      height: wp(17),
      borderRadius: wp(10),
      backgroundColor: '#003300',
      borderWidth: 1,
      borderColor: '#F97316',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    icon: {
      width: wp(8),
      height: wp(8),
      resizeMode: 'contain',
    },
    textContainer: {
      marginLeft: wp(2),
      paddingHorizontal: wp(3),
      paddingVertical: hp(0.8),
    },
    text: {
      fontSize: wp(3.5),
      color: '#000',
    },

    feedCard: {
      backgroundColor: '#fff',
      padding: wp(4),
      borderRadius: wp(3),
      marginBottom: hp(2),
      borderWidth: 1,
    },
    feedHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1),
    },
    feedAvatar: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(4),
      marginRight: wp(2),
    },
    feedUser: {
      fontWeight: '600',
      fontSize: wp(4),
    },
    feedText: {
      fontSize: wp(3.5),
      color: '#333',
      marginVertical: hp(1),
    },
    feedStats: {
      flexDirection: 'row',
      gap: 0,
      paddingTop: hp(1),
    },

    statItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: wp(4),
    },
    feedicon: {
      width: wp(5),
      height: wp(5),
      resizeMode: 'contain',
      marginRight: wp(1),
    },
    statText: {
      fontSize: wp(3.2),
      color: '#000',
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: hp(10),
    },
    backButton: {
      top: hp(3),
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: wp(5),
      fontFamily: 'Poppins-Bold',
      marginTop: hp(-1),
      marginRight: hp(10),
      textAlign: 'center',
    },
  });

export default styles;
