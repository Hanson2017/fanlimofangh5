import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'detailHeader': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '999',
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 0.92 }],
    'backgroundColor': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'detailHeader back': {
    'flex': 'none',
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'textAlign': 'center'
  },
  'detailHeader back am-icon-back': {
    'width': [{ 'unit': 'rem', 'value': 0.48 }],
    'height': [{ 'unit': 'rem', 'value': 0.48 }]
  },
  'detailHeader logo': {
    'paddingRight': [{ 'unit': 'rem', 'value': 1 }],
    'flex': '1',
    'textAlign': 'center'
  },
  'detailHeader logo img': {
    'width': [{ 'unit': 'rem', 'value': 1.4 }],
    'height': [{ 'unit': 'rem', 'value': 0.56 }]
  }
});
