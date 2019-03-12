import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, TextInput, ActivityIndicator } from 'react-native';
import { onMsgChanged, onTagChanged, envoyer } from '../actions';

class NouveauMessage extends Component {
  static navigationOptions = {
    title: 'Nouveau Message'
  };

  messageChange(text) {
    this.props.onMsgChanged(text);
  }
  tagChange(text) {
    this.props.onTagChanged(text);
  }
  envoi() {
    const { contenu, categorie } = this.props.form;
    const { longitude, latitude } = this.props.localisation;
    this.props.envoyer({
      contenu,
      categorie,
      longitude,
      latitude
    });
  }
  render() {
    return (
      <View>
        <TextInput
          label="Message"
          placeholder="un message"
          onChangeText={this.messageChange.bind(this)}
          value={this.props.form.contenu}
        />
        <TextInput
          label="Tag"
          placeholder="Une catégorie"
          onChangeText={this.tagChange.bind(this)}
          value={this.props.form.categorie}
        />
        <Button
          onPress={() => this.envoi()}
          title="Envoie ton message"
        />
        {this.props.form.loading &&
          <ActivityIndicator size="small" />
        }
      </View>
    );
  }
}


const mapStateToProps = ({ form, localisation }) => ({ form, localisation });

export default connect(mapStateToProps, { envoyer, onMsgChanged, onTagChanged })(NouveauMessage);
