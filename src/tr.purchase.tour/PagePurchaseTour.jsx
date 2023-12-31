import React, { useState ,useRef } from "react";
import { Link } from "react-router-dom";

import Header from "../tr.all.header/Header";
import Menu from "../tr.all.menu/Menu";
import Comments from "../tr.comments/Comments";
import InfoPageTour from "../tr.top.info.tour/InfoPageTour";
import Hoocks from "../Hoocks";

import './pagePurchaseTour.scss';

import Aleks from '../assets/img/Александров/1.webp';

function PagePurchaseTour() {
    const {
        vlad, infoTourTitle, setControlRouters
    }= Hoocks();


    const [opofpsdf, setOpofpsdf] = React.useState('')

    function op1() {
        setControlRouters('Вседение')
        window.location.href = 'router-tour'
    }
    function op2() {
        setControlRouters('Маршрут 1')
        window.location.href = 'router-tour'
    }
    function op3() {
        setControlRouters('Маршрут 2')
        window.location.href = 'router-tour'
    }
    function op4() {
        setControlRouters('Маршрут 3')
        window.location.href = 'router-tour'
    }
    function op5() {
        setControlRouters('Маршрут 4')
        window.location.href = 'router-tour'
    }

    return (
        <div className='bgb'>
        <div className="opMbox">
            <Menu/>
                <div className='info__page_tour cl__container-size'
                    style={{
                        position:'relative',
                        zIndex:'2'
                    }}
                >
                    <div>
                        <InfoPageTour title={vlad +' - '+ infoTourTitle} router='4 маршрута' price='Куплено'/>
                        <i className='back_btn'><Link to='/profile'>Назад</Link></i>
                        <div className='containet__wrapper_in-tour' style={{padding:'0'}}>
                        <p style={{marginLeft:'20px',marginBottom:'15px',padding:'10px', color:'#616161'}}>Для того что бы начать маршрут, сделайте <span style={{color:'#23A6FF'}}> клик </span> по одному из маршрутов</p>
                            <Link onClick={op1} to='' className='popopo' style={{padding:'0', paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Введение</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>3 мин</p>
                                </div>
                            </Link>
                            <Link onClick={op2} to='' className='popopo' style={{padding:'0', paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 1</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>26 мин</p>
                                </div>
                            </Link>
                            <Link onClick={op3} to='' className='popopo' style={{padding:'0', paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 2</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>14 мин</p>
                                </div>
                            </Link>
                            <Link onClick={op4} to='' className='popopo' style={{padding:'0', paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 3</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>21 мин</p>
                                </div>
                            </Link>
                            <Link onClick={op5} to='' className='popopo' style={{padding:'0',paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 4</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>19 мин</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='container__comments cl__container-size'
                    style={{
                        paddingBottom: '80px'
                    }}>
                        <h1 className='name__comments_container' 
                            style={{
                                marginLeft: '20px'
                            }}
                        >Комментарии</h1>
                        <div className="comments__in_container">
                            <input className="input__field" placeholder="Написать комментарий"/>
                            <input className="comments__in_btn" type="button"/>
                        </div>
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                    </div>
                </div>

            <div className="opBox opBoxTwoo"></div>
        </div>
    </div>
    );
}

export default PagePurchaseTour;
