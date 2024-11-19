

const Banner = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?t=st=1732006917~exp=1732010517~hmac=3f1640fa9b7e24e131a575b1635fe48220fb4c840d66b7d772254c161be4dc66&w=826)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Wellcome to Gadget Shope</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;