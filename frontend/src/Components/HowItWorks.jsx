import React from "react";
import '../Style/howItWorks.css'

function HowItWorks(){
    return(
        <div className="outer_container">
            <div className="heading">How it works</div>
            <div className="card_section">
                <div className="howItWorks_card">
                    <h1 id="card_a">1</h1>
                    <h4>Register your event</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, facere.</p>
                </div>
                <div className="howItWorks_card">
                    <h1 id="card_b">2</h1>
                    <h4>Voting</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, facere.</p>
                </div>
                <div className="howItWorks_card">
                    <h1 id="card_c">3</h1>
                    <h4>Get result</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, facere.</p>
                </div>
            </div>
        </div>
    )
}
export default HowItWorks;