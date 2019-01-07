import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements'

export class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Foodsy</Text>
          <Icon name="search" iconStyle={styles.title} />
        </View>
        <View style={styles.subheader}>
          <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
            <Icon name="today" iconStyle={{ color: '#000', fontSize: 20 }} />
            <Text style={styles.subheaderText}>Tomorrow</Text>
          </View>
          <View style={{ alignItems: 'flex-end', flexDirection: 'row' }}>
            <Icon name="people" iconStyle={{ color: '#000', fontSize: 20 }} />
            <Text style={[styles.subheaderText, {marginRight: 5}]}>5</Text>
            <Icon name="watch-later" iconStyle={{ color: '#000', fontSize: 20 }} />
            <Text style={styles.subheaderText}>7pm</Text>
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 5,
    paddingTop: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title:{
    color: '#000',
    fontSize: 20
  },
  subheader:{
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subheaderText: {
    color: '#4890FF',
    marginLeft: 3,
    fontSize: 15
  }
})