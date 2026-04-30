import { useEffect, useState } from 'react';
import api from '../api/client';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const loadPosts = async () => {
    const { data } = await api.get('/posts');
    setPosts(data.data || []);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const createPost = async (e) => {
    e.preventDefault();
    await api.post('/posts', { title, content, published: false });
    setTitle('');
    setContent('');
    loadPosts();
  };

  return (
    <div>
      <h1>Posts</h1>
      <form onSubmit={createPost}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
        <button type="submit">Create</button>
      </form>
      <ul>{posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
}
