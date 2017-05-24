var React = require('React');
var WeatherMsg = require('WeatherMsg');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeather');

var Weather = React.createClass({

  getInitialState:function(){
    return {
      isLoading:false
    };
  },
  handleNewData:function(location) {
    var that = this;

    this.setState({
      isLoading:true
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      })
    },function(err){
      that.setState({isLoading:false});
      alert(err);
    });
  },
  render:function(){
    // var temp = this.state.temp;
    // var location = this.state.location;
    var {temp,location,isLoading} =  this.state;

    function renderMessage() {
      if(isLoading) {
        return <p>Fetching data...</p>;
      } else if(temp && location){
        return <WeatherMsg temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>Weather Comp</h3>
        <WeatherForm formprop={this.handleNewData}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
