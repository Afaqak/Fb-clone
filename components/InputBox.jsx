import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

import { db, storage } from '@/firebase';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL, getStorage, uploadString } from 'firebase/storage';
// import { collection, doc, serverTimestamp } from '@firebase/firestore';
import { collection, serverTimestamp, setDoc, doc, addDoc } from 'firebase/firestore';

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = async (e) => {
    console.log(inputRef.current.value);
    e.preventDefault();
    if (!inputRef.current.value) return;

    await addDoc(collection(db, 'posts'), {
      message: inputRef.current.value,
      name: session.user.name,
      timestamp: serverTimestamp(),
    })
      .then((docRef) => {
        if (imageToPost) {
          const storage = getStorage();
          const storageRef = ref(storage, `posts/${docRef.id}`);
          uploadString(storageRef, imageToPost, 'data_url')
            .then((snapshot) => {
              console.log('Uploaded a data_url string!');
            })
            .then(() => {
              getDownloadURL(storageRef).then((url) => {
                setDoc(
                  doc(db, 'posts', docRef.id),
                  {
                    postImage: url,
                  },
                  { merge: true }
                );
              });
            })
            .catch((error) => {
              console.error('Error writing document: ', error);
            });

          removeImage();
        }
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className='mt-6 mx-auto bg-gray-50 p-2 rounded-2xl shadow-md space-y-2'>
      <div className='flex space-x-4 text-gray-500 font-medium px-10 py-4 mx-auto'>
        <Image
          src={session?.user.image}
          className='rounded-full'
          width={40}
          height={40}
          layout='fixed'
          alt='profile'
        />
        <form className='flex flex-1'>
          <input
            ref={inputRef}
            type='text'
            placeholder={`What's on your mind, ${session?.user.name}?`}
            className='rounded-full h-12 bg-gray-100 flex-grow focus:outline-none px-4'
          />
          <button
            onClick={sendPost}
            type='submit'
            hidden
          >
            Submit
          </button>

          {imageToPost && (
            <div className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
              <img
                src={imageToPost}
                className='h-10 object-contain'
              />
              <p
                onClick={removeImage}
                className='text-xs text-red-500 text-center'
              >
                Remove
              </p>
            </div>
          )}
        </form>
      </div>
      <div className='flex justify-evenly p-3'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className='inputIcon'
        >
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input
            type='file'
            hidden
            ref={filePickerRef}
            onChange={addImageToPost}
          />
        </div>
        <div className='inputIcon'>
          <FaceSmileIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
