import React from "react";
import Hero from "../components/Hero/hero";
import { assets } from "../assets/assets";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex items-center flex-col pt-36">
        <h1 className="text-5xl">A Mushroom for All of Your Needs</h1>
        <p className=" text-lg pt-8 text-center px-8 pb-28">
          Harness the healing power of medicinal mushrooms with supplements
          formulated by registered dietitians for purity and maximum
          effectiveness. Modern research now confirms ancient knowledge: The
          RIGHT mushrooms, when cultivated and extracted properly, deliver
          life-enriching health benefits. NutroMushroom provides the most potent
          extracts in the form of powders, tinctures, and multi-mushroom blends.
          We ensure high amounts of the healthiest compounds in mushrooms,
          backed by scientific research.
        </p>
        <h1 className="text-5xl pb-9">Our Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 ">
          <div className="flex items-center flex-col ">
            <img
              className="hover:scale-110 transition ease-in-out"
              src={assets.img5}
            />
            <p className="pt-3 pb-1 text-sm">Cordycep militaris</p>
            <p className=" text-sm font-medium">2500</p>
          </div>
          <div className="flex items-center flex-col ">
            <img
              className="hover:scale-110 transition ease-in-out"
              src={assets.img1}
            />
            <p className="pt-3 pb-1 text-sm">Lions mane</p>
            <p className=" text-sm font-medium">3000</p>
          </div>

          <div className="flex items-center flex-col ">
            <img
              className="hover:scale-110 transition ease-in-out"
              src={assets.img2}
            />
            <p className="pt-3 pb-1 text-sm">Coffee mushroom</p>
            <p className=" text-sm font-medium">1500</p>
          </div>

          <div className="flex flex-col ">
            <img
              className="hover:scale-110 transition ease-in-out"
              src={assets.img3}
            />
            <p className="pt-3 pb-1 text-sm">Cordycep militaris</p>
            <p className=" text-sm font-medium">1400</p>
          </div>
        </div>
      </div>
    </div>
  );
}
