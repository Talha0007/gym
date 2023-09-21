import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";
const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Ready to start</span>
        <span>Your Journey</span>
        <span className="stroke-text">Now Withus</span>
      </div>

      {/* Plans card */}
      <div className="plans">
        {plansData.map((plan, id) => (
          <div className="plan" key={id}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, id) => (
                <div className="feature" key={id}>
                  <img src={whiteTick} alt="" />
                  <span key={id}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits -&gt;</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
