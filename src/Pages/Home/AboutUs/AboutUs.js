import React from "react";
import img1 from "../../../images/human/adult-blur-blurred-background-687824.png";
import img2 from "../../../images/human/chef-cook-food-33614.png";
import img3 from "../../../images/human/architecture-building-city-2047397.png";
import busIcon from "../../../images/icons/bus.png";
import trackIcon from "../../../images/icons/delivarytrack.png";
import bellIcon from "../../../images/icons/bell.png";
const AboutUs = () => {
  return (
    <div>
      <section className="container">
        <div className="grid grid-cols-2 p-9">
          <div>
            <h1 className="text-4xl font-semibold pb-1">Why you choose us</h1>
            <p className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              sunt eius, ut reprehenderit iusto corrupti sequi ratione tenetur
              laboriosam eveniet fugit mollitia numquam laudantium, tempore amet
              tempora odit. In, rerum!
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-3 gap-9 p-10">
          <span className="p-2 rounded-lg hover:shadow-xl font-medium">
            <img src={img1} alt="" />
            <span className="flex items-center my-3 gap-3 ">
              <img src={busIcon} alt="" />
              <h1 className="text-xl ">Quick Delivery</h1>
            </span>
            <p className="px-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              provident optio sit consequuntur consectetur! Libero repellat
              minus sed..
            </p>
          </span>
          <span className="p-2 rounded-lg hover:shadow-xl font-medium">
            <img src={img2} alt="" />
            <span className="flex items-center my-3 gap-3 ">
              <img src={bellIcon} alt="" />
              <h1 className="text-xl ">Quick Delivery</h1>
            </span>
            <p className="px-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              provident optio sit consequuntur consectetur! Libero repellat
              minus sed..
            </p>
          </span>
          <span className="p-2 rounded-lg hover:shadow-xl font-medium">
            <img src={img3} alt="" />
            <span className="flex items-center my-3 gap-3 ">
              <img src={trackIcon} alt="" />
              <h1 className="text-xl ">Quick Delivery</h1>
            </span>
            <p className="px-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              provident optio sit consequuntur consectetur! Libero repellat
              minus sed..
            </p>
          </span>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
