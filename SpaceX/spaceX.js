const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData.map(function(data){
  return data.location.latitude +","+data.location.longitude
})));


