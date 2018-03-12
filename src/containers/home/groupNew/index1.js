import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'itemListNew': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.025 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.025 }],
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'space-between'
  },
  'itemListNew link': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#fff',
    'listStyle': 'none',
    'flex': 'none',
    'width': [{ 'unit': '%H', 'value': 0.315 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.22 }],
    'color': '#666'
  },
  'itemListNew link head': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.1 }],
    'textAlign': 'center'
  },
  'itemListNew link head logo': {
    'width': [{ 'unit': 'rem', 'value': 1.4 }],
    'height': [{ 'unit': 'rem', 'value': 0.56 }]
  },
  'itemListNew link body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.1 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 0.1 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f2f2' }]
  },
  'itemListNew link body p': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.44 }]
  },
  'itemListNew link red': {
    'color': 'red'
  }
});
