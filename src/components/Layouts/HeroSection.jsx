import { Fragment } from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  const title_style = "text-[32px] leading-[130%] font-medium bg-white";

  return (
    <Fragment>
      <div className="flex h-[500px] w-full justify-between">
        <div className="flex justify-center w-1/2">
          <div className="flex flex-col justify-center w-[500px]">
            <h1 className={title_style}>Bangun karir bisnis Anda dengan Course kami!</h1>
            <p className=" self-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia vel tenetur voluptatem dignissimos cumque mollitia maiores, inventore laudantium recusandae suscipit?</p>
            <Button className="max-w-fit mt-5">Berlangganan</Button>
          </div>
        </div>
        <div className="bg-gray-200 flex bg-cover bg-center text-white w-1/2 rounded-bl-[32px] rounded">
          <img src="/images/konten4.png" alt="" className="bottom-0 ml-32" />
        </div>
      </div>
    </Fragment>
  );
}
