import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="aboutLeft">
            <img src={about_img} alt=""  className='about-img'/>
                    </div>
        <div className="aboutRight">
            <h3>About University</h3>
            <h2>Nurturing Tommorrow's Leaders Today </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sapiente rem alias.<br/> Nisi impedit, quae magnam cupiditate, dolore corrupti iusto ut qui magni incidunt cum amet veritatis in. Modi, aut.<br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam velit consectetur inventore? Laboriosam non odio ,<br/>est, ratione cumque possimus et veniam impedit obcaecati deleniti maxime repudiandae magni error dicta. Voluptate!
            </p>

        </div>
      
    </div>
  )
}

export default About
