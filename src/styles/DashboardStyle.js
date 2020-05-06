import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewContainer: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 3,
    },
  
    nameText: {
      marginLeft: 15,
      fontSize: 16,
      lineHeight: 24,
      color: '#737380',
    },
  
    karmaText: {
      fontSize: 18,
      lineHeight: 24,
      color: '#0C0A0D',
    },
  
    // images
  
    perfilImage: {
      marginLeft: 20,
      width: 30,
      height: 30,
      borderRadius: 200,
      borderWidth: 0.5,
      borderColor: '#000',
    },
  
    perfilImage2: {
      marginLeft: 0,
      width: 30,
      height: 30,
      borderRadius: 200,
      borderWidth: 0.5,
      borderColor: '#000',
    },
  
    logoutImage: {
      marginLeft: 150,
      marginRight: 8,
      width: 25,
      height: 25,
    },
  
    productImage:{
      alignSelf: 'center',
      width: 200,
      height: 200,
      borderColor: '#737380',
      borderWidth: 0.4,
    },
  

    // posts
  
    postMarket: {
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom: 16,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
    },
  
    postNameView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 12,
      borderBottomWidth: 1.5,
      borderBottomColor: '#F3F3F3',
    },
  
    postName: {
      marginLeft: 5,
      fontSize: 14,
      color: '#737380',
      fontWeight: 'bold',
    },
  
    postProperty: {
      fontSize: 14,
      color: '#737380',
      fontWeight: 'bold',
    },
  
    postTitle: {
      marginTop: 12,
      marginBottom: 12,
      justifyContent: 'center',
      fontSize: 18,
      color: '#292929',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  
    postValue1: {
      marginTop: 8,
      marginRight: 25,
      fontSize: 17,
      color: '#292929',
      fontWeight: 'bold',
      alignSelf: 'flex-end',
    },
  
    postValue2: {
      marginTop: 4,
      fontSize: 18,
      marginBottom: 24,
      color: '#292929',
      alignSelf: 'flex-end',
    },
  
    postDesc: {
      marginTop: 4,
      fontSize: 15,
      marginBottom: 12,
      color: '#737380'
    },

    contentContainer: {
      width: '${100 * 3}%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    detailsButton: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
  
    detailsButtonText: {
      marginRight: 20,
      color: '#2f55a4',
      fontSize: 15,
      fontWeight: 'bold'
    },

    // SLIDE @@@@@@@@@@@@@@@@@@

  });
  
  export default styles;