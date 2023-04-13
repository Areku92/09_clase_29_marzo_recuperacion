import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'lightblue', padding: '20px' }}>
            <h2 style={{ margin: 0 }}>Logo</h2>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0 }}>
                <li>Inicio</li>
                <li>Login</li>
                <li>Registro</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav;
