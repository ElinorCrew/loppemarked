
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
  getInitialState: function() {
    return {showOpenCard: false};
  },

  showOpenCard: function() {
    this.setState({showOpenCard: true});
  },

  hideOpenCard: function() {
    this.setState({showOpenCard: false});
  },

  render: function() {
    var marketName = this.props.marketName;
    return (
      <div className="item">
        <div className="ui card" style={{width: '100%'}} onClick={this.showOpenCard}>
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
        {this.state.showOpenCard ?
            <div className="segment openCardContent" 
                onClick={this.hideOpenCard}
                style={{"position": "fixed",
                        "left": 0,
                        "right": 0,
                        "top": 0,
                        "bottom": 0,
                        "zIndex": 1000,
                        "backgroundColor": "rgba(255,255,255,0.8)"}}>
              <OpenCard marketName={marketName}  />
            </div>
          : null}
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

var OpenCard = React.createClass({
  displayName: 'OpenCard',
  render: function() {
    var marketName = this.props.marketName;
    return (
      <div className="ui centered card middle" style={{"marginTop":"80px", "width": "600px"}}>
        <div className="image">
          <img src="http://www.renas.no/_cached_files/files/yay-1487124_loppemarked.jpg.100.722.417.2012.10.15.9.19.f.2.jpg"/>
        </div>
        <div className="content">
          <a className="header">{marketName}</a>
          <div className="meta">
            <span className="category">Om to dager, kl 18:00</span>
            <br />
            <span className="category">Schweigaardsgate 41, 0366 OSLO</span>
          </div>
          <div className="description">
            <p>Loppemarkedet inneholder lopper fra hele Oslo. Det vil bli servert kaffe, boller og brus. Det selges møbler, sykler, antikviteter og ski.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada sapien vitae laoreet varius. Curabitur ut augue mauris. Sed maximus pulvinar ex, sed interdum turpis. Donec hendrerit mauris laoreet auctor semper. Sed eu arcu ipsum. Ut aliquet congue ipsum. 
            <br /><br />
            Nunc eleifend purus vel orci convallis, ut lobortis nibh interdum. Etiam dignissim enim ut massa scelerisque, id ultricies massa efficitur. Integer vel orci laoreet, tristique quam vel, scelerisque est. Donec faucibus sem at arcu placerat, ornare aliquet enim venenatis. Nulla quis risus maximus tortor vehicula feugiat eget sit amet orci.</p>
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
            17 likes
          </span>
          <span className="left floated">
          <i className="comment icon"></i>
          3 comments
          </span>
        </div>
      </div>
    );
  }
});

$(function() {
  window.loppe.markets.all(function  (markets) {
    ReactDOM.render(<Cards markets = {markets}/>, $('#Cards')[0]);
  });
});
