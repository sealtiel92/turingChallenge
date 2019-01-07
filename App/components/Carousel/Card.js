import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements'

const width = Dimensions.get('window').width

export class Card extends React.Component {

  constructor(props) {
    super(props);
    this._callToRestaurant = this._callToRestaurant.bind(this);
  }

  _callToRestaurant(item) {
    let url = `tel:+${item.phone}`
    Linking.openURL(url)
  }

  render() {
    const item = this.props.item;
    let img = null;
    if(item.images[0]){
      img = {uri: item.images[0]}
    }else{
      img = require('../../images/noImage.png')
    }
    return(
      <View key={this.props.key}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.headerType}>Chinese</Text>
            <Icon name="edit" 
              iconStyle={{ color: '#478AFF', textAlign: 'right' }}
              containerStyle={styles.headerIconContent} />
          </View>
          <View style={styles.info}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="directions-walk" iconStyle={{ color: '#4890FF' }} />
              <Text style={styles.infoText}>6min</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="attach-money" iconStyle={{ color: '#4890FF' }} />
              <Text style={styles.infoText}>10-15</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="star" iconStyle={{ color: '#4890FF' }} />
              <Text style={styles.infoText}>3.5/5</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="favorite" iconStyle={{ color: '#4890FF' }} />
              <Text style={styles.infoText}>0</Text>
            </View>
          </View>
          <View style={{ position: 'relative' }}>
            <Image source={img} resizeMode="cover" style={styles.image} />
            <View>
              <Icon name="place" iconStyle={{ color: '#FFF', fontSize: 15 }} containerStyle={{ position: 'absolute', top: -290, left: 30 }} />
              <Text style={{ position: 'absolute', top: -290, left: 50, color: '#fff' }}>{item.title}</Text>
              <Text style={{ position: 'absolute', top: -270, left: 30, color: '#fff' }}>Close at 10:00pm</Text>
              <Icon name="brightness-1" iconStyle={{ color: '#FFF', fontSize: 10 }} containerStyle={{ position: 'absolute', bottom: 30, left: 30 }} />
              <Text style={{ position: 'absolute', bottom: 30, left: 45, color: '#fff' }}>Not bussy</Text>
              <Icon name="star" iconStyle={{ color: '#FFF', fontSize: 10 }} containerStyle={{ position: 'absolute', bottom: 10, left: 30 }} />
              <Text style={{ position: 'absolute', bottom: 5, left: 45, color: '#fff' }}>{item.description}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerContent} onPress={() => this._callToRestaurant(item)}>Call</Text>
            <Text style={styles.footerContent}>0.6 miles away</Text>
            <Text style={styles.footerContent}>Reserve</Text>
          </View>
        </View>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>Causal Dining American Cuisine</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 20,
    marginTop: 10,
    backgroundColor: '#fff'
  },
  image: {
    width: width,
    height: 300
  },
  header: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#478AFF',
    flexDirection: 'row',
    width: '100%',
    padding: 10
  },
  headerType: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 15,
    marginTop: 3,
    width: '90%'
  },
  headerIconContent: {
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'flex-end'
  },
  info:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  },
  infoText: {
    alignSelf: 'flex-start',
    color: '#000',
    padding: 5
  },
  footer: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerContent:{
    color: '#4890FF',
    alignSelf: 'flex-start',
    padding: 5
  }
})