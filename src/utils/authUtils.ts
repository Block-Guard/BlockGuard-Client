export const isPasswordFormRight = (password: string): boolean => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;
  return regex.test(password);
};
export const isEmailFormRight = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
export const isBirthDateFormRight = (birthDate: string) => {
  const regex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;
  return regex.test(birthDate);
};
export const formatPhoneNumber = (phoneNumber: string): string => {
  const onlyDigits = phoneNumber.replace(/\D/g, "");

  if (onlyDigits.startsWith("02")) {
    // 서울 번호 (10자리): 02-1234-5678
    if (onlyDigits.length <= 2) return onlyDigits;
    if (onlyDigits.length <= 6)
      return onlyDigits.replace(/(\d{2})(\d{1,4})/, "$1-$2");
    if (onlyDigits.length <= 10)
      return onlyDigits.replace(/(\d{2})(\d{4})(\d{1,4})/, "$1-$2-$3");
    return onlyDigits.slice(0, 10).replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
  } else {
    // 휴대폰 번호 (11자리): 010-1234-5678
    if (onlyDigits.length <= 3) return onlyDigits;
    if (onlyDigits.length <= 7)
      return onlyDigits.replace(/(\d{3})(\d{1,4})/, "$1-$2");
    if (onlyDigits.length <= 11)
      return onlyDigits.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
    return onlyDigits.slice(0, 11).replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  }
};
