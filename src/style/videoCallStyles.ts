import { StyleSheet } from 'react-native';

const styles = (wp: (val: number) => number, hp: (val: number) => number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#264C3F',
      position: 'relative',
    },
    doctorImage: {
      width: wp(100),
      height: hp(89),
      resizeMode: 'cover',
      borderBottomLeftRadius: wp(15),
      borderBottomRightRadius: wp(15),
    },
    topBar: {
      position: 'absolute',
      top: hp(5),
      left: wp(5),
      right: wp(5),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    doctorName: {
      color: '#fff',
      fontSize: wp(5),
      fontWeight: '600',
    },
    timerBox: {
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: wp(3),
      paddingHorizontal: wp(2.5),
      paddingVertical: hp(0.5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    timerText: {
      color: '#fff',
      fontSize: wp(3.5),
      fontWeight: '500',
    },
    userVideoBox: {
      position: 'absolute',
      bottom: hp(20),
      right: wp(5),
      borderRadius: wp(3),
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: '#fff',
    },
    userVideo: {
      width: wp(25),
      height: hp(15),
      resizeMode: 'cover',
    },
    controls: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingVertical: hp(3),
      backgroundColor: '#264C3F',
      position: 'absolute',
      gap: 15,
      bottom: 0,
      left: 0,
      right: 0,
    },
    controlButtonYellow: {
      backgroundColor: '#ECA14C',
      width: wp(15),
      height: wp(15),
      borderRadius: wp(7.5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    controlButtonRed: {
      backgroundColor: '#EB5757',
      width: wp(15),
      height: wp(15),
      borderRadius: wp(7.5),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles;
