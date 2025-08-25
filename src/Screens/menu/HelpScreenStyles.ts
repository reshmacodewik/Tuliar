import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf6fb',
    paddingHorizontal: 16,
    paddingTop: 30,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: -3,
    flexDirection:'row',
    marginBottom:20
  },
  headerText: {
    fontSize:20,
    fontWeight: '700',
    marginLeft: 4,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  plusIcon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  cardDesc: {
    marginTop: 8,
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});