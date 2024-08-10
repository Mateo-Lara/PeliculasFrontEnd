import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      <Link
      to = '/generos'
      tabIndex = {0}
      className="navbar-brand"   
      >
        LARA'S MOVIES
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavLink 
        to='/generos'
        tabIndex = {1}
        className="nav-link"
        >
          Generos
        </NavLink>
        <NavLink 
        to='/directores'
        tabIndex = {2}
        className="nav-link"
        >
          Directores
        </NavLink>
        <NavLink 
        to='/productoras'
        tabIndex = {3}
        className="nav-link"
        >
          Productoras
        </NavLink>
        <NavLink 
        to='/tipos'
        tabIndex = {4}
        className="nav-link"
        >
          Tipos
        </NavLink>
        <NavLink 
        to='/medias'
        tabIndex = {5}
        className="nav-link"
        >
          Peliculas y series
        </NavLink>
      </ul>
    </div>
  </div>
</nav>
    )
}
