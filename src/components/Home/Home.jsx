function Home() {
  return (
    <div id="app" className="h-screen w-full">
      <div id="wrapper" className="p-4">
        <div id="greeting">
          <h1 className="text-3xl flex justify-center pt-4">
            How do you want to to start?
          </h1>
          <h3 className="flex justify-center py-2">
            Start from scracth, or upload your Linkedin profile
          </h3>
        </div>

        <div
          id="box-container"
          className="flex flex-col sm:flex-row justify-center items-center"
        >
          <div
            id="box1"
            className="p-4 rounded-lg border-violet-400 border-2 m-4 h-1/2"
          >
            <div id="upper-half">
              <h1 className="text-center text-2xl">Create a New Resume</h1>
              <h2 className="text-center">
                Start with a blank template. We will guide you step by step
              </h2>
            </div>
            <div id="lower-half" className="flex justify-center mt-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="Resume template"
              />
            </div>
          </div>
          <div
            id="box2"
            className="p-4 rounded-lg border-violet-400 border-2 m-4 h-1/2"
          >
            <div id="upper-half">
              <h1 className="text-center text-2xl">Create a New Resume</h1>
              <h2 className="text-center">
                Start with a blank template. We will guide you step by step
              </h2>
            </div>
            <div id="lower-half" className="flex justify-center mt-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="Resume template"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <h1>
            By continuing, you agree to our&nbsp;
            <a
              href="https://google.com/"
              className="text-sky-500 hover:underline"
            >
              Terms of Services
            </a>{" "}
            and&nbsp;
            <a
              href="https://google.com/"
              className="text-sky-500 hover:underline"
            >
              Privacy Policy
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
