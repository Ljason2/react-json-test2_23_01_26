import './About.css';
import Man from '../image/portfolio-img-3.jpg';

function About(){
    return(
        <article id="about">
            <div>
            <h1>about</h1>
            <figure>
                <img src={Man} alt="상세이미지" />
                <figcaption>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lectus mauris. Fusce ultrices in orci ac rhoncus. 
                Duis dictum tempus neque, eu bibendum nibh viverra quis. Etiam sagittis ullamcorper volutpat. Vestibulum lacinia risus sed ligula malesuada volutpat. 
                Quisque molestie condimentum purus at rhoncus. 
                Donec faucibus condimentum erat, ut varius orci ultricies vitae. Nam viverra diam diam, at egestas tellus interdum condimentum.
                </figcaption>
            </figure>
            </div>
        </article>
    )
}

export default About;