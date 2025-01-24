import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="wrapper signUp">
      <div className="illustration">
        <img src="https://source.unsplash.com/random" alt="illustration" />
      </div>
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="name">E-Mail</label>
            <input type="text" id="name" placeholder="Enter your mail" />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder="Age" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" placeholder="Phone" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter your address" />
          </div>
          <div>
            <label htmlFor="aadhar">AAdhar Number</label>
            <input type="number" id="aadhar" placeholder="Aadhar" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter you password"
            />
          </div>
          <button type="submit">Submit</button>
          <h2 align="center" class="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/login"> Login </Link>
        </p>
      </div>
    </div>
  );
}
