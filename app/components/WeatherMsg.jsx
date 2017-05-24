var React = require('react');

// var WeatherMsg = React.createClass({
//   render:function(){
//     var temp = this.props.temp;
//     var location = this.props.location;
//     return(
//       <div>
//         <p>The weather is : {temp} degrees in {location}</p>
//       </div>
//     );
//   }
// });

var WeatherMsg = ({temp,location}) => {
  return(
    <div>
      <p>The weather is : {temp} degrees in {location}</p>
    </div>
  );
};

module.exports = WeatherMsg;
