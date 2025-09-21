//1

let teaFlavours = ["green tea", "black tea","oolang tea"];
let firstTea = teaFlavours[0];
// console.log(firstTea);

//2

let cities = ["London", "tokyo","new york"];
let favouriteCity = cities.at(-1);
// console.log(favouriteCity);

//3
let teaTypes = ["herbal tea","white tea","masala chai"];
teaTypes[1] = "jasmine tea";

// teaTypes.forEach(item=>console.log(item));


//4
citiesVisited = ["Mumbai" , "sydney"];
citiesVisited.push("Berlin");
// citiesVisited.forEach(item=>console.log(item));


//5
let teaOrders = ["chai","iced tea","matcha","earl grey"];
teaOrders.pop();
// teaOrders.forEach(item=>console.log(item));

//6
let popularTeas = ["green tea","oolang tea","chai"];
let softCopyTeas = popularTeas;
// softCopyTeas.forEach(item=>console.log(item));
// popularTeas.pop();
// softCopyTeas.forEach(item=>console.log(item));


//7
let topCities = ["berklin ","singapore","new york"];
let i = 0;
let hardCopyCities=[];
// topCities.forEach(item=> {hardCopyCities[i] = item;i++;});
//  OR 
hardCopyCities = [...topCities];
// console.log(hardCopyCities);


//8
let europeanCities = ["Paris","rome"];
let asianCities = ["tokyo","bankok"];

let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);


//9
let teaMenu = ["masala chai ","oolang tea","green tea","earl grey"];
menuLength = teaMenu.length;
// console.log(menuLength);

//10
