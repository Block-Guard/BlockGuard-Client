export interface NOKInfoType {
  guardiansId: number;
  name: string;
  phoneNumber: string;
  isPrimary: boolean;
  profileImageUrl: string | null;
}

export interface NOKFormType {
  name: string;
  phoneNumber: string;
  profileImage: File | null;
}
