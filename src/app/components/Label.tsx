import { LabelProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Label(props: LabelProps) {
  const { className, ...rest } = props;

  return (
    <label
      className={twMerge(
        "text-sm font-medium text-gray-700 dark:text-gray-300",
        className
      )}
      {...rest}
    />
  );
}
