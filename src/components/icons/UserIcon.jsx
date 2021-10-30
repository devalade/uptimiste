import React from "react";

function UserIcon({ className }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4994C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4994V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4994C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4994V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.0002 3.33268C8.61945 3.33268 7.50016 4.45197 7.50016 5.83268C7.50016 7.21339 8.61945 8.33268 10.0002 8.33268C11.3809 8.33268 12.5002 7.21339 12.5002 5.83268C12.5002 4.45197 11.3809 3.33268 10.0002 3.33268ZM5.8335 5.83268C5.8335 3.5315 7.69898 1.66602 10.0002 1.66602C12.3013 1.66602 14.1668 3.5315 14.1668 5.83268C14.1668 8.13387 12.3013 9.99935 10.0002 9.99935C7.69898 9.99935 5.8335 8.13387 5.8335 5.83268Z'
      />
    </svg>
  );
}

export default UserIcon;