import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '@/firebase';
import Post from './Post';
import { collection } from '@firebase/firestore';
const Posts = () => {
  const [realtimePosts, loading] = useCollection(collection(db, 'posts'));
  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          image={post.data().postImage}
          timestamp={post.data().timestamp}
          userImage={post.data().image}
        />
      ))}
    </div>
  );
};

export default Posts;
