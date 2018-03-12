import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'commentsForm': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'commentsForm li': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.26 }],
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center'
  },
  'commentsForm li label': {
    'width': [{ 'unit': 'rem', 'value': 1.6 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }],
    'color': '#999'
  },
  'commentsForm li text': {
    'padding': [{ 'unit': 'rem', 'value': 0.16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.16 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'rem', 'value': 4.4 }],
    'height': [{ 'unit': 'rem', 'value': 0.32 }],
    'textIndent': '0.2rem',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'color': '#666',
    'fontSize': [{ 'unit': 'rem', 'value': 0.26 }]
  },
  'commentsSubmit': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.3 }],
    'marginTop': [{ 'unit': 'rem', 'value': 0.3 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f2f2' }]
  },
  'commentsSubmit submit': {
    'width': [{ 'unit': 'rem', 'value': 3 }],
    'height': [{ 'unit': 'rem', 'value': 0.84 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.84 }],
    'textAlign': 'center',
    'borderRadius': '0.08rem',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'backgroundColor': '#0099cc',
    'color': '#fff',
    'fontSize': [{ 'unit': 'rem', 'value': 0.32 }]
  },
  'investPic': {
    'display': 'flex',
    'flexDirection': 'row'
  },
  'investPic text': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }],
    'color': '#999'
  },
  'investPic pic': {
    'width': [{ 'unit': 'rem', 'value': 2.32 }],
    'height': [{ 'unit': 'rem', 'value': 1.68 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f2f2' }],
    'margin': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }]
  },
  'investPic pic img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'investPic shili': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'investPic uploadwp': {
    'position': 'relative',
    'width': [{ 'unit': 'rem', 'value': 1.8 }],
    'height': [{ 'unit': 'rem', 'value': 0.6 }]
  },
  'investPic upload': {
    'width': [{ 'unit': 'rem', 'value': 1.8 }],
    'height': [{ 'unit': 'rem', 'value': 0.6 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.6 }],
    'textAlign': 'center',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0.08rem',
    'backgroundColor': '#b3b0b0',
    'color': '#fff',
    'fontSize': [{ 'unit': 'rem', 'value': 0.28 }]
  },
  'investPic file': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'rem', 'value': 1.8 }],
    'height': [{ 'unit': 'rem', 'value': 0.6 }],
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0'
  }
});
