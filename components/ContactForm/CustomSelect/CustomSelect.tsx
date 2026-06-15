'use client';

import styles from './CustomSelect.module.scss';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  selectedOption: string;
  setFieldValue: (field: string, value: string) => void;
  handleSelect: (value: string, setFieldValue: (field: string, value: string) => void) => void;
  options: Option[];
  placeholder: string;
}

export default function CustomSelect({
  isOpen,
  setIsOpen,
  selectedOption,
  setFieldValue,
  handleSelect,
  options,
  placeholder,
}: CustomSelectProps) {
  return (
    <div className={styles.selectWrapper}>
      <div
        className={`${styles.select} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || placeholder}
        <span className={styles.selectArrow}>▼</span>
      </div>
      {isOpen && (
        <div className={styles.optionsList}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${selectedOption === option.value ? styles.selected : ''}`}
              onClick={() => handleSelect(option.value, setFieldValue)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
