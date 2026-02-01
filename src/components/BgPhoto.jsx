import React from "react";

const BgPhoto = () => {
  return (
    <>
      <section
        className="h-96 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2585539/pexels-photo-2585539.jpeg?cs=srgb&dl=pexels-kelly-2585539.jpg&fm=jpg')",
        }}
      >
        <h1 className="text-4xl font-bold">Welcome to My Site</h1>
        <p className="mt-4 text-lg">This section has a background image.</p>
      </section>
    </>
  );
};

export default BgPhoto;
