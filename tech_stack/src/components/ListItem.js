import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { item, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text>{ item.description }</Text>
        </CardSection>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.item;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{ title }</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.item.id === state.selectedLibraryId;
  return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);
