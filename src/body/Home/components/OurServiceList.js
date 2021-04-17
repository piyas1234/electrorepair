import React from "react";
import img from "../../images/smartphone.png";
import img2 from "../../images/vault.png";
import img3 from "../../images/repair.png";
import img4 from "../../images/repair (1).png";
import img5 from "../../images/data-recovery.png";
import img6 from "../../images/game-console.png";
import img7 from "../../images/smartphone.png";

const OurServiceList = () => {
  const data = [
    {
      title: "Smartphone Repair",
      description:
        "If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…",
      img: img,
    },
    {
      title: "Computer Repair",
      description:
        "If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…",
      img: img2,
    },
    {
      title: "Electronics Repair",
      description:
        "If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…",
      img: img3,
    },
    {
      title: "Console Repair",
      description:
        "If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…",
      img: img4,
    },
    {
      title: "Electronics Recovery",
      description:
        "If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…",
      img: img5,
    },
    {
      title: "Check before purchase",
      description:
        "If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…",
      img: img6,
    },
  ];
  return (
    <div style={{ backgroundColor: "#F7F8F9" }}>
      <div className="col-md-10 offset-md-1">
        <div className="row">
          {data &&
            data.map(({ title, description, img }) => {
              return (
                <div className="gx-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="d-flex align-items-center m-auto">
                    <div className="  p-5">
                      <img
                        className="card-img w-25 mb-4"
                        src={img}
                        alt=""
                        srcset=""
                      />
                      <h5>{title}</h5>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OurServiceList;
