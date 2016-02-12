import React from 'react';

class Search extends React.Component {


  componentDidMount() {
    self = this;

    $('.ui.search.searchBox')
      .search({
        apiSettings: {
          url: 'https://ws.geonorge.no/SKWS3Index/ssr/sok?epsgKode=4326&navn={query}*'
        },
        type: 'standard',
        fields: {
          results: 'stedsnavn',
          title: 'stedsnavn',
          description: 'navnetype'
        },
        onSelect: function(result, response) {
          self.zoomMapToSearchResult(result);
        }
      });
  }

  render() {
    return (
      <div>
			<div className="ui category search searchBox">
			  <div className="ui icon input">
			    <input className="prompt" type="text" placeholder="Søk etter stedsnavn..." />
			    <i className="search icon"></i>
			  </div>
			  <div className="results"></div>
			</div>
		</div>
      );
  }
}

export default Search;
