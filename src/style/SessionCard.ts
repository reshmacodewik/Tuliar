import React from 'react';
import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any, rf: any) =>
  StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(4),
      marginBottom: hp(2),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
    },
    rowTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: hp(2),
    },
    rowLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    avatar: {
      width: wp(20),
      height: wp(20),
      borderRadius: wp(10),
      marginRight: wp(3),
    },
    name: {
      fontSize: 18,
      fontWeight: '700',
      color: '#000',
      fontFamily: 'Poppins-Bold',
    },
    date: {
      fontSize: 14,
      color: '#000',
      marginTop: hp(1),
      fontFamily: 'Quicksand-Regular',
    },
    issue: {
      fontSize: 13,
      fontWeight: '700',
      color: '#000',
      marginTop: hp(0.2),
      fontFamily: 'Quicksand-Bold',
    },
    rowRight: {
      alignItems: 'flex-end',
    },
    time: {
      fontSize: 13,
      color: '#000',
      fontFamily: 'Quicksand-Medium',
      marginTop: hp(0.5),
    },
    price: {
      fontSize: 13,
      fontWeight: '700',
      color: '#000',
      fontFamily: 'Quicksand-Bold',
    },
    rowBtns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(1),
    },
    primaryBtn: {
      flex: 1,
      backgroundColor: '#1F3827',
      paddingVertical: hp(1),
      borderRadius: wp(10),
      alignItems: 'center',
      marginRight: wp(2),
    },
    primaryBtnn: {
      flex: 1,
      backgroundColor: '#1F3827',
      paddingVertical: hp(1),
      borderRadius: wp(10),
      paddingHorizontal: wp(2),
      alignItems: 'center',
      marginRight: wp(2),
    },
    primaryBtnText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: rf(13),
    },
    ghostBtn: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#1F3827',
      paddingVertical: hp(1),
      borderRadius: wp(10),
      alignItems: 'center',
    },
    ghostBtnText: {
      color: '#1F3827',
      fontWeight: '600',
      fontSize: rf(13),
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalCard: {
      width: '95%',
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(5),
     
    },
    closeBtn: {
      alignSelf: 'flex-end',
    },
    avatarLarge: {
      width: wp(20),
      height: wp(20),
      borderRadius: wp(10),
      alignSelf: 'center',
      marginBottom: hp(1.5),
    },
    modalName: {
      fontSize: 16,
      fontWeight: '700',
      textAlign: 'center',
      marginVertical: hp(0.5),
      fontFamily: 'Poppins-Bold',
      color: '#000',
    },
    modalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: hp(0.5),
    },
    divider: {
      height: 1,
      backgroundColor: '#E0E0E0',
    },
    issusetxt: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 14,
      fontWeight: '700',
      color: '#000',
    },
    issuseprice: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 14,
    },
    confirmText: {
      fontSize: rf(14),
      color: '#000',
      textAlign: 'center',
      marginBottom: hp(2),
    },
    confirmBtns: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: hp(1),
    },
  });
export default styles;
