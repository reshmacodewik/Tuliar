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
    marginTop: hp(2),
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
    marginLeft:wp(-2)
    
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
  headerTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 15,
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
  timeWarningContainer: {
  alignSelf: 'center',
  backgroundColor: '#FFFFFF',
  paddingVertical: 10,
  paddingHorizontal: 18,
  borderRadius: 20,
  marginVertical: 12,
},

timeWarningText: {
  fontSize: 13,
  color: '#000',
  fontWeight: '500',
  textAlign: 'center',
},

chatPausedCard: {
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  padding: 16,
  marginHorizontal: 16,
  marginTop: 20,
},

chatPausedTitle: {
  fontSize: 16,
  fontWeight: '700',
  color: '#000',
  marginBottom: 6,
},

chatPausedSubtitle: {
  fontSize: 13,
  color: '#6B7280',
  marginBottom: 16,
},

chatPausedActions: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 16,
},

topUpButton: {
  backgroundColor: '#1F3827',
  paddingVertical: 10,
  width: '48%',
  borderRadius: 20,
},

topUpButtonText: {
  color: '#FFF',
  fontWeight: '600',
  textAlign: 'center',
},

cancelButton: {
  borderWidth: 1,
  borderColor: '#1F3827',
  paddingVertical: 10,
  width: '48%',
  borderRadius: 20,
},

cancelButtonText: {
  color: '#1F3827',
  fontWeight: '600',
  textAlign: 'center',
},

urgentHelpBox: {
  backgroundColor: '#F9FAFB',
  borderRadius: 12,
  padding: 14,
  borderWidth: 1,
  borderColor: '#E5E7EB',
  marginBottom: 16,
},

urgentTitle: {
  fontSize: 14,
  fontWeight: '700',
  marginBottom: 4,
},

urgentSubtitle: {
  fontSize: 12,
  color: '#6B7280',
  marginBottom: 12,
},

requestApprovalButton: {
  backgroundColor: '#1F3827',
  paddingVertical: 10,
  borderRadius: 20,
  alignItems: 'center',
  marginHorizontal: 50,
},

requestApprovalText: {
  color: '#FFF',
  fontWeight: '600',
},

inputDisabled: {
  backgroundColor: '#F3F4F6',
},

sendDisabled: {
  opacity: 0.4,
},
headerSubtitle: {
  fontSize: 12,
  color: '#6B7280',
  marginTop: 2,
},
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.4)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContainer: {
  width: '90%',
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 20,
},
modalTitle: {
  fontSize: 18,
  fontWeight: '700',
  textAlign: 'center',
},
modalSubtitle: {
  fontSize: 14,
  color: '#6B7280',
  textAlign: 'center',
  marginVertical: 8,
},
planOption: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#E5E7EB',
  borderRadius: 12,
  padding: 14,
  marginTop: 12,
},
planSelected: {
  borderColor: '#14532D',
  backgroundColor: '#F0FDF4',
},
planLabel: {
  fontSize: 15,
  fontWeight: '600',
},
planPrice: {
  fontSize: 15,
  fontWeight: '700',
},
planNote: {
  fontSize: 12,
  color: '#6B7280',
  marginTop: 4,
},
payButton: {
  backgroundColor: '#14532D',
  paddingVertical: 14,
  borderRadius: 28,
  marginTop: 20,
},
payButtonText: {
  color: '#fff',
  textAlign: 'center',
  fontSize: 16,
  fontWeight: '700',
},
cancelText: {
  textAlign: 'center',
  marginTop: 12,
  fontSize: 14,
  color: '#374151',
},


});

export default styles;
