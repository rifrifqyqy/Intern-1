import "../../index.css";

export default function FooterSection() {
  return (
    <>
      <div className="grid grid-cols-3 bg-gray-800 justify-center w-full bottom-0 text-white py-12 px-24">
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
        </div>
      </div>
    </>
  );
}
