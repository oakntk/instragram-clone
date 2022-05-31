import React, { useEffect, useState } from "react";
import '../css/Story.css'
import axios from "axios";

const Story = () => {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        const getStory = async () => {
            const data2 = await axios.get(
                "https://run.mocky.io/v3/f48649bf-2bfd-48db-9a64-5c8ad0646186"
            );
            setStories(data2);
        };
        getStory();
    }, []);

    console.log("data2: ", stories);


    return (
        <>
            {stories.map((story) => {
                console.log(story.data2)
                return
            })}
        </>
    )
};

export default Story