
const React = require('react')

class ThemedDecorations extends React.Component {
  render(){
    const addingThemeToDecor = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme,
      });
    });
    return (<div>{addingThemeToDecor}</div>)
  }
}
module.exports = ThemedDecorations
