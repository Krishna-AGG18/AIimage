import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Landing = () => {
  const items = [
    "https://i.pinimg.com/1200x/9b/c8/a6/9bc8a66cc4ecd5901674bf43e5fff8de.jpg",
    "https://i.pinimg.com/736x/11/50/10/1150106db13b0cae280f5165a8632b71.jpg",
    "https://i.pinimg.com/736x/29/f2/e8/29f2e8b5e59c5c235e4a12d24ca265ff.jpg",
    "https://i.pinimg.com/736x/d2/10/84/d2108417e3d51dab827f04b2b83d44c7.jpg",
    "https://media.timeout.com/images/105990233/image.jpg",
    "https://charsheet-gen.s3.eu-west-2.amazonaws.com/charsheet-gen/ffad3524-e355-447c-b41d-83f30effcc65.png",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfms5ec-cf286a4f-f135-4c07-8b82-0ef27b5dd2a6.png/v1/fill/w_1920%2Ch_1920%2Cq_80%2Cstrp/being_cyberpunk__ai_art__by_3d1viner_dfms5ec-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtczVlYy1jZjI4NmE0Zi1mMTM1LTRjMDctOGI4Mi0wZWYyN2I1ZGQyYTYucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VqxIHaVuQVFd_BPAklqdZiLknWeM1XgQxsznZ3y1Fiw",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-2 bg-white text-[#1D1C1B]">
        <div className="flex justify-center items-center text-center px-4 pt-8">
          <h1 class=" md:text-[48px] sm:text-[36px] text-[24px] text-center font-semibold">
            Create stunning AI images in seconds
          </h1>
        </div>
        <div className="flex justify-center items-center text-center px-4">
          <h2 class="md:text-[36px] sm:text-[24px] text-[16px] text-center">
            Turn your ideas into visuals using AI
          </h2>
        </div>

        {/* horizontal scroll */}
        <div className="overflow-hidden w-full py-8 ">
          <div
            className="flex w-max 
            [animation:scroll_20s_linear_infinite]"
          >
            <div className="flex gap-6 px-4">
              {items.map((item, i) => (
                <div
                  key={`a-${i}`}
                  className="
        sm:w-48 w-28 h-28 sm:h-48
        bg-gray-200
        rounded-xl
        sm:p-3
        p-1.5
        overflow-hidden
        flex items-center justify-center
        shrink-0
        transition-all duration-300
        hover:scale-105 hover:shadow-lg
      "
                >
                  <img
                    src={item}
                    alt={`img-${i}`}
                    className="
          w-full h-full
          object-cover
          rounded-lg
          transition-transform duration-300
          hover:scale-110
        "
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-6 px-4">
              {items.map((item, i) => (
                <div
                  key={`a-${i}`}
                  className="
        sm:w-48 w-28 h-28 sm:h-48
        bg-gray-200
        rounded-xl
        sm:p-3
        p-1.5
        overflow-hidden
        flex items-center justify-center
        shrink-0
        transition-all duration-300
        hover:scale-105 hover:shadow-lg
      "
                >
                  <img
                    src={item}
                    alt={`img-${i}`}
                    className="
          w-full h-full
          object-cover
          rounded-lg
          transition-transform duration-300
          hover:scale-110
        "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full py-2">
          <div className="w-full flex justify-center items-center gap-4">
            <button className="bg-[#1d1b1c] py-2 px-4 flex justify-center items-center text-[12px] text-white rounded-2xl">
              ✨ Generate Images
            </button>
            <button className=" border-2 border-[#1d1b1c] py-2 px-4 flex justify-center items-center font-semibold text-[12px] text-[#1d1b1c] rounded-2xl">
              Login Now
            </button>
          </div>
        </div>

        {/* How we use it  */}
        {/* How we use it */}
        <section className="w-full bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12 text-gray-900">
              How it works
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:shadow-md transition bg-[#ebebeb]">
                <p className="text-4xl">1️⃣</p>
                <p className="text-lg font-medium text-gray-900">
                  Enter a prompt
                </p>
                <p className="text-gray-600 max-w-xs">
                  Describe what you imagine in simple words
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:shadow-md transition bg-[#ebebeb]">
                <p className="text-4xl">2️⃣</p>
                <p className="text-lg font-medium text-gray-900">
                  AI generates the image
                </p>
                <p className="text-gray-600 max-w-xs">
                  Our AI understands your prompt and creates visuals
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:shadow-md transition bg-[#ebebeb]">
                <p className="text-4xl">3️⃣</p>
                <p className="text-lg font-medium text-gray-900">
                  Download or save
                </p>
                <p className="text-gray-600 max-w-xs">
                  Access your images anytime after login
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
