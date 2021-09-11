import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const url = "https://hn.algolia.com/api/v1/items/";

const SingleStory = () => {
  const { id } = useParams();
  const [story, setStory] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);
        if (data) {
          console.log(data.title);
          const newData = {
            title: data.title,
            points: data.points,
            elem: data.children
          };
          setStory(newData);
          console.log(story);
        } else {
          setStory({});
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);

  if (story) {
    return (
      <>
        <section className="stories">
          <article className="story">
            <h4 className="title">{story.title}</h4>
            <p className="info">Points: {story.points}</p>
            <p className="info">Comments</p>

            {story.elem
              ? story.elem.map((item, index) => {
                  return (
                    <div key={index} className="story1">
                      {item.text}
                    </div>
                  );
                })
              : null}
          </article>
        </section>
      </>
    );
  }
};

export default SingleStory;
