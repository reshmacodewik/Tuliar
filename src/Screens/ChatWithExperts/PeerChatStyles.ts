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
    marginTop: hp(1),
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  backButton: {
    paddingVertical: hp(2),
    paddingRight: wp(2),
    
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  
  },
  headerProfileImage: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(6),
    marginRight: wp(3),
  },
  headerTitle: {
    fontSize: wp(4.5),
    fontFamily: 'Quicksand-Bold',
    color: '#1A1A1A',
  },
  headerIcon: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    marginBottom: hp(0.5),
  },

  // Messages Container
  messagesContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  messagesContent: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    justifyContent: 'flex-end',
    flexGrow: 1,
  },

  // Message Styles
  aiMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: hp(2),
    marginLeft: wp(3),
  },
  userMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: hp(2),
    justifyContent: 'flex-end',
  },
  aiMessageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
    gap: wp(2),
  },
  userMessageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
    gap: wp(2),
  },
  aiProfileImage: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    marginRight: wp(3),
  },
  aiMessageBubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp(4),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    maxWidth: wp(60),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  userMessageBubble: {
    backgroundColor: '#264734',
    borderRadius: wp(4),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    maxWidth: wp(60),
  },
  aiMessageText: {
    fontSize: wp(3.8),
    fontFamily: 'Quicksand-Regular',
    color: '#1A1A1A',
    lineHeight: wp(5),
  },
  userMessageText: {
    fontSize: wp(3.8),
    fontFamily: 'Quicksand-Regular',
    color: '#FFFFFF',
    lineHeight: wp(5),
  },
  aiTimestamp: {
    fontSize: wp(3),
    fontFamily: 'Poppins-Medium',
    color: '#000',
    alignSelf: 'flex-end',
  },
  userTimestamp: {
    fontSize: wp(3),
    fontFamily: 'Poppins-Medium',
    color: '#000',
    alignSelf: 'flex-end',
  },

  // Quick Replies
  quickRepliesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: hp(1),
    marginLeft: wp(13),
  },
  quickReplyButton: {
    backgroundColor: '#3B82F6',
    borderRadius: wp(6),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    marginRight: wp(2),
    marginBottom: hp(1),
  },
  quickReplyText: {
    fontSize: wp(3.2),
    fontFamily: 'Quicksand-Medium',
    color: '#FFFFFF',
  },

  // Input Container
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: wp(6),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    fontSize: wp(3.8),
    fontFamily: 'Quicksand-Regular',
    color: '#1A1A1A',
    marginRight: wp(3),
    maxHeight: hp(15),
    borderWidth: 1.66,
    borderColor: '#E2E8F0',
   
  },
  sendButton: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonImage: {
    width: wp(8),
    height: wp(8),
  },

  // Legacy styles (keeping for compatibility)
  legacyBackButton: {
    position: 'absolute',
    zIndex: 1,
    padding: wp(2),
  },
  peerHeader: {
    alignItems: 'center',
    paddingHorizontal: wp(8),
    marginTop: hp(8),
    marginBottom: hp(3),
  },
  peerTitle: {
    fontSize: wp(7),
    fontFamily: 'Quicksand-Bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: hp(1),
  },
  peerSubtitle: {
    fontSize: wp(3.8),
    fontFamily: 'Quicksand-Regular',
    color: '#000',
    textAlign: 'center',
    lineHeight: wp(5),
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    gap: wp(2),
    marginBottom: hp(3),
    flexWrap: 'wrap',
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
    fontSize: wp(3.2),
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
    fontSize: wp(4.5),
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginBottom: hp(0.5),
  },
  peerDescription: {
    fontSize: wp(3.2),
    fontFamily: 'Quicksand-Regular',
    color: '#000',
    fontWeight: '400',
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
    alignSelf: 'flex-end',
    paddingHorizontal: wp(5),
    marginTop: hp(-1.8),
  },
  chatNowButtonText: {
    color: '#FFFFFF',
    fontSize: wp(3.5),
    fontFamily: 'Urbanist-SemiBold',
  },
});

export default styles;
