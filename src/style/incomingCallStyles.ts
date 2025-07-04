const styles = (wp: any, hp: any) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incomingText: {
    fontSize: wp(5),
    color: '#264734',
    marginBottom: hp(3),
    fontFamily: 'Poppins-Light',
  },
  doctorImageContainer: {
    backgroundColor: '#fff',
    padding: wp(2),
    borderRadius: wp(5),
    marginBottom: hp(2),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  outerBox: {
    width: wp(60),
    height: wp(60),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  innerBox: {
    width: wp(50),
    height: wp(50),
    backgroundColor: '#fff',
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
     
  },
  doctorImage: {
    width: wp(45),
    height: wp(45),
    borderRadius: wp(5),
    resizeMode: 'cover',
  },
  doctorName: {
    fontSize: wp(5),
    color: '#264734',
    fontWeight: '700',
    marginBottom: hp(5),
    marginTop: hp(3),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(39),
  },
  declineButton: {
    backgroundColor: '#D12E34',
    width: wp(15),
    height: wp(15),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  acceptButton: {
    backgroundColor: '#32CE8B',
    width: wp(15),
    height: wp(15),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: wp(8),
    height: wp(8),
    tintColor: '#fff',
    resizeMode: 'contain',
  
  },
});

export default styles;
