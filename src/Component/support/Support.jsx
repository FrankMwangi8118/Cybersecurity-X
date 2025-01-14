import "./Support.css"
import Marquee from "react-fast-marquee";

const Support=()=>{
    return (
<div>
    <div className="support-p">

        <p className="p-content">Support by many entities around the country</p>

    </div>
    <div className="sliding-content">
        <Marquee speed={30} gradient={false}>
            <h1 >Company
                /
                Enterprise
                /
                Startup
                /
                Business
                /
                Studio
                /
                Organization
                /
                Institute
                /
                Company
                /
                Enterprise

                /

                Enterprise
                /
                Startup
                /
                Business
                /
                Studio
                /
                Organization
                /
                Institute
                /
                Company
                /</h1>
            <p style={{color:"red"}}></p>
        </Marquee>
    </div>


</div>
    )
}
export default Support;