import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

function wp(percentage: number): number {
  return (width * percentage) / 100;
}

function hp(percentage: number): number {
  return (width * percentage) / 100;
}

export default StyleSheet.create({
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
  container: {

    paddingHorizontal: 20,
    paddingTop: 15,
  },
  header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: hp(0),
      paddingTop: hp(0),
      marginLeft:wp(-2),
      marginBottom:wp(2)
     
    },
    backButton: {
      padding: wp(2),
      marginRight: wp(3),
    },
    headerTitle: {
      fontSize: wp(5),
      fontWeight: '600',
      color: '#000000',
      marginLeft: wp(-3),
    },
  section: {
    marginBottom: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
   
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fbe3a7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 18,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  topicHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  topicButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  topicText: {
    fontSize: 15,
    fontWeight: '500',
  },
  assistText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  talkButton: {
    backgroundColor: '#23472b',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 32,
  },
  talkButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});