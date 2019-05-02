// solution for https://web.compass.lighthouselabs.ca/days/w01d4/activities/188

/* init data */

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

/* spec : Write a sorting function (sometimes called a custom comparator),
 that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age. */


function compare(a,b){
  if (a.name > b.name){
    return 1;
  }else if (a.name < b.name){
    return -1;
  }
  return a.age > b.age ? -1 : ((a.age === b.age) ? 0 : 1 );
}

 console.log(students.sort(compare));