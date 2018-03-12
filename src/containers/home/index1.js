import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'homeContainer': {
    'padding': [{ 'unit': 'rem', 'value': 1.58 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'homeTop': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '999',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#f23b83',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center'
  },
  'banner': {
    'backgroundColor': '#fff'
  },
  'banner img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  }
});
