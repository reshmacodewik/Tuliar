// TherapistList.styles.ts
import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

// % helpers
export const wp = (p: number) => (width * p) / 100;
export const hp = (p: number) => (height * p) / 100;

// responsive font
export const rf = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size * (width / 375)));

const CARD_RADIUS = 14;
const GREEN = '#1F3827';
const GREEN_600 = '#2D533F';
const BG = '#F6FAF7';

export default function stylesFactory() {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: wp(2),
    },
    scrollContent: {
      paddingBottom: hp(10),
    },
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    mainContainer: {
      flex: 1,
      position: 'relative',
    },
    screen: {
      flex: 1,
      paddingHorizontal: wp(3),
      paddingTop: hp(1),
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: hp(0.5),
    },

    backBtn: {
      width: wp(10),
      height: hp(4.6),
      alignItems: 'flex-start',
      justifyContent: 'center',
    },

    findBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: GREEN,
      paddingVertical: hp(1),
      paddingHorizontal: wp(4),
      borderRadius: 24,
      gap: wp(1.5),
      alignSelf: 'flex-end',
    },

    findBtnText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: rf(13.5),
    },

    title: {
      fontSize: 28,
      fontWeight: '700',
      color: '#111',
      fontFamily:'Quicksand-Bold',
      marginTop: hp(1),
      letterSpacing: 0.2,
      textAlign:'center'
    },

    subtitle: {
      fontSize: rf(12.8),
      color: '#000',
      marginTop: hp(0.8),
      lineHeight: rf(18),
       textAlign:'center'
    },

    listContent: {
      paddingVertical: hp(2),
      paddingBottom: hp(3.5),
      gap: hp(1.2),
    },

    card: {
      backgroundColor: '#fff',
      borderRadius: CARD_RADIUS,
      paddingVertical: hp(1.6),
      paddingHorizontal: wp(4),
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 4 },
      elevation: 3,
    },

    rowTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    rowLeft: { flexDirection: 'row', alignItems: 'center' },

    avatar: {
      width: wp(16),
      height: wp(16),
      borderRadius: wp(8),
      marginRight: wp(3),
    },

    name: {
      fontSize: rf(16.5),
      fontWeight: '800',
      color: '#0D0D0D',
    },

    actionIconWrap: {
      width: wp(9),
      height: wp(9),
      borderRadius: wp(9) / 2,
      backgroundColor: '#EAF2EC',
      alignItems: 'center',
      justifyContent: 'center',
    },

    rowMid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(1.2),
    },

    midLeft: { maxWidth: '65%' },
    midRight: { alignItems: 'flex-end' },

    date: {
      fontSize: rf(13.5),
      color: '#1A1E1C',
      marginBottom: hp(0.3),
    },

    issue: {
      fontSize: rf(12.5),
      color: '#7C8681',
    },

    time: {
      fontSize: rf(13.5),
      color: '#1A1E1C',
      marginBottom: hp(0.3),
    },

    price: {
      fontSize: rf(12.5),
      color: '#7C8681',
      fontWeight: '600',
    },

    rowBtns: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: hp(1.6),
    },

    primaryBtn: {
      flex: 1,
      backgroundColor: GREEN,
      paddingVertical: hp(1),
      borderRadius: 26,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: wp(2.5),
    },

    primaryBtnText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: rf(13.2),
      letterSpacing: 0.2,
    },

    ghostBtn: {
      flex: 1,
      paddingVertical: hp(1.),
      borderRadius: 26,
      borderWidth: 1.5,
      borderColor: GREEN_600,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: wp(2.5),
      backgroundColor: '#fff',
    },

    ghostBtnText: {
      color: GREEN_600,
      fontWeight: '700',
      fontSize: rf(13.2),
      letterSpacing: 0.2,
    },
  });
}
