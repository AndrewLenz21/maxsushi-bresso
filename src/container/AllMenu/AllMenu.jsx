import React from 'react'
import { Link } from 'react-router-dom';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './AllMenu.css';

const allMenu = () => {
    return (
        <div className='app__specialMenu flex__center section__padding ' id='menu'>
            <div className='app__specialMenu-title' style={{ marginTop: '3rem' }}>
                <SubHeading title="Menu che si adatta al tuo palato" />
                <h1 className='headtext__cormorant'>Il nostro menu</h1>
            </div>

            <div className="app__specialMenu-menu">

                <div className='app__specialMenu-menu_cocktails flex__center'>
                    <p className='app__specialMenu-menu_heading'>Antipasti</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.antipasti.map((antipasti, index) => (
                            <MenuItem key={antipasti.title + index} title={antipasti.title} price={antipasti.price} tags={antipasti.tags} />
                        ))}
                    </div>
                </div>

                <div className='app__specialMenu-menu_wine flex__center'>
                    <p className='app__specialMenu-menu_heading'>Insalate</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.insalate.map((insalate, index) => (
                            <MenuItem key={insalate.title + index} title={insalate.title} price={insalate.price} tags={insalate.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Tartare</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.tartare.map((tartare, index) => (
                            <MenuItem key={tartare.title + index} title={tartare.title} price={tartare.price} tags={tartare.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Onigiri</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.onigiri.map((onigiri, index) => (
                            <MenuItem key={onigiri.title + index} title={onigiri.title} price={onigiri.price} tags={onigiri.tags} />
                        ))}
                    </div>
                </div>

            </div>

            <div className="app__specialMenu-menu">

                <div className='app__specialMenu-menu_cocktails flex__center'>
                    <p className='app__specialMenu-menu_heading'>Hoso</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.hoso.map((hoso, index) => (
                            <MenuItem key={hoso.title + index} title={hoso.title} price={hoso.price} tags={hoso.tags} />
                        ))}
                    </div>
                </div>

                <div className='app__specialMenu-menu_wine flex__center'>
                    <p className='app__specialMenu-menu_heading'>Temaki</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.temaki.map((temaki, index) => (
                            <MenuItem key={temaki.title + index} title={temaki.title} price={temaki.price} tags={temaki.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Maki</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.maki.map((maki, index) => (
                            <MenuItem key={maki.title + index} title={maki.title} price={maki.price} tags={maki.tags} />
                        ))}
                    </div>
                </div>

            </div>
            <div className="app__specialMenu-menu">

                <div className='app__specialMenu-menu_cocktails flex__center'>
                    <p className='app__specialMenu-menu_heading'>Sushi Roll</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.sushiroll.map((sushiroll, index) => (
                            <MenuItem key={sushiroll.title + index} title={sushiroll.title} price={sushiroll.price} tags={sushiroll.tags} />
                        ))}
                    </div>
                </div>

                <div className='app__specialMenu-menu_wine flex__center'>
                    <p className='app__specialMenu-menu_heading'>Gunkan</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.gunkan.map((gunkan, index) => (
                            <MenuItem key={gunkan.title + index} title={gunkan.title} price={gunkan.price} tags={gunkan.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Ball</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.ball.map((ball, index) => (
                            <MenuItem key={ball.title + index} title={ball.title} price={ball.price} tags={ball.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Nigiri</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.nigiri.map((nigiri, index) => (
                            <MenuItem key={nigiri.title + index} title={nigiri.title} price={nigiri.price} tags={nigiri.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Sashimi</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.sashimi.map((sashimi, index) => (
                            <MenuItem key={sashimi.title + index} title={sashimi.title} price={sashimi.price} tags={sashimi.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Gamberi</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.gamberi.map((gamberi, index) => (
                            <MenuItem key={gamberi.title + index} title={gamberi.title} price={gamberi.price} tags={gamberi.tags} />
                        ))}
                    </div>

                </div>

            </div>

            <div className="app__specialMenu-menu">

                <div className='app__specialMenu-menu_cocktails flex__center'>
                    <p className='app__specialMenu-menu_heading'>Pasta e Riso</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.pastariso.map((pastariso, index) => (
                            <MenuItem key={pastariso.title + index} title={pastariso.title} price={pastariso.price} tags={pastariso.tags} />
                        ))}
                    </div>
                </div>

                <div className='app__specialMenu-menu_wine flex__center'>
                    <p className='app__specialMenu-menu_heading'>Pollo</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.pollo.map((pollo, index) => (
                            <MenuItem key={pollo.title + index} title={pollo.title} price={pollo.price} tags={pollo.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Manzo</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.manzo.map((manzo, index) => (
                            <MenuItem key={manzo.title + index} title={manzo.title} price={manzo.price} tags={manzo.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Poke</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.poke.map((poke, index) => (
                            <MenuItem key={poke.title + index} title={poke.title} price={poke.price} tags={poke.tags} />
                        ))}
                    </div>
                </div>

            </div>

            <div className="app__specialMenu-menu">

                <div className='app__specialMenu-menu_cocktails flex__center'>
                    <p className='app__specialMenu-menu_heading'>Box Sushi</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.boxsushi.map((boxsushi, index) => (
                            <MenuItem key={boxsushi.title + index} title={boxsushi.title} price={boxsushi.price} tags={boxsushi.tags} />
                        ))}
                    </div>
                </div>

                <div className='app__specialMenu-menu_wine flex__center'>
                    <p className='app__specialMenu-menu_heading'>Salse</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.salse.map((salse, index) => (
                            <MenuItem key={salse.title + index} title={salse.title} price={salse.price} tags={salse.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Bevande</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.bevande.map((bevande, index) => (
                            <MenuItem key={bevande.title + index} title={bevande.title} price={bevande.price} tags={bevande.tags} />
                        ))}
                    </div>
                    <p className='app__specialMenu-menu_heading'>Birre</p>
                    <div className='app__specialMenu_menu_all'>
                        {data.birre.map((birre, index) => (
                            <MenuItem key={birre.title + index} title={birre.title} price={birre.price} tags={birre.tags} />
                        ))}
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '15px' }} className='buttons__menu'>
                <p className='p__cormorant'>Ordina ora</p>
                <button type='button' className='custom__button call__button' onClick={() => window.open('tel:3889989153')}>Chiama</button>
                <button type='button' className='custom__button' onClick={() => window.open('https://bit.ly/MaxSushi-UberEats')}>Uber Eats</button>
                <button type='button' className='custom__button' onClick={() => window.open('https://bit.ly/MaxSushi-Glovo')}>GlovoApp</button>
                <button type='button' className='custom__button' onClick={() => window.open('https://bit.ly/MaxSushi-Deliveroo')}>Deliveroo</button>
                <button type='button' className='custom__button' onClick={() => window.open('https://bit.ly/MaxSushi-JustEat')}>Just Eat</button>
            </div>

        </div>
    )
}

export default allMenu