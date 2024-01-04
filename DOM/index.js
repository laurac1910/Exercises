///// #1
const $title = document.getElementById("title");

/////// #2
const maintitle = "Frutas";
$title.textContent = maintitle;

/////// #3

const $headerFooter = document.querySelectorAll(".header_footer");
const styleHeaderFooter = `bg-orange-300`;

$headerFooter[0].className = styleHeaderFooter;
$headerFooter[1].className = styleHeaderFooter;

/////// #4

const $footerP = document.querySelector(`footer p`);
const textFooter = " Laura Camargo Cohort #53";

$footerP.textContent += textFooter;

////// #5

const $divId = document.getElementById(`container`);

////// #6

function card(frutas) {
  return `<section class="cards w-full text-center border  w-96 shadow-lg flex flex-col w-full  border-black  rounded-xl  flex-wrap mb-6 lg:w-4/12 lg:inline-flex lg:max-h-72 lg:max-w-80  ">
  <img class="max-w-40 self-center lg:max-w-20 p-5 " src="${frutas.foto}">
    <h2 class="font-bold lg:py-5 ">${frutas.nombre}</h2>
    <p class="px-20 lg:px-0 lg:pb-5 ">${frutas.descripcion}</p>
    </section>`;
}

/////// #7 y #8

$divId.innerHTML += frutas.reduce(
  (acumulador, fruta) => (acumulador += card(fruta)),
  " "
);

////////// #10 y #11

const frutasDulces = frutas.filter((fruta) => fruta.esDulce);
function dulces(elementos) {
  const listaUl = document.createElement(`ul`);
  elementos.forEach((fruta) => {
    const listaLi = document.createElement(`li`);
    listaLi.textContent = fruta.nombre;
    listaUl.appendChild(listaLi);
  });
  return listaUl;
}

const $lista = document.getElementById(`lista`);
$lista.appendChild (dulces(frutasDulces));
