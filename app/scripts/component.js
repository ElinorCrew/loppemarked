
var Cards = React.createClass({
  displayName: 'Cards',
  render: function() {
    var markets = this.props.markets;
    return (
    <div className="ui list">
       {markets.map(function(market) {
           return <Card key={market.id} marketName={market.name}/>;
        })}
    </div>
    );
  }
});

var Card = React.createClass({
  render: function() {
    var marketName = this.props.marketName;
    return (
      <div className="item">
        <div className="ui card" style={{width: '100%'}}>
          <div className="content">
            <div className="header">{marketName}</div>
            <div className="meta">
              <span className="category">Om to dager, kl 18:00</span>
              <br />
              <span className="category">Schweigaardsgate 41, 0366 OSLO</span>
            </div>
            <div className="description">
              <p>Loppemarkedet inneholder lopper fra hele Oslo. Det vil bli servert kaffe, boller og brus. Det selges møbler, sykler, antikviteter og ski.</p>
            </div>
          </div>
        <CardExtraContent/>
        </div>
      </div>
    );
  }
});

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
window.loppe.markets.all(function  (markets) {
  ReactDOM.render(
                  <Cards markets = {markets}/>,
                  $('#Cards')[0]);
    })
});
