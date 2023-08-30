import React from 'react'
import { useState, useEffect } from 'react'
import  axios  from 'axios';




function pokedex() {

    const [pokemon1, setPokemon1] = useState([]);
    const [pokemon2, setPokemon2] = useState([]);
    const [pokemon3, setPokemon3] = useState([]);
    const [pokemon4, setPokemon4] = useState([]);
    const [pokemon5, setPokemon5] = useState([]);
    const [pokemon6, setPokemon6] = useState([]);
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(2);
    const [number3, setNumber3] = useState(3);
    const [number4, setNumber4] = useState(4);
    const [number5, setNumber5] = useState(5);
    const [number6, setNumber6] = useState(6);


    const url1 = `https://pokeapi.co/api/v2/pokemon/${number1}`;
    const url2 = `https://pokeapi.co/api/v2/pokemon/${number2}`;
    const url3 = `https://pokeapi.co/api/v2/pokemon/${number3}`;
    const url4 = `https://pokeapi.co/api/v2/pokemon/${number4}`;
    const url5 = `https://pokeapi.co/api/v2/pokemon/${number5}`;
    const url6 = `https://pokeapi.co/api/v2/pokemon/${number6}`;
    
    axios.get(url1).then((response)=> {
        setPokemon1(response.data);
    });
    axios.get(url2).then((response)=> {
        setPokemon2(response.data);
    });
    axios.get(url3).then((response)=> {
        setPokemon3(response.data);
    });
    axios.get(url4).then((response)=> {
        setPokemon4(response.data);
    });
    axios.get(url5).then((response)=> {
        setPokemon5(response.data);
    });
    axios.get(url6).then((response)=> {
        setPokemon6(response.data);
    });
    
    const prev = () => {
        setNumber1((number) => number - 6);
        setNumber2((number) => number - 6);
        setNumber3((number) => number - 6);
        setNumber4((number) => number - 6);
        setNumber5((number) => number - 6);
        setNumber6((number) => number - 6);
    }

    const next = () => {
        setNumber1((number) => number + 6);
        setNumber2((number) => number + 6);
        setNumber3((number) => number + 6);
        setNumber4((number) => number + 6);
        setNumber5((number) => number + 6);
        setNumber6((number) => number + 6);
    }

    const prev100 = () => {
        setNumber1((number) => number - 100);
        setNumber2((number) => number - 100);
        setNumber3((number) => number - 100);
        setNumber4((number) => number - 100);
        setNumber5((number) => number - 100);
        setNumber6((number) => number - 100);
    }

    const next100 = () => {
        setNumber1((number) => number + 100);
        setNumber2((number) => number + 100);
        setNumber3((number) => number + 100);
        setNumber4((number) => number + 100);
        setNumber5((number) => number + 100);
        setNumber6((number) => number + 100);
    }

  return (

    <div>

        <div className='d-flex justify-content-center mt-5'>
            <button className='btn btn-primary btn-lg m-1' onClick={prev100}>Previos -100</button>
            <button className='btn btn-primary btn-lg m-1' onClick={prev}>Previos</button>
            <button className='btn btn-success btn-lg m-1' onClick={next}>Next</button>
            <button className='btn btn-success btn-lg m-1' onClick={next100}>Next +100</button>
        </div>

        <div className='d-flex justify-content-center mt-4'>

        <div className='d-flex justify-content-center'>
        <div className="card">
        <div className="row g-0">

            <div className="col align-self-center">
            <img src={pokemon1.sprites?.other?.home?.front_default} className="img-fluid rounded-start imagePokemon" alt=""/>
            </div>

            <div className="col">
            <div className="card-body">

                <h4 className="card-text">{pokemon1.id}. {pokemon1.name}</h4>

                <div className='card-text'>
                <div className="">height {pokemon1.height}</div>
                <div className="mt-1">weight {pokemon1.weight}</div>
                </div>

                <h4 className='mt-3'>types</h4>
                <div className="card-text">{pokemon1.types?.map((typ) => (
                    <div className='mt-1'>{typ.type.name}</div>
                ))}</div>

                <h4 className='mt-3'>abilities</h4>
                <div className="card-text">{pokemon1?.abilities?.map((abili) => (
                    <div className='mt-1'>{abili.ability.name}</div>
                ))}</div>

            </div>
            </div>

        </div>
        </div>
        </div>

        <div className='d-flex justify-content-center ms-3 me-3'>
        <div className="card">
        <div className="row g-0">

            <div className="col align-self-center">
            <img src={pokemon2.sprites?.other?.home?.front_default} className="img-fluid rounded-start " alt=""/>
            </div>

            <div className="col">
            <div className="card-body">

                <h4 className="card-text">{pokemon2.id}. {pokemon2.name}</h4>

                <div className='card-text'>
                <div className="">height {pokemon2.height}</div>
                <div className="mt-1">weight {pokemon2.weight}</div>
                </div>

                <h4 className='mt-3'>types</h4>
                <div className="card-text">{pokemon2.types?.map((typ) => (
                    <div className='mt-1'>{typ.type.name}</div>
                ))}</div>

                <h4 className='mt-3'>abilities</h4>
                <div className="card-text">{pokemon2?.abilities?.map((abili) => (
                    <div className='mt-1'>{abili.ability.name}</div>
                ))}</div>

            </div>
            </div>

        </div>
        </div>
        </div>

        <div className='d-flex justify-content-center'>
        <div className="card">
        <div className="row g-0">

            <div className="col align-self-center">
            <img src={pokemon3.sprites?.other?.home?.front_default} className="img-fluid rounded-start " alt=""/>
            </div>

            <div className="col">
            <div className="card-body">

                <h4 className="card-text">{pokemon3.id}. {pokemon3.name}</h4>

                <div className='card-text'>
                <div className="">height {pokemon3.height}</div>
                <div className="mt-1">weight {pokemon3.weight}</div>
                </div>

                <h4 className='mt-3'>types</h4>
                <div className="card-text">{pokemon3.types?.map((typ) => (
                    <div className='mt-1'>{typ.type.name}</div>
                ))}</div>

                <h4 className='mt-3'>abilities</h4>
                <div className="card-text">{pokemon3?.abilities?.map((abili) => (
                    <div className='mt-1'>{abili.ability.name}</div>
                ))}</div>

            </div>
            </div>

        </div>
        </div>
        </div>

        </div>

        <div className='d-flex justify-content-center mt-3'>

        <div className='d-flex justify-content-center'>
        <div className="card">
        <div className="row g-0">

            <div className="col align-self-center">
            <img src={pokemon4.sprites?.other?.home?.front_default} className="img-fluid rounded-start " alt=""/>
            </div>

            <div className="col">
            <div className="card-body">

                <h4 className="card-text">{pokemon4.id}. {pokemon4.name}</h4>

                <div className='card-text'>
                <div className="">height {pokemon4.height}</div>
                <div className="mt-1">weight {pokemon4.weight}</div>
                </div>

                <h4 className='mt-3'>types</h4>
                <div className="card-text">{pokemon4.types?.map((typ) => (
                    <div className='mt-1'>{typ.type.name}</div>
                ))}</div>

                <h4 className='mt-3'>abilities</h4>
                <div className="card-text">{pokemon4?.abilities?.map((abili) => (
                    <div className='mt-1'>{abili.ability.name}</div>
                ))}</div>

            </div>
            </div>

        </div>
        </div>
        </div>

        <div className='d-flex justify-content-center ms-3 me-3'>
        <div className="card">
        <div className="row g-0">

            <div className="col align-self-center">
            <img src={pokemon5.sprites?.other?.home?.front_default} className="img-fluid rounded-start " alt=""/>
            </div>

            <div className="col">
            <div className="card-body">

                <h4 className="card-text">{pokemon5.id}. {pokemon5.name}</h4>

                <div className='card-text'>
                <div className="">height {pokemon5.height}</div>
                <div className="mt-1">weight {pokemon5.weight}</div>
                </div>

                <h4 className='mt-3'>types</h4>
                <div className="card-text">{pokemon5.types?.map((typ) => (
                    <div className='mt-1'>{typ.type.name}</div>
                ))}</div>

                <h4 className='mt-3'>abilities</h4>
                <div className="card-text">{pokemon5?.abilities?.map((abili) => (
                    <div className='mt-1'>{abili.ability.name}</div>
                ))}</div>

            </div>
            </div>

        </div>
        </div>
        </div>

        <div className='d-flex justify-content-center'>
        <div className="card">
        <div className="row g-0">

            <div className="col align-self-center">
            <img src={pokemon6.sprites?.other?.home?.front_default} className="img-fluid rounded-start " alt=""/>
            </div>

            <div className="col">
            <div className="card-body">

                <h4 className="card-text">{pokemon6.id}. {pokemon6.name}</h4>

                <div className='card-text'>
                <div className="">height {pokemon6.height}</div>
                <div className="mt-1">weight {pokemon6.weight}</div>
                </div>

                <h4 className='mt-3'>types</h4>
                <div className="card-text">{pokemon6.types?.map((typ) => (
                    <div className='mt-1'>{typ.type.name}</div>
                ))}</div>

                <h4 className='mt-3'>abilities</h4>
                <div className="card-text">{pokemon6?.abilities?.map((abili) => (
                    <div className='mt-1'>{abili.ability.name}</div>
                ))}</div>

            </div>
            </div>

        </div>
        </div>
        </div>

        </div>






    </div>

  )
}

export default pokedex