'use strict';

import React, {
  Component
} from 'react';
import {
  View, 
  TouchableHighlight, 
  Text, 
  StyleSheet
} from 'react-native';

export default class ArticlePreview extends Component {

    constructor(props){

        super(props);

        this.state = {
            route: 0
        };
    }

    onPressSendRequest() {

    }

    componentDidMount() {

      // this.navigateTo(7);
    }

    componentWillUnmount() {

        // SomeEvent.unsubscribe(this.myFunction);
    }

  render() {
// this.navigateTo.bind(this, this.props.index)
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.articlePreviewContainer}
        underlayColor='#FFF3F3'>
        <View>
          <View stlye={styles.articlePreviewHeader}>
            <Text style={styles.articlePreviewCategoryText}>
              {this.props.category}
            </Text>
            <Text style={styles.articlePreviewTitleText}>
              {this.props.title}
            </Text>
          </View>

          <View style={styles.articlePreviewBody}>
            <Text style={styles.articlePreviewBodyText}>
              {this.props.children}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

// ArticlePreview.propTypes = {
//     navigate: PropTypes.func.isRequired
// }

const styles = StyleSheet.create({
  articlePreviewContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 25,
    borderColor: '#595959',
    borderTopWidth: 1,
  },
  lastArticlePreviewContainer: {
    borderBottomWidth: 1,
  },
  articlePreviewCategoryText: {
    color: '#595959',
    fontSize: 15,
  },
  articlePreviewTitleText: {
    fontSize: 23,
    fontWeight: '700',
    marginTop: 3,
    marginBottom: 3,
  },
  articlePreviewBody: {
  },
  articlePreviewBodyText: {
    fontSize: 15,
    lineHeight: 24,
  },
});
