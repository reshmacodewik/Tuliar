// style/FeedDetails.ts
import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
      marginLeft: wp(-2.5),
      marginTop: hp(3),
    },
    backButton: {
      width: wp(10),
      height: wp(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: wp(4.5),
      color: '#000',
      marginLeft: wp(2),
    },
    thoughtBoxcontainer: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(1.5),
      marginHorizontal: wp(-3.5),
    },
    textBoxWrapper: {
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 10,
      marginTop: 10,
      backgroundColor: '#fff',
    },

    textBox: {
      minHeight: 150,
      padding: 10,
      borderRadius: 10,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(4),
      marginBottom: hp(2),
    },
    sectionTitle: {
      fontSize: wp(5),
      fontWeight: '600',
      color: '#000',
    },
    thoughtBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(3),
      borderRadius: wp(3),
      marginHorizontal: wp(4),
      marginBottom: hp(2),
      borderWidth: 1,
      borderColor: '#ddd',
    },
    avatar: {
      width: wp(9),
      height: wp(9),
      borderRadius: wp(9) / 2,
      marginRight: wp(3),
    },
    placeholder: {
      flex: 1,
      fontSize: wp(4),
      color: '#666',
    },

    // 🔹 For ShareThoughts screen
    container: {
      flex: 0,
      padding: wp(5),
    },
    sharetitle: {
      fontSize: wp(4),
      fontFamily: 'Poppins-Bold',
      marginBottom: hp(2),
      color: '#000',
      marginLeft: wp(1),
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Poppins-Bold',
      marginBottom: hp(2),
      color: '#000',
      marginTop: hp(2),
    },
    input: {
      height: hp(50),
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp(2),
      padding: wp(3),
      fontSize: wp(4),
      marginBottom: hp(3),
      textAlignVertical: 'top',
    },
    button: {
      backgroundColor: '#264734',
      paddingVertical: hp(1.1),
      borderRadius: wp(10),
      alignItems: 'center',
      width: '48%',
      alignSelf: 'flex-end',
      marginTop:wp(5),
      marginBottom:hp(1)
    },
    buttonText: {
      color: '#fff',
      fontSize: wp(4.5),
      fontWeight: '600',
    },
  });

export default styles;
