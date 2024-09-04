import profilePic from './assets/service.png'
import youtubePic from './assets/youtube.jpg'
import githubPic from './assets/github.png'
import instagramPic from './assets/instagram2.png'

function Service() {

    const Service1 = 'PhysicalTeacher'
    const Service2 = 'YoutubeStudy'
    const Service3 = 'InstgramIdeas'
    const Service4 = 'CodeGithub'

    return(
        <div className="serviceBox">
        <h1 className="service">Services</h1>
            <ul className="ul-li">
                <li className="listitem">{Service1}</li>
                <li className="listitem1">{Service2}</li>
                <li className="listitem2">{Service3}</li>
                <li className="listitem3">{Service4}</li>
            </ul>
            <div className='parentCards'>
     <div className="card">
        <img className="mypic" src={profilePic} alt="img"></img>
        <h2 className="heading">Sir Hassan</h2>
        <p className="para">Physical & Online training of classes!</p>
         </div>
              <div className="card">
              <img className="mypic" src={youtubePic} alt="img"></img>
              <h2 className="heading">Coding Zone</h2>
              <p className="para">I make youtube videos and play video games!</p>
               </div>
               <div className="card">
              <img className="mypic" src={instagramPic} alt="img"></img>
              <h2 className="heading">~theadore_hassan~</h2>
              <p className="para">Reels and informative data for Designer!</p>
               </div>
               <div className="card">
              <img className="mypic" src={githubPic} alt="img"></img>
              <h2 className="heading">hassanlashkarwala</h2>
              <p className="para">You need code for coding projects!</p>
               </div>
               </div>

            </div>
    );
    
}
export default Service