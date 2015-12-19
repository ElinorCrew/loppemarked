
  var market = function (market) {
    var self = market;
    self.save = function () {
      return self;
    };
    self.delete = function () {
      return self;
    };
    self.update = function () {
      return self;
    };
    return self;
  };

  var Markets = function () {
    var self = {};
    var baseUrl = '/api/markets/';

    self.all = function (callback) {
      $.getJSON(baseUrl, function (data) {
        var markets = data.map(market);
        callback(markets);
      });
    };

    return self;
  };

module.exports = Markets();
