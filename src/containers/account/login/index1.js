import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'loginContainer': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#fff'
  },
  'loginContainer logo': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.8 }],
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'loginContainer logo img': {
    'width': [{ 'unit': 'rem', 'value': 3.56 }],
    'height': [{ 'unit': 'rem', 'value': 1 }]
  },
  'loginContainer con': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'padding': [{ 'unit': 'rem', 'value': 1.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1.8 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'loginContainer con am-icon-lg': {
    'width': [{ 'unit': 'rem', 'value': 1.2 }],
    'height': [{ 'unit': 'rem', 'value': 1.2 }]
  },
  'loginContainer con wechat': {
    'paddingLeft': [{ 'unit': 'rem', 'value': 1.2 }]
  },
  'loginContainer other': {
    'textAlign': 'center'
  },
  'loginContainer other a': {
    'color': '#999',
    'fontSize': [{ 'unit': 'rem', 'value': 0.32 }]
  }
});
