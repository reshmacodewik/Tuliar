import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      marginHorizontal: hp(2),
    },
    innercontainer: {
      backgroundColor: '#fff',
      borderRadius: 15,
      height: hp(85),
      justifyContent: 'center',
      alignContent: 'center',
      paddingHorizontal: hp(0),
      paddingTop: hp(0),
      marginTop: hp(4),
    },
    headerContainer: {
      position: 'relative',
      alignItems: 'center',
    },
    mainImage: {
      resizeMode: 'cover',
      borderRadius: wp(3),
      marginTop: hp(1.5),
    },

    backButtonContainer: {
      position: 'absolute',
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
    },

    backButton: {
      width: wp(10),
      height: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
      backgroundColor: '#fff', // Optional for testing
    },

    moreButton: {
      position: 'absolute',
      backgroundColor: '#fff',
      padding: wp(1.5),
      borderRadius: wp(5),
    },
    contentContainer: {
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
    },
    titleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      flex: 1,
      marginRight: wp(2),
      fontFamily: 'Poppins-Bold',
    },
    freeTag: {
      backgroundColor: '#F4A825',
      paddingVertical: hp(0.3),
      paddingHorizontal: wp(7),
      borderRadius: wp(5),
    },
    freeText: {
      color: '#fff',
      fontFamily: 'Poppins-SemiBold',
    },
    dateText: {
      color: '#264734',
      marginTop: hp(-0.5),
      fontFamily: 'Poppins-SemiBold',
    },
    timeText: {
      color: '#264734',
      marginTop: hp(-0.5),
      fontFamily: 'Poppins-SemiBold',
    },
    attendanceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(0),
    },
    attendeeImage: {
      borderRadius: wp(10),
    },
    attendanceText: {
      color: '#000',
      fontFamily: 'Poppins-Medium',
    },

    sectionTitle: {
      marginTop: hp(2),
      fontFamily: 'Poppins-Bold',
    },
    descriptionText: {
      marginTop: hp(0),
      color: '#000',
      fontFamily: 'Poppins-Regular',
    },
    speakerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: hp(1.5),
    },
    speakerImage: {
      borderRadius: wp(10),
    },
    speakerInfo: {
      marginLeft: wp(2),
    },
    speakerName: {
      fontFamily: 'Poppins-Bold',
    },
    speakerRole: {
      color: '#979797',
      fontFamily: 'Poppins-Medium',
      marginTop: hp(-0.5),
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginTop: hp(0.3),
    },
    bulletPoint: {
      marginRight: wp(2),
      color: '#000',
    },
    listText: {
      flex: 1,
      color: '#000',
      fontFamily: 'Poppins-Regular',
    },
    registerButton: {
      backgroundColor: '#264734',
      height: wp(12),
      borderRadius: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: wp(5),
    },
    registerText: {
      color: '#fff',
      fontSize: wp(4.4),
      fontFamily: 'Poppins-Bold',
    },
    accordionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: hp(1.5),
    },
    accordionTitle: {
      fontFamily: 'Gabarito-Regular',
      color: '#000',
      marginTop: wp(3.5),
    },
    accordionContent: {
      paddingVertical: hp(1),
    },
  });

export default styles;
