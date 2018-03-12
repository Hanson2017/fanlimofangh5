import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'detailBody top': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }],
    'overflow': 'hidden',
    'backgroundColor': '#fff'
  },
  'detailBody top tags': {
    'display': 'flex',
    'flexDirection': 'row',
    'flexWrap': 'wrap'
  },
  'detailBody top tags type': {
    'display': 'flex',
    'flexDirection': 'row'
  },
  'detailBody top tags tag': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.08 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.08 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.16 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FF6666' }],
    'borderRadius': '0.04rem',
    'height': [{ 'unit': 'rem', 'value': 0.5 }],
    'minWidth': [{ 'unit': 'rem', 'value': 1.3 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'color': '#FF6666'
  },
  'detailBody bt': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.1 }],
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'color': '#999'
  },
  'detailBody bt i': {
    'fontStyle': 'normal',
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.1 }]
  }
});
