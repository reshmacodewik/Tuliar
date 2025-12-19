import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any, rf: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
      paddingHorizontal: wp(5),
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo: {
      width: wp(32),
      height: hp(7),
      resizeMode: 'contain',
      marginVertical: hp(2),
    },

    title: {
      textAlign: 'center',
      fontSize: 32,
      fontFamily: 'Quicksand-Bold',
      color: '#111',
      marginBottom: hp(1),
    },
    subtitle: {
      marginHorizontal: wp(10),
      fontSize: 18,
      color: '#333',
      marginBottom: hp(3),
      fontWeight: '500',
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: wp(4),
      marginBottom: hp(6),
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 30,
      marginRight: wp(3),
    },
    name: {
      fontSize: 24,
      fontFamily: 'Quicksand-Bold',
      color: '#111',
      marginLeft: 5,
    },
    role: {
      fontSize: 16,
      color: '#555',
      marginLeft: 5,
    },
    chatBubble: {
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: wp(6),
      alignSelf: 'flex-start',
      maxWidth: '80%',
      marginTop: hp(10),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      marginLeft: wp(5),
    },
    chatText: {
      fontSize: rf(14),
      color: '#1F3827',
    },
    timeText: {
      fontSize: rf(11),
      color: '#555',
      marginTop: hp(1),
      marginBottom: hp(2),
      alignSelf: 'flex-end',
      fontWeight: '500',
      marginRight: wp(25),
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 'auto',
      marginBottom: hp(3),
      marginHorizontal: wp(5),
    },
    input: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 25,
      paddingHorizontal: wp(6),
      paddingVertical: hp(1.2),
      fontSize: rf(14),
      borderWidth: 1,
      borderColor: '#ccc',
    },
    sendBtn: {
      backgroundColor: '#1F3827',
      marginLeft: wp(2),
      borderRadius: 20,
      padding: wp(3),
    },
  });

export default styles;
