import { assets } from "../assets/assets";

export default function About() {
  return (
    <div>
      <h1 className="flex items-center flex-col text-5xl">
        About Us
        <hr className="w-[10%] border-none h-[1.5px] bg-gray-700 mt-3" />
      </h1>

      <div className="flex items-center pt-16 flex-col">
        <img className=" h-auto" src={assets.about} />
        <p className="pt-16">
          Established in 2018, MushroomEssence is a gourmet and medicinal
          mushroom cultivation and distribution company with the objective of
          bringing the myriad of nutritional, medicinal and philosophical
          benefits of this relatively unknown species to the people of this
          world. We currently grow high-quality Cordyceps militaris mushroom in
          a controlled atmosphere with a completely vegan process that uses
          brown rice, glucose, vegetable proteins & vitamins, etc. We have built
          our first Cordyceps *militaris* mushroom lab in Gwalior, Madhya
          Pradesh. It has a capacity of producing up to 30 kg dried mushroom
          fruit bodies and other *mycelium* by-products per month. We maintain
          proper hygiene, cleanliness and follow all the standard food industry
          procedures during the whole process of mushroom cultivation i.e.
          substrate preparation, inoculation, incubation, harvesting, and
          packing.
        </p>
      </div>
    </div>
  );
}
