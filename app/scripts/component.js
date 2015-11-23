
var CardExtraContent = React.createClass({
  displayName: 'CardExtraContent',
  render: function() {
    return (
            <div className = "extra content">
            <span className = "left floated like">
            <i className = "like icon"> </i>
            Lik
            </span>
            <span className = "right floated star">
            <i className = "share alternate icon"> </i>
            Del på facebook
            </span >
            </div>
    );
  }
});


$(function() {
  ReactDOM.render(
    React.createElement(CardExtraContent, null),
    $('#TestReact')[0]);
});
