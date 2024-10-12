export interface IRoles {
  roleId: number;
  role: string;
}

export interface IDesignations {
  designationId: number;
  designation: string;
}

export interface ApiResponseType {
  message: string;
  result: boolean;
  data: any;
}
