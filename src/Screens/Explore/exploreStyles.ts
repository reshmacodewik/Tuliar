import { StyleSheet } from 'react-native';

export default (wp: (v: number) => number, hp: (v: number) => number) =>
  StyleSheet.create({
    bgimg: { flex: 1, paddingTop: hp(3) },
    scrollContainer: { flexGrow: 1, paddingHorizontal: wp(5), paddingBottom: hp(6) },

    headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: hp(2) },

    logoBlock: { alignItems: 'center', marginBottom: hp(4) },
    logo: {width:wp(40),height:hp(5),marginBottom:hp(3) },
    subtitle: { fontSize: wp(4.5), fontWeight: '700', color: '#000', marginTop: hp(0.5) },
    tagline: { fontSize: wp(3.5), color: '#333', textAlign: 'center', marginTop: hp(0.8) },

    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      marginBottom: hp(2),
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 3,
      gap: wp(3),
    },
    cardTitle: { fontSize: wp(4.2), fontWeight: '800', color: '#000', marginBottom: hp(0.6) },
    cardDesc: { fontSize: wp(3.4), color: '#333' },

    ctaBtn: {
      backgroundColor: '#264734',
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(4),
      borderRadius: wp(6),
      alignSelf: 'flex-start',
    },
    ctaText: { color: '#fff', fontSize: wp(3.4), fontWeight: '700' },
  });


