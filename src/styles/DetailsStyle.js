import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'    
    },

    incident:{
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 28,
    },

    incidentPropertyName: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 0,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    // ----------------

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

      postLongDesc: {
        marginTop: 4,
        fontSize: 15,
        marginBottom: 12,
        color: '#737380'
      },

    // ----------------

    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color:'#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#4e71ba',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});