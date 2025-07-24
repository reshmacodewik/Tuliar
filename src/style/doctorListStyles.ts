import { StyleSheet } from 'react-native';

const styles = (wp: any, hp: any) =>
  StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: wp(4),
      paddingTop: hp(5),
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      width: '100%',
      alignItems:"center",
      justifyContent:'space-between',
    },
    column50: {
      flexDirection: 'column',
      width: '48.50%',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    logo: {
      width: wp(32),
      height: hp(7),
      resizeMode: 'contain',
      marginBottom: hp(2),
      marginTop: hp(2),
    },
    header: {
      fontSize: wp(6),
      fontFamily: 'Urbanist-SemiBold',
      color: '#000',
      textAlign: 'center',
      marginBottom: hp(3),
    },
    subheader: {
      fontSize: wp(4.5),
      fontFamily: 'Montserrat-Medium',
      color: '#222',
      textAlign: 'center',
      marginBottom: hp(2),
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      width: '100%',
    },
    avatarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      width: '100%',
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
      alignItems: 'flex-start',
      borderWidth: 2,
      borderColor: 'transparent',
      padding:12
    },
    cardSelected: {
      borderColor: '#264734',
    },
    nameContainer: {
      alignItems: 'center',
      marginLeft: hp(1),
    },
    avatar: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(6),
      marginBottom: hp(1),
      alignSelf: 'center',
 
    },
    name: {
      fontSize: 14,
      fontFamily: 'Poppins-Bold',
      color: '#264734',
      marginTop: hp(0),
      marginBottom: hp(-0.5),
 
    },
    exp: {
      fontSize: wp(3.5),
      fontFamily: 'QuickSand-Bold',
      color: '#264734',
      marginBottom: hp(1),
    },
    iconRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(0.5),
      gap:5
    },
    icon: {
      width: wp(7),
      height: wp(7),
      resizeMode: 'contain',
      marginRight: 0,
    
    },
    priceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 0,
      gap:4
    },
    price: {
      fontSize: 8,
      color: '#000',
      fontFamily: 'Poppins-Medium',
      marginRight: 0,
     
    },
    buttonRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 4,
      width: '100%',
      alignItems:"center",
      justifyContent:'space-between',
      marginTop:10,
    },
    btnprimary: {
      textAlign:"center",
      fontSize: 9,
      borderWidth: 2,
      borderColor: '#264734',
      backgroundColor: '#264734',
      borderRadius: wp(7),
      padding:5,
      paddingHorizontal:8,
      color: '#fff',
      fontWeight: 'bold',
      fontFamily: 'Poppins',
      width:"100%",
    },
    btnprimaryoutline: {
      textAlign:"center",
      fontSize: 9,
      borderWidth: 2,
      borderColor: '#264734',
      backgroundColor: 'transparent',
      borderRadius: wp(7),
      padding:5,
      paddingHorizontal:8,
      color: '#264734',
      fontWeight: 'bold',
      fontFamily: 'Poppins',
      width:"100%",
    },
    widthfit: {
      width: '48%',
    },
  });

export default styles;
