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
    <div className={cx('bg-white rounded-[10px] p-1 flex', className)}>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <Button
            key={option.value}
            type="button"
            variant={active ? 'primary' : 'ghost'}
            rounded="md"
            size="sm"
            className={cx('text-lg font-semibold', !active && '!text-black hover:!bg-black/5')}
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
