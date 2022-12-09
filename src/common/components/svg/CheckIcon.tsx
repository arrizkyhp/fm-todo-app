import { SvgProps } from '~/types/SvgProps';

const CheckIcon = (props: SvgProps) => {
  const { width = '11 ', height = '9', color = '#494C6B' } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        d="M1 4.304L3.696 7l6-6"
      />
    </svg>
  );
};

export { CheckIcon };
