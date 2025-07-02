import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    container: {
      padding: wp(4),
      marginTop: hp(2),
     
    },
     bgimg:{
    flex: 1, 
    resizeMode: 'cover' 
  },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(3),
    },
    logo: {
      width: wp(35),
      height: hp(6),
      resizeMode: 'contain',
    },
    rightHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: wp(6),
      height: wp(6),
      marginRight: wp(4),
    },
    avatar: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(4),
    },
    featureRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: hp(3),
    },
    featureButton: {
      width: wp(21),
      alignItems: 'center',
      padding: wp(2),
      marginBottom: hp(-2),
      borderWidth: 1,
      borderColor: '#F97316',
      borderRadius: wp(3),
     
    },
    featureIcon: {
      width: wp(8),
      height: wp(8),
      marginBottom: hp(1),
      resizeMode: 'contain',
    },
    featureText: {
      textAlign: 'center',
      fontSize: wp(2.8),
    },
    sectionTitle: {
      fontSize: wp(5),
      fontWeight: '700',
      marginBottom: hp(0.8),
    },
    sessionCard: {
      width: wp(55),
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(3),
      marginRight: wp(4),
      marginBottom: wp(2),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    sessionImage: {
      width: '100%',
      height: hp(12),
      borderRadius: wp(0),
      marginBottom: hp(1),
    },
    sessionTitle: {
      fontWeight: 'bold',
      fontSize: wp(4),
      marginBottom: hp(0.5),
    },
    sessionTime: {
      fontSize: wp(3.3),
      color: '#555',
      marginBottom: hp(1),
    },
    sessionButton: {
      backgroundColor: '#003300',
      paddingVertical: hp(1),
      borderRadius: wp(10),
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: wp(3.5),
      fontWeight: 'bold',
    },
    eventCard: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(3),
      marginBottom: hp(2),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    eventImage: {
      width: wp(22),
      height: wp(30),
      borderRadius: wp(2),
      marginRight: wp(4),
    },
    eventContent: {
      flex: 1,
    },
    eventTag: {
      backgroundColor: '#003300',
      alignSelf: 'flex-start',
      paddingHorizontal: wp(2),
      paddingVertical: wp(0.5),
      borderRadius: wp(2),
      marginBottom: hp(1),
    },
    eventTagText: {
      color: '#fff',
      fontSize: wp(3),
    },
    eventTitle: {
      fontWeight: '700',
      fontSize: wp(3.5),
      marginBottom: hp(0.5),
    },
    eventDesc: {
      fontSize: wp(3.2),
      color: '#555',
    },
    feedCard: {
  backgroundColor: '#fff',
  padding: wp(4),
  borderRadius: wp(3),
  marginBottom: hp(2),
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
},
feedHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: hp(1),
},
feedAvatar: {
  width: wp(8),
  height: wp(8),
  borderRadius: wp(4),
  marginRight: wp(2),
},
feedUser: {
  fontWeight: '600',
  fontSize: wp(4),
},
feedText: {
  fontSize: wp(3.5),
  color: '#333',
  marginVertical: hp(1),
},
feedStats: {
  flexDirection: 'row',
  gap:15,
  paddingTop: hp(1),
  
},

  });

export default styles;
