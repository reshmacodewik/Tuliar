import { StyleSheet } from 'react-native';

export default (wp: (val: number) => number, hp: (val: number) => number) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingTop: hp(3),
      paddingBottom: 0,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(1),
      paddingBottom: hp(2),
    },
    avatar: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
      marginHorizontal: wp(2),
    },
    headerTitle: {
      fontWeight: '700',
      fontSize: wp(4.5),
    },
    scroll: {
      flex: 1,
      paddingHorizontal: wp(4),
      paddingLeft: wp(2),
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      paddingBottom: 16,
    },
    messageList: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      paddingBottom: 16,
    },
    doctorRow: {
      flexDirection: 'row',
      marginBottom: hp(2),
    },
    doctorAvatar: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(4),
      marginRight: wp(2),
    },
    doctorBubble: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      maxWidth: wp(70),
      shadowColor: '#000',
      shadowOpacity: 0.06,
      shadowRadius: 6,
      elevation: 2,
    },
    doctorTime: {
      fontSize: wp(2.8),
      color: '#9CA3AF',
      marginTop: hp(0.5),
      marginLeft: wp(1),
    },
    userRow: {
      alignItems: 'flex-end',
      marginBottom: hp(2),
    },
    userBubble: {
      backgroundColor: '#274B3F',
      borderRadius: wp(3),
      padding: wp(3),
      maxWidth: wp(70),
    },
    userTime: {
      fontSize: wp(2.8),
      color: '#9CA3AF',
      marginTop: hp(0.5),
      marginRight: wp(1),
    },
    optionRow: {
      flexDirection: 'row',
      marginBottom: hp(2),
    },
    optionBtn: {
      backgroundColor: '#E6F2F9',
      borderRadius: wp(2.5),
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(4),
      marginRight: wp(2),
    },
    optionText: {
      color: '#274B3F',
      fontSize: wp(3.6),
    },
    inputBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: wp(4),
      paddingVertical: hp(1),
    },
    inputContainer: {
      backgroundColor: '#E2E8F0',
      flexDirection: 'row',
      alignItems: 'center',
      width: '85%',

      borderRadius: wp(8),
      margin: wp(3),
      paddingHorizontal: wp(4),
      paddingVertical: hp(1),
    },
    input: {
      flex: 1,
      fontSize: wp(3.8),
      color: '#222',
      paddingVertical: hp(0.5),
    },
    sendIcon: {
      marginLeft: wp(1),
    },
    bubbleText: {
      fontSize: wp(3.6),
      color: '#222',
    },
    bubbleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 2,
    },
    bubbleTime: {
      fontSize: wp(2.8),
      color: '#9CA3AF',
      marginLeft: wp(2),
      alignSelf: 'flex-end',
    },
    userBubbleText: {
      fontSize: wp(3.6),
      color: '#fff',
    },
    sendButtonImage: {
      width: wp(8),
      height: wp(8),
    },
  });
