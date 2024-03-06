import React from 'react';
import handydandy from '../pictures/handydandyWork.png';
import style from '../styles/current.module.css';

function Current(){
    return (
        <div className={style.root}>
            <div className={style.content}>
                <h2 className={style.currentHeader}>Currently Working on my Pet Project</h2>
                <h3 className={style.subheader}>Stay tuned for more...</h3>
                <div className={style.imageWrapper}>
                    <img className={style.currentWorks} src={handydandy} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Current;
