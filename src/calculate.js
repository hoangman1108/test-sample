function calculateParkingFee(widthVehicle, timeIn){
  console.log(calculateFee(widthVehicle), 'calculateFee(widthVehicle)');
  return calculateFee(widthVehicle)*totalDay(timeIn);
}

function totalDay(timeIn) {
  const curent = ((new Date()).getTime() - timeIn.getTime())/(1000*60*60*24);
 
  return curent > Math.round(curent) ? Math.round(curent) + 1: Math.round(curent);
}

function calculateFee(widthVehicle){
    const width = 2;
    if(widthVehicle >= width) {
      return 10;
    } else if ( width > widthVehicle && widthVehicle > 0){
      return 2;
    }
    
    return 0;
}

const date = new Date();
date.setDate(date.getDate() - 1);
date.setHours(date.getHours() + 1);

console.log(calculateParkingFee(-1, date));

module.exports = calculateParkingFee;