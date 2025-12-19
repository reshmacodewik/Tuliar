import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any, rf: any) =>
  StyleSheet.create({
    container: { flex: 1 },
    content: { paddingHorizontal: wp(5) },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    headerText: {
      fontSize: rf(18),
      fontFamily: 'Quicksand-Bold',
      marginLeft: wp(2),
    },

    logoContainer: {
      alignItems: 'center',
      marginBottom: hp(3),
    },
    logo: {
      width: wp(40),
      height: hp(8),
      resizeMode: 'contain',
    },

    dateText: {
      fontSize: rf(18),
      fontFamily: 'Quicksand-Bold',
      marginBottom: hp(1),
    },
    title: {
      fontSize: rf(16),
      marginBottom: hp(3),
    },

    card: {
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: wp(4),
      flexDirection: 'row',
      marginBottom: hp(3),
    },
    avatar: {
      width: rf(60),
      height: rf(60),
      borderRadius: 30,
      marginRight: wp(3),
    },
    name: {
      fontSize: rf(16),
      fontFamily: 'Quicksand-Bold',
    },
    role: {
      fontSize: rf(13),
      color: '#777',
    },
    online: {
      marginTop: hp(1),
      fontFamily: 'Quicksand-Bold',
    },
    link: {
      color: '#1F3827',
    },

    notesTitle: {
      fontSize: rf(16),
      fontFamily: 'Quicksand-Bold',
      marginBottom: hp(1),
    },
    notesInput: {
      backgroundColor: '#fff',
      borderRadius: 14,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: wp(4),
      height: hp(15),
      marginBottom: hp(3),
    },

    joinBtn: {
      backgroundColor: '#1F3827',
      borderRadius: 30,
      paddingVertical: hp(2),
      alignItems: 'center',
      marginBottom: hp(4),
    },
    joinText: {
      color: '#fff',
      fontSize: rf(16),
      fontFamily: 'Quicksand-Bold',
    },

    prepareTitle: {
      fontSize: rf(16),
      fontFamily: 'Quicksand-Bold',
    },
    prepareText: {
      fontSize: rf(14),
      color: '#555',
    },
  });

export default styles;
