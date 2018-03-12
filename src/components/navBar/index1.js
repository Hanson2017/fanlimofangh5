import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'navBarContainer': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'backgroundColor': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'navBarContainer title': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'navBarContainer back': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'navBarContainer operation': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'navBarContainer title': {
    'color': '#333',
    'fontSize': [{ 'unit': 'rem', 'value': 0.32 }],
    'flex': '1'
  },
  'navBarContainer back': {
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }]
  },
  'navBarContainer operation': {
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }]
  },
  'navBarContainer am-icon-md': {
    'width': [{ 'unit': 'rem', 'value': 0.48 }],
    'height': [{ 'unit': 'rem', 'value': 0.48 }]
  }
});
