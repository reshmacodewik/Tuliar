import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function wp(percentage: number): number {
  return (width * percentage) / 100;
}
function hp(percentage: number): number {
  return (height * percentage) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButton: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderRadius: wp(5),
    paddingHorizontal: wp(5), 
    paddingVertical: hp(0), 
    borderColor: '#E2E8F0',
  },

  skipText: {
    color: '#000',
    fontSize: wp(4),
    fontWeight: '400',
  },
  image: {
   height: '100%',
    resizeMode: 'cover',
  },
    content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 30,
     marginTop: hp(0),
    marginBottom: hp(5),
  },
    titleBold: {
    fontFamily: 'Urbanist-SemiBold',
    color: '#000',
   
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  dot: {
    width: wp(4.5),
    height: wp(1),
    borderRadius: wp(1.25),
    backgroundColor: '#C0DDEF',
    marginHorizontal: wp(1),
  },
  activeDot: {
    width: wp(15.5),
    height: wp(1.0),
    borderRadius: wp(1.25),
    backgroundColor: '#275258',
    marginHorizontal: wp(1),
  },
  title: {
    fontSize: wp(8.5),
    color: '#000',
    marginTop: hp(1),
    textAlign:'center',
    fontFamily:"Urbanist-SemiBold"
  },
  desc: {
    textAlign: 'center',
    color: '#000',
    fontSize: wp(3.5),
    marginTop: hp(1),
    width: wp(80),
    lineHeight:24,
    fontFamily:"Montserrat-Light"
   
  },
  button: {
    backgroundColor: '#264734',
    borderRadius: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(60),
    height: hp(6),
    marginTop: hp(1.5),
  },
  buttonText: {
    color: '#FFF',
    fontSize: wp(4),
    fontWeight: '600',
  },
  bottomText: {
    color: '#000',
    fontSize: wp(3.5),
    marginTop: hp(1.5),
    fontFamily:"Poppins-Light"
  },
  signUpText: {
    color: '#275258',
    fontFamily:"Poppins-Medium"
  },
});

export default styles;
