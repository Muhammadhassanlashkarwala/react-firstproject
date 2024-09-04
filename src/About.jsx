import ImageAbout from './assets/hassan.jpg'

function About() {
    return(
       <div className="parentAbout">
     <h1 className="about">About</h1>
     <div className='display'>
        <img className='display-left' alt="hhhh" src={ImageAbout}> 
        </img>
<p className='display-right'> <span className='bolder'>I'm a Web Designer.</span> <br /> I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animation. I can provide more information for web design, I make youtube videos for free courses of web design & making a chatbot with the help of dialogflow, flowise, twilio etc. & interactive webstie with web animation. .A responsive design makes your website accessible to all users, regardless of their devices.</p>                        
     </div>

       </div>
    );
}
export default About