import React from 'react';
import { Link } from 'react-router-dom';

import { SubHeading, MenuItem } from '../../components';
import { images,data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding ' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title="Menu che si adatta al tuo palato"/>
        <h1 className='headtext__cormorant'>Piatti più popolari</h1>
      </div>

      <div className="app__specialMenu-menu">

      <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu-menu_heading'>Rolls</p>
          <div className='app__specialMenu_menu_items'>
            {data.rolls.map((roll, index) =>(
              <MenuItem key={roll.title + index} title={roll.title} price={roll.price} tags={roll.tags}/>
            ))}
          </div>
        </div>

        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="menu" />
        </div>

        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Salmon & Sushi</p>
          <div className='app__specialMenu_menu_items'>
            {data.sushis.map((sushi, index) =>(
              <MenuItem key={sushi.title + index} title={sushi.title} price={sushi.price} tags={sushi.tags}/>
            ))}
          </div>
        </div>


      </div>

      <div style={{marginTop: '15px'}}>
        <Link to={'/menu'}><button type='button' className='custom__button'>Visualizza di più</button></Link>
      </div>

    </div>
  )
}

export default SpecialMenu
