import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className='nav'>
                {/* <p>Ikeji II</p> */}
                <img src={assets.ikeji_banner} alt="" />
            </div>
            <div className='main-content'>
                <p>Generate your own Conference Display Picture</p>
                <form>
                   
                    <input type="button" value="Edit" />

                    <input type="button" value="Download" />

                </form>  
            </div>
        </div>
    )
}

export default Main
