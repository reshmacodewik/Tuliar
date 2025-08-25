import { StyleSheet } from 'react-native';

export default (wp: (v: number) => number, hp: (v: number) => number) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      paddingTop: hp(3),
      paddingHorizontal: wp(5),
    },
                    
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
      marginLeft: wp(-2),
    },
    headerText: {
      fontSize: wp(5),
      fontWeight: '700',
      marginLeft: wp(2),
    },
    sectionTitle: {
      fontSize: wp(4),
      fontWeight: '700',
      marginTop: hp(2),
      marginBottom: hp(1),
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: hp(1.3),
      paddingHorizontal: wp(4),
      marginBottom: hp(1.5),
      shadowColor: '#000',
      shadowOpacity: 0.04,
      shadowRadius: 4,
      elevation: 1,
    },
    deletecard: {
      backgroundColor: '#D12E34',
     borderRadius: wp(3),
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: hp(1.3),
      paddingHorizontal: wp(4),
      marginBottom: hp(1.5),
      shadowColor: '#000',
      shadowOpacity: 0.04,
      shadowRadius: 4,
      elevation: 1,
    },
    cardIcon: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(5),
      backgroundColor: '#FFE7B9',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: wp(3),
    },
    deletecardText: {
       fontSize: wp(4),
       color: '#fff',
      fontWeight: '700',
      flex: 1,
    },
    cardText: {
      fontSize: wp(4),
      fontWeight: '700',
      flex: 1,
    },
    switch: {
      marginLeft: wp(2),
    },
    dropdown: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end',
    },
    dropdownText: {
      fontSize: wp(4),
      fontWeight: '500',
      marginRight: wp(1),
    },
    deleteBtn: {
      backgroundColor: '#E53935',
      borderRadius: wp(3),
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: hp(2),
      paddingHorizontal: wp(4),
      marginTop: hp(2),
      justifyContent: 'center',
    },
    deleteText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: wp(4),
      marginLeft: wp(2),
    },
  });