import React from 'react';
import Button from './Button';

export type TabOption<T extends string> = { label: string; value: T };

export type TabsProps<T extends string> = {
  options: TabOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ');

export function Tabs<T extends string>({ options, value, onChange, className }: TabsProps<T>) {
  return (
    <div
      className={cx(
        'bg-white rounded-[8px] p-[5px] flex sm:rounded-[10px] sm:p-1',
        className,
      )}
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <Button
            key={option.value}
            type="button"
            variant={active ? 'primary' : 'ghost'}
            rounded="md"
            // `inline` contributes no font-size or padding of its own, so the
            // sizing below is the single source of truth. Using a sized
            // variant instead would put two unprefixed `py-*` utilities in
            // the same class list, where the winner depends on Tailwind's
            // emit order rather than the order written here.
            size="inline"
            className={cx(
              'text-[13px] leading-5 px-4 py-[10px] font-semibold sm:text-lg sm:leading-7 sm:py-2',
              !active && '!text-black hover:!bg-black/5',
            )}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}

export default Tabs;
