import { StyleSheet } from 'react-native';

export default (wp: (v: number) => number, hp: (v: number) => number) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      paddingTop: hp(6),
    },

    scrollContainer: {
      flexGrow: 1,
      paddingHorizontal: wp(5),
      paddingBottom: hp(15), // Space for bottom navigation
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(3),
      marginLeft: wp(-2),
    },

    headerText: {
      fontSize: wp(5),
      fontWeight: '700',
      marginLeft: wp(2),
      color: '#000',
    },

    // Profile Section
    profileSection: {
      alignItems: 'center',
      marginBottom: hp(4),
    },

    profileOptions: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: hp(2),
    },

    profileOption: {
      width: wp(20),
      height: wp(20),
      borderRadius: wp(10),
      marginHorizontal: wp(2),
      position: 'relative',
      borderWidth: 2,
      borderColor: 'transparent',
    },

    selectedProfile: {
      borderWidth: 3,
    },

    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: wp(10),
    },

    avatarPlaceholder: {
      width: '100%',
      height: '100%',
      borderRadius: wp(10),
      backgroundColor: '#FF6B35',
      justifyContent: 'center',
      alignItems: 'center',
    },

    editIcon: {
      position: 'absolute',
      bottom: -wp(1),
      right: -wp(1),
      width: wp(6),
      height: wp(6),
      borderRadius: wp(3),
      backgroundColor: '#264734',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#fff',
    },

    changeProfileButton: {
      marginBottom: hp(1),
    },

    changeProfileText: {
      fontSize: wp(4),
      color: '#666',
      fontWeight: '500',
    },

    visibilityInfo: {
      alignItems: 'center',
    },

    visibilityText: {
      fontSize: wp(3.5),
      color: '#317D35',
      fontWeight: '500',
      textAlign: 'center',
      lineHeight: hp(2.5),
    },

    // Form Container
    formContainer: {
      marginBottom: hp(4),
      marginHorizontal: wp(5),
    },

    inputGroup: {
      marginBottom: hp(3),
    },

    inputLabel: {
      fontSize: wp(4),
      fontWeight: '600',
      color: '#333',
      marginBottom: hp(1),
    },

    textInput: {
      backgroundColor: '#fff',
      borderRadius: wp(10),
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
      fontSize: wp(4),
      color: '#333',
      borderWidth: 1,
      borderColor: '#E0E0E0',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },

    helperText: {
      fontSize: wp(3.5),
      color: '#317D35',
      fontWeight: '500',
      marginTop: hp(0.5),
    },

    // Date Picker Styles
    datePickerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    datePicker: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: wp(2),
      borderWidth: 1,
      borderColor: '#E0E0E0',
      marginHorizontal: wp(1),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(2),
      paddingVertical: hp(1.5),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },

    picker: {
      flex: 1,
      height: hp(6),
    },

    datePickerText: {
      flex: 1,
      fontSize: wp(4),
      color: '#333',
    },

    // Phone Number Styles
    phoneContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    countryCodePicker: {
      width: wp(20),
      backgroundColor: '#fff',
      borderRadius: wp(2),
      borderWidth: 1,
      borderColor: '#E0E0E0',
      marginRight: wp(2),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(2),
      paddingVertical: hp(1.5),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },

    phoneInput: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: wp(2.5),
      paddingHorizontal: wp(4),
      paddingVertical: hp(1.5),
      fontSize: wp(4),
      color: '#333',
      borderWidth: 1,
      borderColor: '#E0E0E0',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },

    // Update Button
    updateButton: {
      backgroundColor: '#264734',
      borderRadius: wp(10),
      paddingVertical: hp(2),
      paddingHorizontal: wp(4),
      marginHorizontal:wp(5),
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: hp(2),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },

    updateButtonText: {
      color: '#fff',
      fontSize: wp(4.5),
      fontWeight: '700',
    },

    // Bottom Navigation
    bottomNav: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(2),
      borderTopWidth: 1,
      borderTopColor: '#E0E0E0',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 8,
    },

    navItem: {
      alignItems: 'center',
      flex: 1,
    },

    navText: {
      fontSize: wp(3),
      color: '#666',
      fontWeight: '500',
      marginTop: hp(0.5),
    },

    activeNavText: {
      color: '#FF6B35',
      fontWeight: '600',
    },

    checkInButton: {
      backgroundColor: '#4CAF50',
      width: wp(16),
      height: wp(16),
      borderRadius: wp(8),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp(-2),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 6,
    },

    checkInText: {
      color: '#fff',
      fontSize: wp(2.5),
      fontWeight: '600',
      marginTop: hp(0.5),
    },

    // Modal Styles
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalContent: {
      backgroundColor: '#fff',
      borderRadius: wp(5),
      width: wp(50),
      maxHeight: hp(60),
    
      padding: wp(3),
    },

    modalHeader: {
      alignItems: 'center',
      marginBottom: hp(2),
      paddingBottom: hp(1),
    },

    modalTitle: {
      fontSize: wp(4.5),
      fontWeight: '600',
      color: '#333',
      textAlign: 'center',
      marginTop: hp(2),
    },

    modalScrollView: {
      maxHeight: hp(45),
    },

    modalItem: {
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(3),
      borderBottomWidth: 1,
      borderBottomColor: '#F0F0F0',
    },

    modalItemText: {
      fontSize: wp(4),
      color: '#333',
      textAlign: 'center',
    },

    // Avatar Modal Styles
    avatarModalContent: {
      backgroundColor: '#fff',
      borderRadius: wp(8),
      width: wp(80),
      maxHeight: hp(70),
      height:hp(42),
      padding: wp(4),
    },

    avatarGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: hp(0),
      paddingHorizontal: hp(2),
    },

    avatarOption: {
      width: wp(15),
      height: wp(15),
      borderRadius: wp(7.5),
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: wp(2),
      marginVertical: hp(1),
      borderWidth: 2,
    },

    selectedAvatarOption: {
      borderWidth: 3,
      borderColor: '#2E7D32',
    },

    changeAvatarButton: {
      backgroundColor: '#264734',
      borderRadius: wp(10),
      paddingVertical: hp(2),
      paddingHorizontal: wp(4),
      marginHorizontal: hp(6),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: hp(2),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },

    changeAvatarButtonText: {
      color: '#fff',
      fontSize: wp(4.5),
      fontWeight: '700',
    },

    // Photo Modal Styles
    photoModalContent: {
      backgroundColor: '#fff',
      borderRadius: wp(8),
      width: wp(80),
      alignItems: 'center',
      paddingVertical: hp(4),
      paddingHorizontal: wp(4),
    },
    photoModalTitle: {
      fontSize: wp(4.5),
      fontWeight: '700',
      color: '#000',
      marginBottom: hp(3),
      textAlign: 'center',
    },
    mediaButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    mediaCircle: {
      width: wp(18),
      height: wp(18),
      borderRadius: wp(9),
      backgroundColor: '#E89C3C',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: hp(1.5),
    },
    mediaText: {
      fontSize: wp(3.5),
      color: '#333',
    },
  });
