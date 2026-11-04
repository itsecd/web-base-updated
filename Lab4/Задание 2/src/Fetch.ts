import { Api, CommentDTO, PostDTO } from "./Api";

const api = new Api();

export async function getOddPosts(): Promise<PostDTO[]> {
    const allPosts = await api.getPosts();
    return allPosts.filter(post => post.id % 2 !== 0).slice(0, 5);
}

export async function getEvenComments(): Promise<CommentDTO[]> {
    const allComments = await api.getComments();
    return allComments.filter(comment => comment.id % 2 === 0).slice(0, 5);
}