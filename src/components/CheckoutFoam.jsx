import React from "react";
import FoamSection from "./FoamSection";
import FoamInput from "./FoamInput";
import Checkbox from "./Checkbox";

// Icons
import AccountIcon from "../assets/icons/account_circle.svg";
import CallIcon from "../assets/icons/call.svg";
import EmailIcon from "../assets/icons/email.svg";
import HomeIcon from "../assets/icons/home.svg";
import LocationIcon from "../assets/icons/location_city.svg";
import UnreadMailIcon from "../assets/icons/markunread_mailbox.svg";
import PublicIcon from "../assets/icons/public.svg";

const validated = () => alert("Validation Successful");

const CheckoutFoam = props => {
  return (
    <form
      className="foam-container"
      id="checkoutform"
      method="get"
      onSubmit={validated}
    >
      <FoamSection title="Contact information">
        <FoamInput title="Email" src={EmailIcon}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            required
          />
        </FoamInput>
        <FoamInput title="Phone" src={CallIcon}>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone..."
            pattern="[0-9]{10}"
            required
          />
        </FoamInput>
      </FoamSection>
      <FoamSection title="Shipping address">
        <FoamInput title="Full Name" src={AccountIcon}>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter your name..."
            required
          />
        </FoamInput>
        <FoamInput title="Address" src={HomeIcon}>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Your address.."
            required
          />
        </FoamInput>
        <FoamInput title="City" src={LocationIcon}>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Your city.."
            required
          />
        </FoamInput>
        <div className="sidebyside">
          <FoamInput title="Country" src={PublicIcon}>
            <select
              className="placeholder"
              name="country"
              id="country"
              required
            >
              <option value="" disabled selected hidden>
                Your Country
              </option>
              <option value="in">India</option>
              <option value="us">United States</option>
              <option value="eng">England</option>
            </select>
          </FoamInput>
          <FoamInput title="Postal code" src={UnreadMailIcon}>
            <input
              type="text"
              name="postal_code"
              id="postal_code"
              placeholder="Your postal code.."
              required
            />
          </FoamInput>
        </div>
        <Checkbox
          label="Save this information for next time"
          value="1"
          id="saveInfo"
          name="saveInfo"
          required
        />
      </FoamSection>
      <input className="btn" type="submit" value="Continue" />
    </form>
  );
};

export default CheckoutFoam;
