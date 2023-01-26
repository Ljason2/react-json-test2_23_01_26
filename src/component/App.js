import Header from "./Header"
import Footer from "./Footer"

function App({children}){
    return(
        <div id="wrap">
        <Header />
        <div id="content">{children}</div>
        <Footer />
        </div>
    )
}


export default App;