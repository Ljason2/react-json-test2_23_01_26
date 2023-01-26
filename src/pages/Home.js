import "./Home.css"
import Logo from "../image/logo.png"


function Home(){
    return(
        <article id="home">
            <div>
            <h1>Main 페이지 입니다.</h1>
            <figure>
                <img src={Logo} alt="logo" />
                <figcaption>
                nisi id gravida ex elit vehicula, enim. orci lacus Cras tortor. dignissim, at, eu dignissim, sollicitudin. fringilla elit quis amet, malesuada diam tincidunt 
                </figcaption>
            </figure>
            </div>
        </article>
    )
}

export default Home;