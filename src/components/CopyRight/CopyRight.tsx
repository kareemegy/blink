interface CopyRightProps {
  className?: string;
}

const CopyRight = ({ className }: CopyRightProps) => {
  return (
    <p className={`mt-1 text-xs md:text-base ${className}`}>
      Copyright © 2023 bl:nk™. All Rights Reserved.
    </p>
  );
};

export default CopyRight;
