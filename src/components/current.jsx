import React from 'react'
import handydandy from '../pictures/handydandyWork.png'
import style from '../styles//current.module.css'

function Current(){
    return (
        <div className='root'>
            <div className="container">
                <h2 className={style.currentHeader}>Currently Working on my Pet Project</h2>
                <img className={style.currentWorks} src={handydandy} alt=""/>
            </div>
        </div>
    )
}


export default Current;
