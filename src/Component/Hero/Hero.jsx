import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="text-content">
                <div className="subtitle">
                    <h4><span className="slash">//</span> Welcome to Cybersecurity X <span className="slash">//</span>
                    </h4>
                </div>
            </div>
            <div className="display">
                <h1 className="h1-display">
                    <span style={{color: "#1E6AFF"}}>Safeguard </span> your online
                    <div  className=" overflowing-h1">
                   <span> presence today</span>
                    </div>
                </h1>
            </div>
            <div className="p1-display">
                <p>Did you know that over 80% of internet users have experienced some form
                    <div className="p-overflow">
                        of cyber attack? Don't be a
                        victim—secure your online presence now.
                    </div>
                    </p>

            </div>


        </div>
    );
};

export default Hero;
