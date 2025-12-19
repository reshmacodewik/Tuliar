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
    marginTop: hp(3),
   
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    padding: wp(2),
  },
  logo: {
    width: wp(32),
    height: hp(7),
    resizeMode: 'contain',
    marginBottom: hp(2),
    marginTop: hp(2),
  },
  backIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: hp(6),
    marginBottom: hp(0),
  },
  logoText: {
    fontSize: wp(8),
    fontFamily: 'Urbanist-Bold',
    color: '#264734',
    letterSpacing: 1,
  },
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(20),
    marginBottom: hp(6),
  },
  mainQuestion: {
    fontSize: 20,
    fontFamily: 'Quicksand-SemiBold',
    color: '#000',
    textAlign: 'center',
    marginBottom: hp(1),
    fontWeight: 600,
    lineHeight: wp(7.5),
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Quicksand-Regular',
    color: '#000',
    textAlign: 'center',
    lineHeight: wp(4.5),
    fontWeight: 400,
  },
  cardsContainer: {
    paddingHorizontal: wp(6),
    gap: hp(3),
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp(4),
    padding: wp(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: hp(3),
  },
  iconContainer: {
    marginRight: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  peerIcon: {
    width: wp(12),
    height: wp(12),
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  speechBubble1: {
    position: 'absolute',
    width: wp(8),
    height: wp(6),
    backgroundColor: '#3B82F6',
    borderRadius: wp(4),
    top: wp(1),
    left: wp(1),
  },
  speechBubble2: {
    position: 'absolute',
    width: wp(6),
    height: wp(4),
    backgroundColor: '#F59E0B',
    borderRadius: wp(3),
    top: wp(3),
    right: wp(1),
  },
  dotsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: wp(2.5),
    left: wp(3),
    gap: wp(0.5),
  },
  dot: {
    width: wp(1),
    height: wp(1),
    backgroundColor: '#FFFFFF',
    borderRadius: wp(0.5),
  },
  aiIcon: {
    width: wp(12),
    height: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  aiBody: {
    width: wp(8),
    height: wp(8),
    backgroundColor: '#8B5CF6',
    borderRadius: wp(4),
    position: 'absolute',
  },
  aiEyes: {
    position: 'absolute',
    flexDirection: 'row',
    top: wp(2.5),
    gap: wp(1),
  },
  aiEye: {
    width: wp(1.5),
    height: wp(1.5),
    backgroundColor: '#FFFFFF',
    borderRadius: wp(0.75),
  },
  aiBase: {
    position: 'absolute',
    bottom: wp(0.5),
    width: wp(6),
    height: wp(1.5),
    backgroundColor: '#F59E0B',
    borderRadius: wp(0.75),
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginBottom: hp(0),
  },
  cardDescription: {
    fontSize: wp(3.5),
    fontFamily: 'Montserrat-Regular',
    color: '#6B7280',
    lineHeight: wp(4.5),
  },
  cardButton: {
    backgroundColor: '#264734',
    borderRadius: wp(10),
    paddingVertical: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  // Peer Chat Screen Styles
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
  peerHeader: {
    alignItems: 'center',
    paddingHorizontal: wp(8),
    marginTop: hp(8),
    marginBottom: hp(3),
  },
  peerTitle: {
    fontSize: 28,
    fontFamily: 'Quicksand-Bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: hp(1),
  },
  peerSubtitle: {
    fontSize: 15,
    fontFamily: 'Quicksand-Medium',
    color: '#000',
    textAlign: 'center',
    lineHeight: wp(4.5),
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    gap: wp(2),
    marginBottom: hp(3),
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.4),
    borderRadius: wp(2),
    gap: wp(1),
  },
  filterButtonText: {
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
    color: '#000',
  },
  filterArrow: {
   marginLeft: wp(-1.5),
   marginTop: hp(0.5),
  },
  peerScrollView: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  peerScrollContent: {
    paddingBottom: hp(3),
  },
  peerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp(4),
    padding: wp(4),
    marginBottom: hp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  peerCardContent: {
    flexDirection: 'row',
    marginBottom: hp(2),
  },
  peerImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    marginRight: wp(4),
  },
  peerInfo: {
    flex: 1,
  },
  peerName: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginBottom: hp(0.5),
  },
  peerDescription: {
    fontSize: 12,
    fontFamily: 'Quicksand-Medium',
    color: '#000',
    fontWeight: 400,
    marginBottom: hp(0),
  },
  peerMessage: {
    fontSize: wp(3.5),
    fontFamily: 'Montserrat-Regular',
    color: '#374151',
    lineHeight: wp(4.5),
  },
  chatNowButton: {
    backgroundColor: '#264734',
    borderRadius: wp(10),
    paddingVertical: hp(0.8),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: wp(5),
    marginTop: hp(-1),
    marginLeft: wp(20),
  },
  chatNowButtonText: {
    color: '#FFFFFF',
    fontSize: wp(3.5),
    fontFamily: 'Urbanist-SemiBold',
  },
  sectionTitle: {
  fontSize: 18,
  fontFamily: 'Quicksand-Bold',
  marginVertical: 12,
  marginHorizontal: 18,
},

});

export default styles; 