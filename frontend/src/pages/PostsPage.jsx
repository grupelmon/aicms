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
    <div className="grid posts-layout">
      <section className="card">
        <h2>Editor de posts</h2>
        <form className="stack" onSubmit={createPost}>
          <label>Título<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título del post" /></label>
          <label>Contenido<textarea value={content} onChange={(e) => setContent(e.target.value)} rows="8" placeholder="Escribe aquí..." /></label>
          <button type="submit">Guardar borrador</button>
        </form>
      </section>

      <section className="card">
        <h2>Listado de posts</h2>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
