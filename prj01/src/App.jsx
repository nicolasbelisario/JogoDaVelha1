import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Jogo from './assets/components/Jogo/Index'
import Topo from './assets/components/Topo';
import Musica from './assets/components/Musica';

export default function App(){
  return(
    <>
    <Topo/>
    <Jogo/>
    <Musica/>
    </>
  )
}

