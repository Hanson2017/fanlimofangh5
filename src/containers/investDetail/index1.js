import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'detailBody': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.92 }]
  },
  'detailBox': {
    'padding': [{ 'unit': 'rem', 'value': 0.24 }, { 'unit': 'rem', 'value': 0.24 }, { 'unit': 'rem', 'value': 0.24 }, { 'unit': 'rem', 'value': 0.24 }],
    'backgroundColor': '#fff',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e4e4' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e4e4' }]
  },
  'detailBox title': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#666',
    'fontSize': [{ 'unit': 'rem', 'value': 0.26 }]
  },
  'detailBox ddView': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.16 }],
    'color': '#999',
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.8 }]
  },
  'detailBox ddView img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'mt10': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.2 }]
  }
});
