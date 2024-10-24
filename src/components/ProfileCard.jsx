import React from 'react';

const ProfileCard = ({ name, image, socials, designation }) => {
  return (
    <div className="max-w-lg mx-auto bg-gray-800 border-2  shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <img
          className="w-56 h-56 rounded-full mx-auto"
          src={image}
          alt={`${name}'s profile`}
        />
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-white">{name}</h2>
          <h3 className="text-2xl font-semibold text-white">{designation}</h3>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.69V9h3.38v11.45zM5.37 7.52c-1.08 0-1.95-.87-1.95-1.95 0-1.08.87-1.95 1.95-1.95 1.08 0 1.95.87 1.95 1.95 0 1.08-.87 1.95-1.95 1.95zM20.45 20.45h-3.37v-5.64c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99v5.74H9.66V9h3.24v1.57h.05c.45-.85 1.53-1.76 3.14-1.76 3.36 0 3.98 2.21 3.98 5.08v6.56z" />
              </svg>
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.17c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.335-5.466-5.931 0-1.311.469-2.381 1.236-3.22-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.404 1.02.006 2.047.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.656 1.653.243 2.874.12 3.176.77.839 1.236 1.909 1.236 3.22 0 4.607-2.803 5.625-5.475 5.921.432.372.816 1.102.816 2.222v3.293c0 .322.216.694.824.576 4.765-1.588 8.2-6.085 8.2-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.581-.666 2.491 0 1.722.87 3.244 2.188 4.13-.807-.026-1.566-.248-2.228-.616v.061c0 2.404 1.713 4.408 3.977 4.863-.416.111-.855.171-1.307.171-.319 0-.626-.031-.927-.088.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.107-6.102 2.107-.396 0-.788-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.056 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634.961-.689 1.8-1.56 2.462-2.548l-.047-.02z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;