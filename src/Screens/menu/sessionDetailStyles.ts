import { StyleSheet } from 'react-native';

export default (wp: (v: number) => number, hp: (v: number) => number) =>
  StyleSheet.create({
    bgimg: { flex: 1, paddingTop: hp(3) },
    scrollContainer: {
      flexGrow: 1,
      paddingHorizontal: wp(5),
      paddingBottom: hp(6),
    },

    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
      gap:2,
      marginLeft:-5,
      marginTop:25
      
    },
    header: { fontSize: wp(5), fontWeight: '700', color: '#000' },

    logoRow: { alignItems: 'center', marginBottom: hp(2) },
    logoText: {
      fontSize: wp(7),
      fontWeight: '800',
      color: '#264734',
      letterSpacing: 1,
    },
    logo:{
      width:wp(45),
      marginVertical:wp(-3),
    },


    timeText: {
      fontSize: 18,
      color: '#000',
      marginBottom: hp(0.5),
      fontFamily: 'Poppins-SemiBold',
    },
    titleText: {
      fontSize: 18,
      color: '#000',
      fontFamily: 'Poppins-SemiBold',
      marginBottom: hp(2),
    },

    card: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 3,
    },

    doctorRow: { 
      flexDirection: 'row', 
      alignItems: 'center',
      marginTop:wp(-8),
      gap:10 
    },
    avatar: {
      
    },
    userimg:{width:wp(15),height:hp(15)},
    doctorName: { fontSize: wp(4), fontWeight: '700', color: '#000' },
    doctorRole: { fontSize: wp(3.2), color: '#9AA5A7', marginTop: hp(0.3) },

    subLabel: { fontSize: wp(3.6), color: '#000', fontWeight: '700' },
    linkText: {
      fontSize: wp(3.4),
      color: '#264734',
      marginTop: hp(0.5),
    },

    noteBox: {
      backgroundColor: '#fff',
      borderRadius: wp(2.5),
      borderWidth: 1,
      borderColor: '#000',
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(3),
      marginTop: hp(1),
    },
    noteText: { fontSize: wp(3.4), color: '#333' },

    primaryBtn: {
      backgroundColor: '#264734',
      borderRadius: wp(10),
      paddingVertical: hp(2),
      alignItems: 'center',
      marginTop: hp(2.5),
      shadowColor: '#000',
      shadowOpacity: 0.12,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 6,
      elevation: 3,
    },
    primaryBtnText: { color: '#fff', fontSize: wp(4.5), fontWeight: '800' },

    actionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(1.5),
    },
    secondaryBtn: {
      backgroundColor: '#E89C3C',
      flex: 1,
      borderRadius: wp(6),
      paddingVertical: hp(1.8),
      alignItems: 'center',
      marginRight: wp(3),
      elevation: 2,
    },
    secondaryBtnText: { color: '#fff', fontSize: wp(4), fontWeight: '700' },
    dangerBtn: {
      backgroundColor: '#F26565',
      flex: 1,
      borderRadius: wp(6),
      paddingVertical: hp(1.8),
      alignItems: 'center',
      elevation: 2,
    },
    dangerBtnText: { color: '#fff', fontSize: wp(4), fontWeight: '700' },

    prepareTitle: {
      fontSize: 15,
      fontFamily:'Poppins-Bold',
      color: '#000',
      marginBottom: hp(0.5),
      marginTop:wp(10)
    },
    prepareText: { fontSize: 13, color: '#333', fontFamily:'Poppins-Medium', },
  });
