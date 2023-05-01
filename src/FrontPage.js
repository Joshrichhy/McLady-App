import TopNav from "./pages/dashboard/component/TopNav";
import Hero from "./pages/dashboard/component/Hero";
import Body from "./pages/dashboard/component/Body";
import './FrontPage.css'

function FrontPage(){
        return(
            <div className="dashBoard">

                <Hero/>
                <Body/>
            </div>
        )

}
export default FrontPage