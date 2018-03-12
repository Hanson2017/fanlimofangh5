import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'investItem': {
    'display': 'block',
    'position': 'relative',
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.2 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'height': [{ 'unit': 'rem', 'value': 2.9 }],
    'backgroundColor': '#fff'
  },
  'investItem head': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f2f2' }],
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center'
  },
  'investItem head logoView': {
    'width': [{ 'unit': 'rem', 'value': 1.4 }],
    'height': [{ 'unit': 'rem', 'value': 0.56 }]
  },
  'investItem head logoView img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'investItem head tags': {
    'position': 'relative',
    'top': [{ 'unit': 'rem', 'value': -0.1 }],
    'display': 'flex',
    'flexDirection': 'row',
    'marginLeft': [{ 'unit': 'rem', 'value': 0.16 }]
  },
  'investItem head tags span': {
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'justifyContent': 'center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.08 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.08 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.16 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FF6666' }],
    'borderRadius': '0.04rem',
    'height': [{ 'unit': 'rem', 'value': 0.4 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'color': '#FF6666'
  },
  'investItem body': {
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'investItem body li': {
    'flex': 'none',
    'listStyle': 'none',
    'width': [{ 'unit': '%H', 'value': 0.33 }]
  },
  'investItem body li > span': {
    'display': 'block',
    'color': '#666',
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }]
  },
  'investItem body li bt': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.1 }]
  },
  'investItem body li red': {
    'color': 'red',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }]
  },
  'investItem body li num': {
    'color': '#999',
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }]
  },
  'investItem foot': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.3 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 0.2 }],
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f2f2' }]
  },
  'investItem foot type': {
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center'
  },
  'investItem foot tag': {
    'display': 'flex',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.06 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.06 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.1 }],
    'alignItems': 'center',
    'justifyContent': 'center',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cdcdcd' }],
    'borderRadius': '0.04rem',
    'height': [{ 'unit': 'rem', 'value': 0.48 }],
    'minWidth': [{ 'unit': 'rem', 'value': 1.04 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 0.24 }],
    'color': '#ccc'
  },
  'investItem maskView': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '99'
  },
  'investItem maskView mask': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'opacity': '0.4',
    'backgroundColor': '#000'
  },
  'investItem maskView maskText': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '101',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'color': '#fff',
    'fontSize': [{ 'unit': 'rem', 'value': 0.5 }]
  }
});
