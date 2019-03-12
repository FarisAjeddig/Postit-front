//Libraries Imports
import React, { Component } from 'react';
import { Text, ListView, ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

//Custom Imports
import MsgItem from '../components/MsgItem';

/**
* Class ListeMessage
*
* Affiche la liste des messages à proximité de l'utilisateur
*/
class ListeMessage extends Component {
  static navigationOptions = {
    title: 'Liste des messages'
  };

  componentWillMount() {
    this.createDataSource(this.props.messages.liste);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.messages !== nextProps.messages) {
      this.createDataSource(nextProps.messages.liste);
    }
  }

  createDataSource(liste) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(liste);
  }

  render() {
    if (this.props.localisation.loading) {
      return (
        <View>
          <Text>
            En attente de votre localisation
          </Text>
          <ActivityIndicator size="small" />
        </View>
      );
    }
    if (this.props.localisation.error) {
      return (
        <Text>
          La localisation de votre téléphone est-elle activée?
          Si non activez la et rechargez la page
        </Text>
      );
    }
    if (this.props.messages.loading) {
      return (
        <View>
          <Text>Chargement de la liste des messages</Text>
          <ActivityIndicator size="small" />
        </View>
      );
    }
    if (this.props.messages.error) {
      return (
        <Text>Erreur get</Text>
      );
    }
    return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(msg) => <MsgItem message={msg} />}
        />
      );
  }
}

const mapStateToProps = ({ messages, localisation }) => {
  return { messages, localisation };
};

export default connect(mapStateToProps)(ListeMessage);
