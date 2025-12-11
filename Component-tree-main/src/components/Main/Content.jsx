import PostList from "./PostList";

const Content = (props) => {
  return (
    <section style={{ width: "75%" }}>
      <h2>Постове</h2>
      <PostList posts={props.posts} />
    </section>
  );
};

export default Content;
