// ////////// #1

// const printMessage = () => console.log(message);

// /////////// #2

// const createMultplication = (num1, num2) => num1 * num2;

// ////////// #3

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const map = array.map(createMultplication);
// console.log(map);

// ///////// #4

// function mostAlcoholic(beers) {
//   return beers.toSorted((beer1, beer2) => beer2.abv - beer1.abv).slice(0, 10);
// }

// console.log(mostAlcoholic(beers));

// /////// #5

// function bitterBeers(beers) {
//   return beers.toSorted((beer3, beer4) => beer4.ibu - beer3.ibu).slice(0, 10);
// }

// console.log(bitterBeers(beers));

// ///////////// #6

// function findName (beerArray,name) {
//     const beerFinded = beerArray.find((beer) => beer.name == name);
//     console.log(beerFinded);
//   if (beerFinded) {
//     return beerFinded;
//   } else {
//     return console.log(`${name} Does not exist`);
//   }
// }

// findName (beers,"AB:12")

// ///////// #7

// function findIbu(beerArray, valueIbu) {
//   const beerFinded = beerArray.find((beer) => beer.ibu == valueIbu);
//   console.log(beerFinded);
//   if (beerFinded) {
//     return beerFinded;
//   } else {
//     return console.log(`there is no beer with an ibu ${valueIbu}`);
//   }
// }

// findIbu(beers, 50);

// //////////// #8

// function beerNames(beerArray, beerName) {
//   const beerFinded = beerArray.findIndex((beer) => beer.name == beerName);
//   console.log(beerFinded);
//   if (beerFinded >= 0) {
//     return beerFinded;
//   } else {
//     return `${beerName} Does not exist`;
//   }
// }

// beerNames(beers, "laura");

//////// #9

function aux(baseDatos, num) {
  let beerAbv = baseDatos.filter((beer) => beer.abv <= num);
  let abvBeer = beerAbv.map(cerveza => {
    return {
      nombre: cerveza.name,
      alcohol: cerveza.abv,
      amargura: cerveza.ibu,
    };
  });
  return abvBeer;
}
const xx = aux(beers, 5);
console.log(xx);

///////// #10
function aux(beerArray, property, boolean) {
  const ordered = beerArray
    .filter((beer) => beer[property])
    .toSorted((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
  if (boolean) {
    return ordered.slice(0, 10);
  } else {
    return ordered.reverse().slice(0, 10);
  }
}
// console.log(aux(beers, "abv", true));

//////////// #11

const $tbody = document.getElementById(`tbody`);

function createRow(beer) {
  return `
  <tr>
    <td>${beer.name} </td>
    <td>${beer.abv} </td>
    <td> ${beer.ibu}</td>
    </tr>`;
}

function completeTable(beerRow, $element) {
  let template = " ";
  beerRow.forEach((beer) => {
    template += createRow(beer);
  });
  $element.innerHTML = template;
}

completeTable(aux(beers, "abv", true), $tbody);
