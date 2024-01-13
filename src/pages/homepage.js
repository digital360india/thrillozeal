import React from "react";

const HomePage = () => {
  return (
    <>
      <div>
        <nav className="w-screen h-[60px] bg-primary flex justify-center items-center ">
          <img src="./logo.png" className="h-8 w-32 " />
        </nav>
        <div className="w-screen h-screen ">
          <img src="./heroImage.png" className="w-[330px] mx-auto mt-3" />
          <div className="text-[36px] h-[156px] font-medium w-[300px] mx-auto absolute top-[300px] left-12">
            <p className="text-white">Goosebumps to your spirits.... </p>
            <p className="text-[#155A69]">this Carnival</p>
          </div>
          <div className="w-[330px] mt-16  mx-auto">
            <p>
              Lorem ipsum dolor sit amet. Sit officiis nostrum qui quibusdam
              possimus qui porro aliquam qui nemo nobis ad quia beatae. Ab sequi
              perferendis eos eius molestiae et molestias quos est amet eius in
              culpa saepe qui voluptate accusamus. Quo quas dolor eum omnis
              omnis aut aliquam facere ab distinctio sint quo suscipit obcaecati
              aut beatae aliquid non consequatur saepe. Sed inventore doloremque
              qui ratione temporibus et molestiae incidunt quo minima nihil aut
              numquam aliquid aut consequuntur aperiam est numquam dolorem.
            </p>
          </div>

          <div className="w-[330px]  mx-auto mt-6 ">
            <p className="text-[#155A69] h-6 font-medium text-[24px]  ">
              Experience our best trips to Rishikesh
            </p>
            <div className="flex flex-col  gap-3 mt-16 ">
              <div className=" h-[120px] w-[330px] relative">
                <img src="./Image2.png" />
                <p className="absolute bottom-3 text-white left-5 font-medium text-[24px]">
                  small / 9 km
                </p>
              </div>
              <div className=" h-[120px] w-[330px] relative">
                <img src="./Image3.png" />
                <p className="absolute bottom-3 text-white left-5 font-medium text-[24px]">
                  medium / 12 km
                </p>
              </div>
              <div className=" h-[120px] w-[330px] relative">
                <img src="./Image4.png" />
                <p className="absolute bottom-3 text-white left-5 font-medium text-[24px]">
                  large / 16 km
                </p>
              </div>
            </div>
          </div>
          <div className="w-[330px] mx-auto mt-5 relative" >
            <img src="./fa"/>

          </div>

        </div>
      </div>
    </>
  );
};

export default HomePage;
