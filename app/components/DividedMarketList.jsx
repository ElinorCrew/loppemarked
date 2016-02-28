import React from 'react';
import moment from 'moment';
import Divider from 'components/Divider';
import MarketCard from 'components/MarketCard';


class DividedMarketList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { select, divider, markets} = this.props;
    return (
            <div>
              <Divider name={divider}/>
              <div className="ui divided items">
              {
                markets.map(function (market) {
                 return <MarketCard key={market.id} market={market}/>;
                })
              }
              </div>
            </div>
          );
        }
  }

export default DividedMarketList;
