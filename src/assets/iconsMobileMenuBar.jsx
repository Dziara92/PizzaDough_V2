/* eslint-disable react/prop-types */
export const IconBar = ({ isOpenMenu }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={
        !isOpenMenu
          ? `w-6 h-6 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] transition opacity-100 duration-300 `
          : `opacity-0 top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]`
      }
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export const IconCloseBar = ({ isOpenMenu }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={
        isOpenMenu
          ? ` transition w-6 h-6 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]  opacity-100 duration-300`
          : `opacity-0 top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]`
      }
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
