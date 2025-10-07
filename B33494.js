
//Solving traffic jam problem
//if traffic there no
// else yes
// speed estimate

// Formulate traffic data function

function trafficData(route) {
  const trafficData = {
    'Route A': 300,
    'Route B': 350
  };
  return trafficData(route);
}
 // Traffic jam speed checkup function

function detectTrafficJam(speed) {
  const movement = 20;
  if (speed <= movement) {
    return true;
  } else {
    return false;
  }
}

routes = ('Route A', 'Route B');
let currentRoute = 'Route A';


// Finding alternative routes
//navigateTroughTraffic function

function navigateThroughTraffic(currentRoute, routes) {
  const speed = trafficData(currentRoute);
  console.log("Current speed on {currentRoute}: {speed}");
  
  if (detectTrafficJam(speed)) {
    console.log("Traffic jam detected on {currentRoute}");
    alternativeRoute = alternativeRoute(currentRoute, routes);
    console.log("Suggesting alternative route: {alternativeRoute}");
    return alternativeRoute;
  } else {
    console.log("No traffic jam on {currentRoute}.");
    return currentRoute;
  }
}
//created an alternative route function for the navigateThroughTraffic function
function alternativeRoute(currentRoute, routes) {
  return alternativeRoute(0);
}

// loop true if traffic jam is available, it calls the navigateThroughTraffic function
while (true) {
  currentRoute = navigateThroughTraffic(currentRoute, routes);
  
}

//This program simulates navigation system that detects traffic congestion and suggests alternative routes 
// to avoid jams. 


//https://nextleap.app/online-compiler/javascript-programming/fda7z1m83