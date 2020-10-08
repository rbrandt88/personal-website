import React from 'react'
import { useEffect } from 'react';
import './RougeLikeGame.css';



function RougeLikeGame() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className='rouge-like-game-container'>
                <h1>Rouge-like Console Game (Academic Project)</h1>
                <h3 className='project-tech'>C/C++</h3>
                <p><h4 className='project-brief'>Brief: </h4> A character based game where the player goes through a dungeon fighting different monsters and collecting power ups. 
                    The game ends when the player dies or kills all the monsters. 
                </p>
    

              
                <hr></hr>
                <h2>Key Features</h2>
                <ul>
                    <li>Random map generation</li>
                    <li>Save/Load Map</li>
                    <li>Powerup items and abilities (weapons, speed, damage, armor)</li>
                    <li>Random monster creation with abilities (speed, tunneling, teleporting)</li>
                    <li>Monster combat</li>
                    <li>Inventory menu, wear/drop items</li>
                
                </ul>
                <hr></hr>
                <h2>Key Learning Objectives</h2>
                <ul>
                    <li>C,C++</li>
                    <li>Object Orientated Programming</li>
                    <li>Memory Management</li>
                    <li>Data Structures</li>
        

                </ul>
                <hr></hr>
                <h2>Examples</h2>
                <img className='project-image' src={require('./Media/map.jpg')}alt="Map"/>
                <p>Maps are randomly generated. The player is represented as the @ symbol and the monsters are colored letters. 
                    The dots are rooms and the #s are tunnels connecting them. 
                    The random symbols are power ups and items. </p>
                <img className='project-image' src={require('./Media/monstersFollow.jpg')}alt="Monsters"/>
                <p>This is a typical game view. The player can only see the imediate area around him; however, they can still remember the previous areas. 
                    Here, the player can be seen running from the monsters, C,P, and zz. He is exploring the dungeon and has collected some items in his inventory</p>
                <img className='project-image' src={require('./Media/wearItems.jpg')}alt="Dead"/>
                <p> Here is a view of the player's inventory. You can choose to wear, swap, or equip items.</p>
                <img className='project-image' src={require('./Media/Dead.jpg')}alt="Dead"/>
                <p>Dead. If you fail to pick up enough power ups, you will be too weak for the monsters. Lucky items like swords are rare to find but will help you win.   </p>
               
                
           
      
            
         </div>
        
        </>
    );
}

export default RougeLikeGame; 