import React from "react";
import sample_image from "../../imgs/honduras2017/12.JPG";

export const TeamMember = () => {
  let name = "Hao Bui"; //name is UNIQUE. Will be used as ID
  let cred = "MD";
  let image1;
  let image2;
  let desc =
    "of the family Elephantidae and the order Proboscidea. Three living species are recognised: the African bush elephant, the African forest elephant, and the Asian elephant (all pictured). Distinctive features of elephants include a long, flexible proboscis (trunk), long tusks, large ear flaps, pillar-like legs, and grey skin. They are herbivorous, and stay near water when it is accessible. Females (cows) tend to live in family groups, which can consist of one female with her calves or several related females with offspring. After reaching adulthood, males (bulls) live separately, either alone or with other males. Elephants communicate by touch, sight, smell, and sound. Threats to their populations include poaching for their ivory tusks, habitat destruction, and conflicts with local people. Elephants are iconic in huma";

  return (
    <div>
      <label for={name} className=" cursor-zoom-in">
        <div className="m-2 md:m-3">
          <div className="card w-32 h-48 md:w-48 md:h-64 bg-base-100 shadow-xl drop-shadow-dark-2">
            <figure
              className=" h-full bg-transparent"
              style={{
                backgroundImage: `url(${sample_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></figure>
            <div className="card-body py-3">
              <h1 className="card-title m-auto leading-none text-base md:text-xl">
                {name} ({cred})
              </h1>
            </div>
          </div>
        </div>
      </label>

      <input type="checkbox" id={name} class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="text-3xl font-bold mb-6">
            {name} ({cred})
          </h3>

          <div>
            <img src={sample_image} className=" w-6/12 float-left mr-3"></img>
            <p class="py-4 text-left">{desc}</p>
          </div>
        </div>

        <label class="modal-backdrop" for={name}>
          Close
        </label>
      </div>
    </div>
  );
};
