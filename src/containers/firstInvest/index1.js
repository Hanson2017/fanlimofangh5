import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'investTabBar': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '999',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'backgroundColor': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'investTabBar tabBarContainer': {
    'width': [{ 'unit': '%H', 'value': 0.6 }]
  },
  'invest-list': {
    'margin': [{ 'unit': 'rem', 'value': 1.28 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1.2 }, { 'unit': 'px', 'value': 0 }]
  },
  'invest-list am-list-body': {
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  }
});
