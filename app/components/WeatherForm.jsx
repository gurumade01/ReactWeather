var React = require('react');

var WeatherForm = React.createClass({
  onWeatherForm:function(e){
    e.preventDefault();

    var location = this.refs.Weatherinput.value;

    if(location.length > 0) {
        this.props.formprop(location);
    }

  },
  render:function() {
    return(
      <div>
        <h3>Get Weather</h3>
        <form onSubmit={this.onWeatherForm}>
          <input type="text" ref="Weatherinput" placeholder="enter city name"/>
          <button type="submit">Get Weather</button>
        </form>
      </div>
    );
  }
});


module.exports = WeatherForm;
