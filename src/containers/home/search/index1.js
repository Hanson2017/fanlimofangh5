import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'homeSearchBar': {
    'display': 'flex',
    'alignItems': 'center',
    'boxSizing': 'border-box',
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.15 }],
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'height': [{ 'unit': 'rem', 'value': 0.61 }],
    'backgroundColor': '#fff',
    'borderRadius': '0.08rem',
    'color': '#ccc',
    'fontSize': [{ 'unit': 'rem', 'value': 0.26 }]
  },
  'homeSearchBar span': {
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.1 }]
  },
  'homeSearchBar am-icon-search': {
    'width': [{ 'unit': 'rem', 'value': 0.34 }],
    'height': [{ 'unit': 'rem', 'value': 0.34 }]
  }
});
