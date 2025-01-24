import React from "react";
import '../Style/featureAndBenefits.css'

function FeatureAndBenefits() {
  return (
    <>
      <div className="heading">Feature and Benefits</div>
      <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt iusto adipisci tempora accusamus consequatur sequi aliquid ab sint nihil.</div>
      <div className="featureAndBenefits_container">
        <div className="card" id="privacy">
            <h4>Privacy</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quaerat!</p>
        </div>
        <div className="card"  id="reliability">
            <h4>Reliability</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quaerat!</p>
        </div>
        <div className="card" id="globalReach">
            <h4>Global Reach</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quaerat!</p>
        </div>
        <div className="card" id="secure">
            <h4>Secure</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quaerat!</p>
        </div>
      </div>
    </>
  );
}
export default FeatureAndBenefits;
