import { cn } from '@sambi/ui';

const CanvaLogo = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Canva logo"
      viewBox="0 0 257.603 96"
      {...props}
      className={cn('h-12 w-28 fill-muted-foreground', props.className)}
    >
      <path
        id="a"
        d="M247.299 62.683c-.343 0-.859.343-1.03.859-2.404 7.041-5.839 11.163-8.415 11.163-1.546 0-2.233-1.717-2.233-4.465 0-6.869 4.122-21.295 6.182-27.993.172-.859.343-1.546.343-2.061 0-1.889-1.03-2.92-3.606-2.92-2.748 0-5.839 1.03-8.759 6.182-1.03-4.465-4.122-6.526-8.415-6.526-4.98 0-9.789 3.263-13.739 8.415s-8.587 6.869-12.021 6.011c2.576-6.182 3.435-10.648 3.435-14.082 0-5.324-2.576-8.587-6.869-8.587-6.526 0-10.304 6.182-10.304 12.708 0 4.98 2.233 10.132 7.385 12.708-4.122 9.445-10.304 18.032-12.708 18.032-3.091 0-3.95-14.769-3.778-25.245.172-6.011.687-6.354.687-8.243 0-1.03-.687-1.717-3.435-1.717-6.354 0-8.415 5.324-8.587 11.678-.172 2.404-.515 4.637-1.03 7.041-2.748 9.445-8.243 16.658-11.678 16.658-1.717 0-2.061-1.717-2.061-3.778 0-6.869 3.778-15.456 3.778-22.669 0-5.324-2.404-8.759-6.869-8.759-5.152 0-12.193 6.182-18.719 17.86 2.233-8.93 3.091-17.517-3.263-17.517a7.976 7.976 0 0 0-3.95 1.03c-.859.343-1.374 1.202-1.374 2.233.687 9.445-7.728 33.832-15.456 33.832-1.374 0-2.061-1.546-2.061-3.95 0-6.869 4.122-21.295 6.182-27.993.343-.859.343-1.546.343-2.233 0-1.889-1.202-2.748-3.606-2.748-2.748 0-5.839 1.03-8.759 6.182-1.03-4.465-4.122-6.526-8.415-6.526-7.041 0-14.941 7.385-18.376 17.174-4.637 12.88-13.911 25.417-26.447 25.417-11.335.003-17.345-9.443-17.345-24.383 0-21.639 15.8-39.327 27.649-39.327 5.667 0 8.243 3.606 8.243 9.102 0 6.698-3.778 9.789-3.778 12.365 0 .859.687 1.546 1.889 1.546 5.152 0 11.163-6.011 11.163-14.254s-6.698-14.599-18.376-14.599c-19.406 0-38.984 19.578-38.984 44.651 0 19.921 9.789 31.943 26.791 31.943 11.678 0 21.81-9.102 27.306-19.578.687 8.759 4.637 13.224 10.648 13.224 5.324 0 9.789-3.263 13.052-8.759 1.202 5.839 4.637 8.759 9.102 8.759 4.98 0 9.274-3.263 13.224-9.102 0 4.637 1.03 9.102 4.98 9.102 1.889 0 4.122-.515 4.637-2.061 4.293-17.689 14.769-32.114 18.031-32.114 1.03 0 1.202.859 1.202 2.061 0 4.809-3.435 14.598-3.435 20.952 0 6.698 2.92 11.335 8.759 11.335 6.526 0 13.224-8.072 17.689-19.921 1.374 10.991 4.465 19.921 9.102 19.921 5.839 0 16.143-12.193 22.326-25.073 2.404.343 6.182.172 9.617-2.233a32.148 32.148 0 0 0-2.404 12.193c0 12.021 5.667 15.456 10.648 15.456 5.324 0 9.789-3.263 13.052-8.759 1.03 5.152 3.95 8.759 9.102 8.759 8.072 0 15.113-8.243 15.113-15.113.343-2.233-.515-3.263-1.374-3.263zM79.685 74.018c-3.263 0-4.465-3.263-4.465-8.243 0-8.587 5.839-22.669 12.021-22.669 2.748 0 3.778 3.091 3.778 7.041-.172 8.587-5.667 23.871-11.335 23.871zm111.8-25.417c-1.889-2.233-2.576-5.496-2.576-8.243 0-3.435 1.202-6.354 2.748-6.354s2.061 1.546 2.061 3.606c-.172 3.435-1.374 8.415-2.233 10.991zm25.245 25.417c-3.263 0-4.465-3.778-4.465-8.243 0-8.243 5.839-22.669 12.021-22.669 2.748 0 3.606 3.091 3.606 7.041 0 8.587-5.496 23.871-11.163 23.871z"
      />
    </svg>
  );
};

export default CanvaLogo;
