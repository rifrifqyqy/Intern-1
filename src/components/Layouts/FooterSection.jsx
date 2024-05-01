import "../../index.css";

export default function FooterSection() {
  return (
    <>
      <div className="grid grid-cols-3 bg-gray-800 justify-center w-full bottom-0 text-white pt-12 pb-4 px-24 mt-16">
        <div>
          <p className="border-2 bg-w px-4 py-2 max-w-fit">Company</p>
        </div>
        <div className="footer flex flex-col">
          <h1 className="text-xl font-bold">Courses</h1>
          <p>Course-1</p>
          <p>Course-1</p>
          <p>Course-1</p>
          <p>Course-1</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Contact</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus in, fugiat voluptatum a tempore quibusdam adipisci quod aliquam cum architecto!</p>
        </div>
        <div className="flex col-span-3 justify-center mt-8">
          <p>©2024 Company. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
