import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="flex-col w-full flex-center">
      <h1 className="head_text text_center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="text-center orange_gradient"> AI-Powered Prompts</span>
      </h1>
      <p className="text-center desc">
        Promptopia is open-source AI prompting tool for modern
        world to discover, create and share creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
