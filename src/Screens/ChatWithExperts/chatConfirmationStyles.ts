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
    marginTop: hp(5),
    
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
    paddingBottom: hp(1),
  },
  timeText: {
    fontSize: wp(4),
    fontFamily: 'Urbanist-SemiBold',
    color: '#1A1A1A',
  },
  statusIcons: {
    flexDirection: 'row',
    gap: wp(1),
  },
  statusIcon: {
    width: wp(3),
    height: wp(3),
    backgroundColor: '#1A1A1A',
    borderRadius: wp(0.5),
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    padding: wp(2),
  },
  backIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: hp(10),
    marginBottom: hp(0),
  },
  logoImage: {
    width: wp(40),
    height: wp(30),
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: wp(8),
    fontFamily: 'Urbanist-Bold',
    color: '#264734',
    letterSpacing: 1,
  },
  confirmationContainer: {
    alignItems: 'center',
    paddingHorizontal: wp(8),
    marginBottom: hp(4),
  },
  confirmationTitle: {
    fontSize: 28,
    fontFamily: 'Quicksand-Bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: hp(1),
  },
  confirmationSubtitle: {
    fontSize: 15,
    fontFamily: 'Quicksand-Regular',
    fontWeight: 400,
    color: '#000',
    textAlign: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: hp(6),
  },
  profileImage: {
    width: wp(35),
    height: wp(35),
    borderRadius: wp(18),
    borderWidth: wp(0.5),
    borderColor: '#E5E7EB',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: wp(0),
    marginTop: hp(2),
  },
  startChatButton: {
    backgroundColor: '#264734',
    borderRadius: wp(10),
    paddingVertical: hp(2),
    paddingHorizontal: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(85),
  },
  startChatButtonText: {
    color: '#FFFFFF',
    fontSize: wp(4.5),
    fontFamily: 'Urbanist-SemiBold',
  },
});

export default styles; 