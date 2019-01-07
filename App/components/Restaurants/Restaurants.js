import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Query } from 'react-apollo';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';
import { Header } from '../Carousel/Header'
import { Card } from '../Carousel/Card'

const width = Dimensions.get('window').width

export default class Restaurants extends React.Component {
  
  constructor(props) {
    super(props);
  }

  _renderItem({ item, key }) {
    return (
      <Card key={key} item={item}/>
    );
  }

  render() {
    // TODO: This shouldn't be hard coded.  Allow the user to enter it into a Text Input
    const address = '1260 6th Ave, New York, NY 10020';

    return (
      <View style={{ flex: 1, backgroundColor: '#EBF2FA' }}>
        <Header/>
        <Query
          query={RESTAURANT_SEARCH_QUERY}
          variables={{
            address
          }}
        >
          {({ loading, error, data = {} }) => {
            if (loading) {
              return (
                <View style={{ width: '100%', paddingVertical: 10 }}>
                  <ActivityIndicator size="large" style={{ padding: 30 }} color='#4890FF' />
                </View>
              );
            }
            // Make sure we have data
            if (data.search_restaurants && data.search_restaurants.results && data.search_restaurants.results.length > 0) {
              return (
                <Carousel
                  ref={(c) => { this._carousel = c; }}
                  data={data.search_restaurants.results}
                  renderItem={this._renderItem}
                  sliderWidth={width}
                  itemWidth={width - 50}
                  layout={'default'}
                  enableSnap={true}
                />
              );
            }
            // No Data Return
            return (
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text>No Results</Text>
              </View>
            );
          }}
        </Query>
      </View>
    );
  }
}