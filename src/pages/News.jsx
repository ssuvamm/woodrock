import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchBlogPost = async () => {
  const spreadsheetId = "1yPJ5TFwuyNFol7U6XzBi6zpMKAGrweEMO_fbSb7I9u4";
  const apiKey = "**";
  const range = "Sheet1"; // Name of the sheet in your spreadsheet
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}!B2:C2?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data.values[0]; // Assuming the first row contains the blog post data
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};

const News = () => {
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await fetchBlogPost();
      setBlogPost(post);
    };

    fetchPost();
  }, []);

  if (!blogPost) {
    return <div className="py-[20dvh] ">Loading...</div>;
  }

  const [title, description, imageUrl] = blogPost;

  return (
    <div className="min-h-[100dvh] py-[20dvh]">
      <h1>{title}</h1>
      <p>{description}</p>
      {imageUrl && <img src={imageUrl} alt="Blog Post" />}
    </div>
  );
};

export default News;
