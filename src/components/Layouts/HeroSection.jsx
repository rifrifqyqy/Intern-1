import { Fragment } from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  const title_style = "text-4xl font-medium bg-white";

  return (
    <Fragment>
      <div className="flex h-[500px] w-full justify-between">
        <div className="flex justify-center w-1/2">
          <div className="flex flex-col justify-center">
            <h1 className={title_style}>Bangun karir bisnis Anda!</h1>
            <p className=" self-start">Ikuti kelas kami</p>
            <Button className="max-w-fit mt-5">Berlangganan</Button>
          </div>
        </div>
        <div className="bg-gray-200 bg-cover bg-center text-white w-1/2 rounded-bl-[32px] rounded"  >
          <img src="" alt="" />
        </div>
      </div>
    </Fragment>
  );
}
