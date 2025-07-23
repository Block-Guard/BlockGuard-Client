interface ApiBaseResponse {
  code: number;
  message: string;
}

export interface SignUpResponse extends ApiBaseResponse {
  data: {
    userId: number;
  };
}

export interface LoginResponse extends ApiBaseResponse {
  data: {
    userId: number;
    jwtToken: {
      grantType: string;
      accessToken: string;
      refreshToken: string;
    };
  };
}
