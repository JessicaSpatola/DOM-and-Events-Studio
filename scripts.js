window.onload = (event) => {
  
  const takeoff = document.querySelector ('#takeoff')
  const landing = document.querySelector('#landing')
  const abort = document.querySelector('#missionabort')
  let flightStatus = document.getElementbyId(flightStatus');
  let shuttleHeight = document.getElementById('spaceshuttleHeight');                                          
  
  takeoff.addeventListener('click',(event) => {
    window.confirm('Confirm that the shuttle is ready for takeoff.');
    if(affirm) {
      flightStatus.innerHTML = 'Shuttle in flight.';
      shuttleBackground.style.backgrounf = "blue";
      shuttleHeight.innerHTML =+ shuttleHeight.innerHTML+10000;
  })
}
                           
 
