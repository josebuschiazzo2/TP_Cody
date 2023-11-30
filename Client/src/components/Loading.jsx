import React from 'react'
import '../styles/loading.css'
function Loading() {
    return (
        <div className='containerLoading d-flex flex-column'>
            <div className='loader_screen'></div>
            <h4 className='loading_text'>Cargando...
            </h4>
        </div>
    )
}

export default Loading
