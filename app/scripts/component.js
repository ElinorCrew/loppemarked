var MenuContentFooter = React.createClass({
  displayName: 'MenuContentFooter',

  getInitialState: function() {
    return {content: 'MarketsAndMap'};
  },

  showMarketsAndMap: function() {
    this.setState({content: 'MarketsAndMap'});
  },

  showCreateNewMarket: function() {
    this.setState({content: 'CreateNewMarket'});
  },

  render: function() {
    return (
      <div>
        <div className="ui fixed menu">
          <a className="header item" onClick={this.showMarketsAndMap}>Skattekartet</a>
          <div className=" item ui floating labeled icon dropdown tiny">
            <span className="text"> Valgt område: <b>Oslo</b></span>
            <i className="icon dropdown"></i>
            <div className="menu">
              <div className="header">
                Velg område
              </div>
              <div className="ui left icon input">
                <i className="search icon"></i>
                <input type="text" name="search" placeholder="Søk..." />
              </div>
              <div className="header">
                <i className="tags icon"></i>
                Områder
              </div>
              <div className="divider"></div>
              <div className="item">
                <div className="ui red empty circular label"></div>
                Bergen
              </div>
              <div className="item">
                <div className="ui blue empty circular label"></div>
                Trondheim
              </div>
              <div className="item">
                <div className="ui black empty circular label"></div>
                Oslo
              </div>
            </div>
          </div>
          <div className="right menu">
            <a className="item" onClick={this.showCreateNewMarket}>Legg til nytt loppemarked</a>
          </div>
        </div>

        {(() => {
          switch (this.state.content) {
            case "MarketsAndMap": return <MarketsAndMap/>;
            case "CreateNewMarket": return <CreateNewMarket/>;
            default: return <MarketsAndMap/>;
          }
        })()}

        <div className="ui fixed bottom sticky menu">
          <div className="right menu">
            <a className="item">Laget av ElinorCrew</a>
          </div>
        </div>
      </div>
    );
  }
});

var CreateNewMarket = React.createClass({
  displayName: 'CreateNewMarket',

  render: function() {
    return (
      <div className="ui text container">
        <br />
        <br />
        <div className="ui header">Create another Market</div>
      </div>
    );
  }
});

var MarketsAndMap = React.createClass({
  displayName: 'MarketsAndMap',

  render: function() {
    return (
      <div>
        <Markets/>
        <Map/>
      </div>
    );
  }
});

var Map = React.createClass({
  displayName: 'Map',

  componentDidMount: function() {
    if (this.isMounted()) {
      mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmZlbnAiLCJhIjoiY2loYnBxMmtpMHd6M3Vra3RybXZxbjZ2byJ9.NXvjP_UDUfUJZ7_nwhVPzQ";
      var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/steffenp/cihby9a4700cjbdm126ge53iq', //stylesheet location
            center: [10.725231170654297, 59.91200869359693], // starting position
            zoom: 12 // starting zoom
        });

      var tooltip = new mapboxgl.Popup({closeOnClick: false})
          .setLngLat([10.7273769,59.9170428])
          .setHTML('<h3>Slottsparken loppemarked</h3><p>Om to dager, kl 18:00. Schweigaardsgate 41, 0366 OSLO</p>')
          .addTo(map);
    }
  },

  render: function() {
    return (
      <div className="fixed" id="mapContainer">
        <div id="map"></div>
      </div>
    );
  }
});

var Markets = React.createClass({
  displayName: 'Markets',
  getInitialState: function() {
    return {
      markets: []
    };
  },

  componentDidMount: function() {
    var self = this;
    // We could use dependency injection here
    window.loppe.markets.all((markets) => {
      if (this.isMounted()) {
        this.setState({
          markets: markets,
        });
      }
    });
  },

  render: function() {
    return (
      <div className="four wide column leftmenu">
        <div className="ui labeled icon dropdown button tiny">
          <i className="filter icon"></i>
          <span className="text">Sorter på...</span>
          <div className="menu">
            <div className="item">
              Avstand
            </div>
            <div className="item">
              Tid
            </div>
            <div className="item">
              Populæritet
            </div>
          </div>
        </div>
        <Cards markets={this.state.markets}/>
      </div>
    );
  }
});

var Cards = React.createClass({
  displayName: 'Cards',
  render: function() {
    var markets = this.props.markets;
    return (
    <div className="ui list">
       {markets.map(function(market) {
           return <Card key={market.id} {...market}/>;
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
    var market = this.props;
    return (
      <div className="item">
        <div className="ui card" style={{width: '100%'}} onClick={this.showOpenCard}>
          <div className="content">
            <div className="header">{market.name}</div>
            <div className="meta">
              <span className="category">Om to dager, kl 18:00</span>
              <br />
              <span className="category">{market.address}</span>
            </div>
            <div className="description">
              <p>{market.description}</p>
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
              <OpenCard {...market}  />
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
        <div className = 'extra content'>
            <span className = 'left floated like'>
                <i className = 'like icon'> </i>
                Lik
            </span>
            <span className = 'right floated star'>
                <i className = 'share alternate icon'> </i>
                Del på facebook
            </span >
        </div>
    );
  }
});

var OpenCard = React.createClass({
  displayName: 'OpenCard',
  render: function() {
    var market = this.props;
    return (
      <div className="ui centered card middle" style={{"marginTop":"80px", "width": "600px"}}>
        <div className="image">
          <img src="http://www.renas.no/_cached_files/files/yay-1487124_loppemarked.jpg.100.722.417.2012.10.15.9.19.f.2.jpg"/>
        </div>
        <div className="content">
          <a className="header">{market.name}</a>
          <div className="meta">
            <span className="category">Om to dager, kl 18:00</span>
            <br />
            <span className="category">{market.address}</span>
          </div>
          <div className="description">
            <p>{market.description}</p>
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
  ReactDOM.render(<MenuContentFooter/>, $('#MenuContentFooter')[0]);
});