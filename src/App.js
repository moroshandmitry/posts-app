import React, { useState } from "react";
import { Title } from "./Title";
import "./styles.scss";

const state = [
  {
    id: 1,
    title: "Wellcome our app!",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining
    essentially unchanged.`,
    count: 23
  },
  {
    id: 2,
    title: "Hello World!",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book.`,
    count: 45
  },
  {
    id: 3,
    title: "Last post!",
    text: `It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining
    essentially unchanged.`,
    count: 100
  }
];

export const App = () => {
  const [showPosts, setShowPosts] = useState(true);
  const [posts, setPosts] = useState(state);

  // Если результат не равен текущему id пропусти посты, если равен удали
  // УДАЛЯЕМ 1 ПОСТ!
  // 1 !== 1 удали false
  // 1 !== 2 оставь true
  // 1 !== 3 оставь true
  // Predicate (предикат) ЛИБО true ЛИБО false (p) => p.id !== postId)
  const handleRemovePost = (postId) =>
    setPosts((prevPosts) => prevPosts.filter((p) => p.id !== postId));

  return (
    <div>
      <button onClick={() => setShowPosts(!showPosts)}>Toggle posts!</button>
      {showPosts &&
        posts.map((post) => (
          <div key={post.id} style={{ padding: 10 }}>
            <Title amount={post.count}>{post.title}</Title>
            <p>{post.text}</p>
            <button onClick={() => handleRemovePost(post.id)}>
              Remove post #{post.id}
            </button>
          </div>
        ))}
    </div>
  );
};
