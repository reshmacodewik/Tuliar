import { StyleSheet } from 'react-native';

export const createSessionDetailsStyles = (wp: (percent: number) => number, hp: (percent: number) => number) => StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: wp(5),
  },
  
  // Header Styles
  header: {
    marginTop: hp(2),
    marginBottom: hp(4),
  },
  
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  
  backArrow: {
    fontSize: wp(8),
    color: '#000000',
    marginRight: wp(2),
    fontWeight: 'bold',
  },
  
  backText: {
    fontSize: wp(4.5),
    color: '#000000',
    fontWeight: '600',
  },
  
  logoContainer: {
    alignItems: 'center',
    marginBottom: hp(2),
  },
  
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  leafIcon: {
    position: 'relative',
    marginRight: wp(2),
  },
  
  leafBase: {
    width: wp(3),
    height: wp(3),
    backgroundColor: '#FF6B35',
    borderRadius: wp(1.5),
    position: 'absolute',
    bottom: 0,
    left: wp(1),
  },
  
  leafStem: {
    width: wp(0.5),
    height: wp(4),
    backgroundColor: '#22C55E',
    position: 'absolute',
    bottom: wp(1.5),
    left: wp(2.25),
  },
  
  logoText: {
    fontSize: wp(6),
    color: '#1F2937',
    fontWeight: 'bold',
  },
  
  // Session Overview Styles
  sessionOverview: {
    marginBottom: hp(4),
  },
  
  sessionDate: {
    fontSize: wp(4.5),
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  
  sessionTitle: {
    fontSize: wp(5),
    color: '#000000',
    fontWeight: 'bold',
  },
  
  // Therapist Card Styles
  therapistCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp(4),
    padding: wp(5),
    marginBottom: hp(4),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  
  therapistInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  
  therapistImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    marginRight: wp(4),
  },
  
  therapistDetails: {
    flex: 1,
  },
  
  therapistName: {
    fontSize: wp(4.5),
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: hp(0.5),
  },
  
  therapistTitle: {
    fontSize: wp(3.5),
    color: '#6B7280',
    fontWeight: '500',
  },
  
  sessionType: {
    marginBottom: hp(3),
  },
  
  onlineText: {
    fontSize: wp(4),
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  
  linkText: {
    fontSize: wp(3.5),
    color: '#3B82F6',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  
  notesSection: {
    marginTop: hp(2),
  },
  
  notesHeader: {
    fontSize: wp(4),
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  
  notesInput: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: wp(2),
    padding: wp(4),
    fontSize: wp(3.5),
    color: '#000000',
    backgroundColor: '#FFFFFF',
    minHeight: hp(12),
    textAlignVertical: 'top',
  },
  
  // Action Buttons Styles
  actionButtons: {
    marginBottom: hp(4),
  },
  
  joinButton: {
    backgroundColor: '#166534',
    borderRadius: wp(3),
    paddingVertical: hp(3),
    alignItems: 'center',
    marginBottom: hp(3),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  
  secondaryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp(3),
  },
  
  editButton: {
    flex: 1,
    backgroundColor: '#F59E0B',
    borderRadius: wp(3),
    paddingVertical: hp(2.5),
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  cancelButton: {
    flex: 1,
    backgroundColor: '#EF4444',
    borderRadius: wp(3),
    paddingVertical: hp(2.5),
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  
  // Preparation Section Styles
  preparationSection: {
    marginTop: 'auto',
    marginBottom: hp(4),
  },
  
  preparationHeader: {
    fontSize: wp(4),
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  
  preparationText: {
    fontSize: wp(3.5),
    color: '#000000',
    lineHeight: wp(5),
  },
});