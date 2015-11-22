'use strict';

var CardExtraContent = React.createClass({
  displayName: 'CardExtraContent',
  render: function() {
    return (React.createElement("div", {
      className: "extra content"
    }, React.createElement("span", {
      className: "left floated like"
    }, React.createElement("i", {
      className: "like icon"
    }), "Lik"), React.createElement("span", {
      className: "right floated star"
    }, React.createElement("i", {
      className: "share alternate icon"
    }), "Del på facebook")));
  }
});


$(function() {
  ReactDOM.render(
    React.createElement(CardExtraContent, null),
    $('#TestReact')[0]);
});
