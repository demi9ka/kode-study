import { mask } from 'react-native-mask-text';

const DEFAULT_PATTERN = '+7 999 999-99-99';

export type TGetMaskedPhone = {
  phone?: string;
  pattern?: string;
};

export const getMaskedPhone = ({
  phone,
  pattern = DEFAULT_PATTERN,
}: TGetMaskedPhone) => {
  if (!phone) {
    return '';
  }

  const maskedPhone = mask(phone, pattern);
  return maskedPhone;
};
