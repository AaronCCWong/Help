YelpClone.Views.GoogleMapShow = Backbone.View.extend({
  attributes: {
    id: "map-canvas"
  },

  render: function() {
    var mapOptions = {
      center: { lat: 40.7295, lng: -73.999026 },
      zoom: 15
    };

    this._map = new google.maps.Map(this.el, mapOptions);
  }
});
