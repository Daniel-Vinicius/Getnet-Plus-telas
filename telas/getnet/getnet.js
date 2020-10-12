import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Getnet extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="e1cd5bfd-a06f-4d90-a3ae-153e5f1fe467" style={styles.getnet}>
        <View data-layer="718d7d51-3a6c-47c7-8cbc-fe3c054ec46e" style={styles.getnet_login}>
            <Svg data-layer="811851f1-d509-40f4-af13-c79223586665" style={styles.getnet_login_caminho1} preserveAspectRatio="none" viewBox="0 0 374.9999694824219 667" fill="rgba(54, 54, 54, 1)"><SvgPath d="M 0 0 L 374.9999694824219 0 L 374.9999694824219 667 L 0 667 L 0 0 Z"  /></Svg>
            <ReactImage data-layer="a1a23b61-f45b-4dc4-9adf-7f319472313c" source={require('./assets/esueceuASenha.png')} style={styles.getnet_login_esueceuASenha} />
            <ReactImage data-layer="7a7e7f71-eb2a-4785-9402-cd2307a46661" source={require('./assets/termos.png')} style={styles.getnet_login_termos} />
            <View data-layer="ceb394f2-5e8d-425e-aac7-73c50c397612" style={styles.getnet_login_fazerLoginf26693fe}>
                <ReactImage data-layer="abd7bce1-3111-404a-8c7c-bbae0c37a9a8" source={require('./assets/retangulo4.png')} style={styles.getnet_login_fazerLoginf26693fe_retangulo4} />
                <View style={styles.getnet_login_fazerLoginf26693fe_fazerLogin}><Text data-layer="3d05f8e9-bf7e-4e3b-a310-2d451ead5751" style={{"marginTop":-7.5,"color":"rgba(255, 255, 255, 1)","fontSize":25,"fontWeight":"700","fontStyle":"normal","fontFamily":"Segoe UI","textAlign":"center","lineHeight":27.500000000000004}}>Fazer Login</Text></View>
            </View>
            <ReactImage data-layer="9e2a0770-61a3-4c82-a645-29d7967277b0" source={require('./assets/cadastrese.png')} style={styles.getnet_login_cadastrese} />
            <View data-layer="2ab898c9-173d-46ab-8fa1-d1192fe2c62e" style={styles.getnet_login_senha7b8f792e}>
                <ReactImage data-layer="c4ab3f03-5508-43b2-bbff-7a04c917cbaa" source={require('./assets/retangulo5.png')} style={styles.getnet_login_senha7b8f792e_retangulo5} />
                <View style={styles.getnet_login_senha7b8f792e_senha}><Text data-layer="e2e1ae93-ceba-4db8-a7d9-40c74c78857b" style={{"marginTop":-5,"color":"rgba(112, 112, 112, 1)","fontSize":20,"fontWeight":"300","fontStyle":"normal","fontFamily":"Segoe UI","textAlign":"center","lineHeight":22}}>Senha</Text></View>
                <View data-layer="c86630dc-de0d-46c6-b812-147bb482aac6" style={styles.getnet_login_senha7b8f792e_retangulo11}></View>
                <View data-layer="2f7e8a24-44da-4fa0-8948-f17e1166ea1f" style={styles.getnet_login_senha7b8f792e_cadeado}>
                    <View data-layer="12dfd8a6-e6f4-44aa-817b-fea137d59af8" style={styles.getnet_login_senha7b8f792e_cadeado_retangulo12}></View>
                    <View data-layer="a4b7c4e8-8e95-47e9-b448-ea1995d594b6" style={styles.getnet_login_senha7b8f792e_cadeado_retangulo13}></View>
                </View>
                <Svg data-layer="c8d377f5-d22b-4821-acd1-c0a2b489bd88" style={styles.getnet_login_senha7b8f792e_linha1} preserveAspectRatio="none" viewBox="-0.25 -0.25 0.5 3.5" fill="transparent"><SvgPath d="M 0 0 L 0 3"  /></Svg>
            </View>
            <ReactImage data-layer="5175696a-f62f-48ae-8754-2b8522e2b802" source={require('./assets/emailContainer.png')} style={styles.getnet_login_emailContainer} />
            <ReactImage data-layer="95a2f8a6-2179-4502-ac0e-a92b8e508109" source={require('./assets/getnetLogo4.png')} style={styles.getnet_login_getnetLogo4} />
        </View>
    </ScrollView>
    );
  }
}

Getnet.propTypes = {

}

Getnet.defaultProps = {

}


const styles = StyleSheet.create({
  "getnet": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 667,
    "left": 0,
    "top": 0
  },
  "getnet_login": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": "auto",
    "left": 0,
    "top": 0,
    "bottom": 0
  },
  "getnet_login_caminho1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 667,
    "left": 0,
    "top": 0
  },
  "getnet_login_esueceuASenha": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 127,
    "height": 35,
    "left": 21,
    "top": 565
  },
  "getnet_login_esueceuASenha_retangulo7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 127,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "getnet_login_esueceuASenha_esqueceuASenha": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "center",
    "lineHeight": 13.200000000000001,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 100,
    "height": 14,
    "left": 14,
    "top": 13
  },
  "getnet_login_termos": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 127,
    "height": 35,
    "left": 227,
    "top": 565
  },
  "getnet_login_termos_retangulo8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 127,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "getnet_login_termos_termosDeUso": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "center",
    "lineHeight": 13.200000000000001,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 78,
    "height": 14,
    "left": 25,
    "top": 13
  },
  "getnet_login_fazerLoginf26693fe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 333,
    "height": 44,
    "left": 21,
    "bottom": 191
  },
  "getnet_login_fazerLoginf26693fe_retangulo4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 333,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "getnet_login_fazerLoginf26693fe_fazerLogin": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 27.500000000000004,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 134,
    "height": 33,
    "left": 100,
    "top": 17.5
  },
  "getnet_login_cadastrese": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 333,
    "height": 44,
    "left": 21,
    "top": 491
  },
  "getnet_login_cadastrese_retangulo3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 0, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 333,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "getnet_login_cadastrese_cadastreSe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 27.500000000000004,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 136,
    "height": 33,
    "left": 93,
    "top": 17.5
  },
  "getnet_login_senha7b8f792e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 333,
    "height": 44,
    "left": 21,
    "top": 298
  },
  "getnet_login_senha7b8f792e_retangulo5": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 333,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "getnet_login_senha7b8f792e_senha": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 22,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 52,
    "height": 27,
    "left": 66,
    "top": 15.5
  },
  "getnet_login_senha7b8f792e_retangulo11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 0.5,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 0.5,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 0.5,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 0.5,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 26,
    "height": 29,
    "left": 10,
    "top": 6
  },
  "getnet_login_senha7b8f792e_cadeado": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 11,
    "height": 12.5,
    "left": 18,
    "top": 15.5
  },
  "getnet_login_senha7b8f792e_cadeado_retangulo12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 0.5,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 0.5,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 0.5,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 0.5,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 11,
    "height": 8,
    "left": 0,
    "top": 4.5
  },
  "getnet_login_senha7b8f792e_cadeado_retangulo13": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 0.5,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 0.5,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 0.5,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 0.5,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 7,
    "height": 5,
    "left": 2,
    "top": 0
  },
  "getnet_login_senha7b8f792e_linha1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 0.5,
    "height": 3.5,
    "left": 23.25,
    "top": 22.25
  },
  "getnet_login_emailContainer": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 333,
    "height": 44,
    "left": 21,
    "top": 235
  },
  "getnet_login_emailContainer_emailForm": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 66,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "textAlign": "center",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 16,
    "fontFamily": "Segoe UI",
    "width": "100.00%",
    "height": "100.00%",
    "left": 0,
    "top": 0
  },
  "getnet_login_emailContainer_emailForm_fundo": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 333,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "getnet_login_emailContainer_emailForm_texto": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 17.6,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": -26,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 52,
    "height": 21,
    "left": "50%",
    "top": 17.5
  },
  "getnet_login_emailContainer_emailForm_email": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "lineHeight": 22,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 44,
    "height": 27,
    "left": 66,
    "top": 18.5
  },
  "getnet_login_emailContainer_retangulo10": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 0.5,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 0.5,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 0.5,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 0.5,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 26,
    "height": 29,
    "left": 10,
    "top": 8
  },
  "getnet_login_emailContainer_user": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17.21,
    "height": 22,
    "left": 14.4,
    "top": 11
  },
  "getnet_login_emailContainer_user_elipse1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 11,
    "height": 11,
    "left": 2.6,
    "top": 0
  },
  "getnet_login_emailContainer_user_subtracao1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17.21,
    "height": 9,
    "left": 0,
    "top": 13
  },
  "getnet_login_getnetLogo4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 288,
    "height": 76,
    "left": 44,
    "top": 79
  }
});