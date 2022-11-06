import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Limite = 3;


const Api = () => {
    const [lista, setLista] = useState([])
    const navegate = useNavigate()

    const fetchApi = () =>{
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${Limite}`) //Promesa de URL
        .then( response => response.json()) // Resolvemos y lo convertimos a json
        .then( data => setLista(data))
        .catch(e => console.log(e))
    }

    const detalle = ({character}) =>{
        const [nombre, apellido] = character.split("") //destructuro character en dos componentes "nombre y apellido"
        console.log(nombre, apellido);
        navegate(`/detalle/${nombre}, ${apellido} `)
    }

    useEffect(() =>{
        fetchApi();
    },[])
    

  return (
      <div className='d-flex'>
        
            {lista.map((personaje, index)=>

            <Card style={{ width: '18rem' }} key={index} onClick={ () =>detalle(personaje)} className="my-4 mx-5" >
                <Card.Body>

                    <Card.Title><h2 className=''>{personaje.character}</h2> </Card.Title>   
                    <Card.Img variant="top" src={personaje.image}/>
                    <Card.Text>{personaje.quote}</Card.Text>
                    <Button>Consultar nuevo Personaje</Button>
                </Card.Body>
            </Card>
            )}
    </div>
  )
}

export default Api