import { Component } from "react";

 export const routes = [
    {name: 'Login',
    path: '/Login'},

    {name: 'Productos',
    path: '/Productos'},

    {name: 'Nosotros',
    path: '/Nosotros',
    // component : () =><Home/> es para importar los elementos y ahorrar codigo
}
]

//para agregar estas rutas dinamicas, recordar en el "li" colocarle una KEY