import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk("books/fetchBooks", async () => {
  const res = await axios.get(
    "https://api.capital-system.com/news/index?offset=0&limit=10",
    {
      headers: {
        Authorization: "Bearer H4TNnYslx082e1KpHZJkpgzPzAVSNYEu",
        "instance-token": "beOYHnJwB7mjZ94NJo4lmu-yM1PEcUY5",
      },
    }
  );
  return res;
});
