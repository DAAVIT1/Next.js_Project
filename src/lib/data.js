import {
  getAllPosts,
  getPostBySlug,
  getAllUsers,
  getUserById,
} from "./mockStore";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    return getAllPosts();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    return getPostBySlug(slug);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    return getUserById(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    return getAllUsers();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
