/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AdminCategoryList = {
  data?: Maybe<Array<Maybe<Category>>>;
  pagination?: Maybe<Pagination>;
};

export type AdminCategoryNested = {
  data?: Maybe<Array<Maybe<CategoryNested>>>;
  pagination?: Maybe<Pagination>;
};

export type AdminContactList = {
  data?: Maybe<Array<Maybe<Contact>>>;
  pagination?: Maybe<Pagination>;
};

export type AdminProduct = {
  categories?: Maybe<Array<Maybe<Category>>>;
  city_or_province?: Maybe<Scalars['String']['output']>;
  commented?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<ProductDetailOwner>;
  discount?: Maybe<Scalars['String']['output']>;
  discounted_price?: Maybe<Scalars['String']['output']>;
  group_or_village?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  khan_or_district?: Maybe<Scalars['String']['output']>;
  parent_category?: Maybe<Category>;
  price?: Maybe<Scalars['String']['output']>;
  product_description?: Maybe<Scalars['String']['output']>;
  product_images?: Maybe<Array<Maybe<Image>>>;
  product_name?: Maybe<Scalars['String']['output']>;
  sangkat_or_commune?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ProductStatusEnum>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type AdminProductFilter = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  seller_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Array<InputMaybe<ProductStatusEnum>>>;
};

export type AdminProductInput = {
  category_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  city_or_province?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  discount?: InputMaybe<Scalars['String']['input']>;
  group_or_village?: InputMaybe<Scalars['String']['input']>;
  khan_or_district?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  product_description?: InputMaybe<Scalars['String']['input']>;
  product_image?: InputMaybe<Array<InputMaybe<ImageInput>>>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  sangkat_or_commune?: InputMaybe<Scalars['String']['input']>;
};

export type AdminProductList = {
  data?: Maybe<Array<Maybe<AdminProduct>>>;
  pagination?: Maybe<Pagination>;
};

export type AdminUser = {
  documentInfo?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  info?: Maybe<Scalars['JSON']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Role>;
  status?: Maybe<Status>;
  userProfile?: Maybe<Scalars['String']['output']>;
};

export type AdminUserBusinessInput = {
  planId?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminUserIndividualInput = {
  planId?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminUserInput = {
  documentInfo?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  userProfile?: InputMaybe<Scalars['String']['input']>;
};

export type AdminUserList = {
  data?: Maybe<Array<Maybe<AdminUser>>>;
  pagination?: Maybe<Pagination>;
};

export type AdminUserListPlanTypeInput = {
  planId?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminUserRegistrationList = {
  data?: Maybe<Array<Maybe<UserRegistration>>>;
  pagination?: Maybe<Pagination>;
};

export type AdminUsersBusiness = {
  business_name?: Maybe<Scalars['String']['output']>;
  business_req_no?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  request_by?: Maybe<RequestBy>;
  status?: Maybe<UsersBusinessEnum>;
};

export type AdminUsersBusinessDetail = {
  banner?: Maybe<Scalars['String']['output']>;
  business_license?: Maybe<Scalars['String']['output']>;
  business_name?: Maybe<Scalars['String']['output']>;
  business_req_no?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  patent?: Maybe<Scalars['String']['output']>;
  request_by?: Maybe<RequestBy>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UsersBusinessEnum>;
};

export type AdminUsersBusinessFilter = {
  status?: InputMaybe<Array<InputMaybe<UsersBusinessEnum>>>;
};

export type AdminUsersBusinessList = {
  data?: Maybe<Array<Maybe<AdminUsersBusiness>>>;
  pagination?: Maybe<Pagination>;
};

export type AmountUsers = {
  count?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
};

export type AmountUsersInMonth = {
  count?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['String']['output']>;
};

export type AppCategoryList = {
  data?: Maybe<Array<Maybe<Category>>>;
  pagination?: Maybe<Pagination>;
};

export type AppCategoryNested = {
  data?: Maybe<Array<Maybe<CategoryNested>>>;
  pagination?: Maybe<Pagination>;
};

export type AppProduct = {
  categories?: Maybe<Array<Maybe<Category>>>;
  city_or_province?: Maybe<Scalars['String']['output']>;
  commented?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<ProductDetailOwner>;
  discount?: Maybe<Scalars['String']['output']>;
  discounted_price?: Maybe<Scalars['String']['output']>;
  group_or_village?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  khan_or_district?: Maybe<Scalars['String']['output']>;
  parent_category?: Maybe<Category>;
  price?: Maybe<Scalars['String']['output']>;
  product_description?: Maybe<Scalars['String']['output']>;
  product_images?: Maybe<Array<Maybe<Image>>>;
  product_name?: Maybe<Scalars['String']['output']>;
  sangkat_or_commune?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ProductStatusEnum>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type AppProductFilter = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  city_or_province?: InputMaybe<Scalars['String']['input']>;
  group_or_village?: InputMaybe<Scalars['String']['input']>;
  khan_or_district?: InputMaybe<Scalars['String']['input']>;
  lower_price?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<AppProductFilterPrice>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  sangkat_or_commune?: InputMaybe<Scalars['String']['input']>;
  seller_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ProductStatusEnum>;
  upper_price?: InputMaybe<Scalars['Float']['input']>;
};

export enum AppProductFilterPrice {
  Asc = 'ASC',
  Desc = 'DESC',
  Popular = 'POPULAR'
}

export type AppProductList = {
  data?: Maybe<Array<Maybe<AppProduct>>>;
  pagination?: Maybe<Pagination>;
};

export type AppRequestForgotPasswordOtpInput = {
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AppRequestSignUpOtpInput = {
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AppShopList = {
  data?: Maybe<Array<Maybe<AdminUsersBusiness>>>;
  pagination?: Maybe<Pagination>;
};

export type AppUser = {
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  user_profile?: Maybe<Scalars['String']['output']>;
};

export type AppUserList = {
  data?: Maybe<Array<Maybe<AppUser>>>;
  pagination?: Maybe<Pagination>;
};

export type AppUsersBusiness = {
  banner?: Maybe<Scalars['String']['output']>;
  business_license?: Maybe<Scalars['String']['output']>;
  business_name?: Maybe<Scalars['String']['output']>;
  business_req_no?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  patent?: Maybe<Scalars['String']['output']>;
  request_by?: Maybe<RequestBy>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UsersBusinessEnum>;
};

export type AppUsersBusinessInput = {
  banner?: InputMaybe<Scalars['String']['input']>;
  business_license?: InputMaybe<Scalars['String']['input']>;
  business_name?: InputMaybe<Scalars['String']['input']>;
  business_req_no?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  patent?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<UsersBusinessEnum>;
};

export type AssignRoleInput = {
  roleId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type BusinessUpdateStatusInput = {
  status?: InputMaybe<Status>;
};

export type Category = {
  category_image?: Maybe<Scalars['String']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  parent_category_name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type CategoryFilter = {
  category_name?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryInput = {
  category_image?: InputMaybe<Scalars['String']['input']>;
  category_name?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryNested = {
  category_image?: Maybe<Scalars['String']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Category>>>;
  created_at?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  parent_category_name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ChangePasswordAdminUserInput = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};

export type ChangePasswordUserInput = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};

export type Contact = {
  contact_description?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ContactFilter = {
  fullname?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUsInput = {
  contact_description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNewPasswordUserInput = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type Dashboard = {
  total_categories?: Maybe<Scalars['Int']['output']>;
  total_products?: Maybe<Scalars['Int']['output']>;
  total_users?: Maybe<Scalars['Int']['output']>;
  total_users_accepted?: Maybe<Scalars['Int']['output']>;
  total_users_inreviewing?: Maybe<Scalars['Int']['output']>;
  total_users_pending?: Maybe<Scalars['Int']['output']>;
  total_users_rejected?: Maybe<Scalars['Int']['output']>;
};

export enum EditMeEnum {
  Approved = 'APPROVED',
  Inreview = 'INREVIEW',
  Rejected = 'REJECTED'
}

export type ForgotPasswordUserInput = {
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type Image = {
  created_at?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type ImageInput = {
  image_url?: InputMaybe<Scalars['String']['input']>;
  upload_order?: InputMaybe<Scalars['Int']['input']>;
};

export type IndividualUpdateStatusInput = {
  status?: InputMaybe<Status>;
};

export type LoginAdminUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponse = {
  token?: Maybe<Scalars['String']['output']>;
};

export type ManageRolePermissionInput = {
  productModify?: InputMaybe<Scalars['Boolean']['input']>;
  productRead?: InputMaybe<Scalars['Boolean']['input']>;
  productRemove?: InputMaybe<Scalars['Boolean']['input']>;
  productWrite?: InputMaybe<Scalars['Boolean']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  remove?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  write?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Merchant = {
  id?: Maybe<Scalars['Int']['output']>;
  merchant_address?: Maybe<Scalars['String']['output']>;
  merchant_id_card?: Maybe<Scalars['String']['output']>;
  merchant_name?: Maybe<Scalars['String']['output']>;
  merchant_profile?: Maybe<Scalars['String']['output']>;
  merchant_selfie_national_id?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  adminCreateCategory: Scalars['Int']['output'];
  adminCreateProduct?: Maybe<Ok>;
  adminCreateUserRegistration?: Maybe<Ok>;
  adminRemoveCategory?: Maybe<Scalars['Boolean']['output']>;
  adminRemoveContactUser?: Maybe<Scalars['Boolean']['output']>;
  adminRemoveProduct?: Maybe<Ok>;
  adminRemoveRole?: Maybe<Ok>;
  adminRemoveUserRegistration?: Maybe<Scalars['Boolean']['output']>;
  adminUpdateCategory?: Maybe<Scalars['Boolean']['output']>;
  adminUpdateProduct?: Maybe<Ok>;
  adminUpdateProductStatus?: Maybe<Ok>;
  adminUpdateRole?: Maybe<Ok>;
  adminUpdateUserRegistationStatus?: Maybe<Ok>;
  adminUpdateUserRegistationVerify?: Maybe<Ok>;
  adminUpdateUserRegistration?: Maybe<Ok>;
  adminUpdateUserRegistrationEdit?: Maybe<Ok>;
  adminUpdateUsersBusinessStatus?: Maybe<Ok>;
  adminUserBusinessUpdateStatus?: Maybe<Ok>;
  adminUserIndividualUpdateStatus?: Maybe<Ok>;
  appChangePasswordUser?: Maybe<Ok>;
  appCreateContact?: Maybe<Ok>;
  appCreateNewPasswordUser?: Maybe<Ok>;
  appCreateProduct?: Maybe<Ok>;
  appCreateProductViewCounts?: Maybe<Ok>;
  appCreateUsersBusiness: Scalars['Int']['output'];
  appForgotPasswordUser?: Maybe<Ok>;
  appLoginUser?: Maybe<LoginResponse>;
  appRegisterUser?: Maybe<Ok>;
  appRemoveProduct?: Maybe<Ok>;
  appRequestForgotPasswordOTPCode?: Maybe<Ok>;
  appRequestSignUpOTPCode?: Maybe<Ok>;
  appUpdateMe?: Maybe<Ok>;
  appUpdateProduct?: Maybe<Ok>;
  appVerifyOTPUser?: Maybe<Ok>;
  appVerifySignUpOTP?: Maybe<Ok>;
  assignRoleToAdminUser?: Maybe<Ok>;
  changePasswordAdminUser?: Maybe<Ok>;
  createAdminUser?: Maybe<Ok>;
  createRole?: Maybe<Ok>;
  createTest: Scalars['Int']['output'];
  loginAdminUser?: Maybe<LoginResponse>;
  manageRolePermission?: Maybe<Ok>;
  multipleImagesUpload?: Maybe<Array<Maybe<UploadImageResponse>>>;
  registerAdminUser?: Maybe<Ok>;
  removeAdminUser?: Maybe<Ok>;
  updateAdminUser?: Maybe<Ok>;
  updateTest?: Maybe<Scalars['Boolean']['output']>;
  uploadDocument?: Maybe<Scalars['String']['output']>;
  uploadImage?: Maybe<Scalars['String']['output']>;
};


export type MutationAdminCreateCategoryArgs = {
  input?: InputMaybe<CategoryInput>;
};


export type MutationAdminCreateProductArgs = {
  input?: InputMaybe<AdminProductInput>;
};


export type MutationAdminCreateUserRegistrationArgs = {
  input?: InputMaybe<UserRegistrationInput>;
};


export type MutationAdminRemoveCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationAdminRemoveContactUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationAdminRemoveProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationAdminRemoveRoleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationAdminRemoveUserRegistrationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationAdminUpdateCategoryArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<CategoryInput>;
};


export type MutationAdminUpdateProductArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<ProductInput>;
};


export type MutationAdminUpdateProductStatusArgs = {
  id: Scalars['Int']['input'];
  status?: InputMaybe<ProductStatusEnum>;
};


export type MutationAdminUpdateRoleArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<RoleInput>;
};


export type MutationAdminUpdateUserRegistationStatusArgs = {
  id: Scalars['Int']['input'];
  status?: InputMaybe<UserStatus>;
};


export type MutationAdminUpdateUserRegistationVerifyArgs = {
  id: Scalars['Int']['input'];
  verified: Scalars['Int']['input'];
};


export type MutationAdminUpdateUserRegistrationArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<UserRegistrationInput>;
};


export type MutationAdminUpdateUserRegistrationEditArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<UserRegistrationInput>;
};


export type MutationAdminUpdateUsersBusinessStatusArgs = {
  id: Scalars['Int']['input'];
  status?: InputMaybe<UsersBusinessEnum>;
};


export type MutationAdminUserBusinessUpdateStatusArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<BusinessUpdateStatusInput>;
};


export type MutationAdminUserIndividualUpdateStatusArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<IndividualUpdateStatusInput>;
};


export type MutationAppChangePasswordUserArgs = {
  input?: InputMaybe<ChangePasswordUserInput>;
};


export type MutationAppCreateContactArgs = {
  input?: InputMaybe<ContactUsInput>;
};


export type MutationAppCreateNewPasswordUserArgs = {
  input?: InputMaybe<CreateNewPasswordUserInput>;
};


export type MutationAppCreateProductArgs = {
  input?: InputMaybe<ProductInput>;
};


export type MutationAppCreateProductViewCountsArgs = {
  input?: InputMaybe<ProductViewCountsInput>;
};


export type MutationAppCreateUsersBusinessArgs = {
  input?: InputMaybe<AppUsersBusinessInput>;
};


export type MutationAppForgotPasswordUserArgs = {
  input?: InputMaybe<ForgotPasswordUserInput>;
};


export type MutationAppLoginUserArgs = {
  input?: InputMaybe<UserLoginInput>;
};


export type MutationAppRegisterUserArgs = {
  input?: InputMaybe<RegisterUserInput>;
};


export type MutationAppRemoveProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationAppRequestForgotPasswordOtpCodeArgs = {
  input?: InputMaybe<AppRequestForgotPasswordOtpInput>;
};


export type MutationAppRequestSignUpOtpCodeArgs = {
  input?: InputMaybe<AppRequestSignUpOtpInput>;
};


export type MutationAppUpdateMeArgs = {
  input?: InputMaybe<UpdateMeInput>;
};


export type MutationAppUpdateProductArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<ProductInput>;
};


export type MutationAppVerifyOtpUserArgs = {
  input?: InputMaybe<VerifyOtpUserInput>;
};


export type MutationAppVerifySignUpOtpArgs = {
  input?: InputMaybe<VerifyOtpUserInput>;
};


export type MutationAssignRoleToAdminUserArgs = {
  input: AssignRoleInput;
};


export type MutationChangePasswordAdminUserArgs = {
  input?: InputMaybe<ChangePasswordAdminUserInput>;
};


export type MutationCreateAdminUserArgs = {
  input?: InputMaybe<AdminUserInput>;
};


export type MutationCreateRoleArgs = {
  input: RoleInput;
};


export type MutationCreateTestArgs = {
  input?: InputMaybe<TestInput>;
};


export type MutationLoginAdminUserArgs = {
  input?: InputMaybe<LoginAdminUserInput>;
};


export type MutationManageRolePermissionArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<ManageRolePermissionInput>;
};


export type MutationMultipleImagesUploadArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
};


export type MutationRegisterAdminUserArgs = {
  input?: InputMaybe<AdminUserInput>;
};


export type MutationRemoveAdminUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAdminUserArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<AdminUserInput>;
};


export type MutationUpdateTestArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<TestInput>;
};


export type MutationUploadDocumentArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadImageArgs = {
  file: Scalars['Upload']['input'];
};

export type Ok = {
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type Pagination = {
  current?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductDetailOwner = {
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  user_profile?: Maybe<Scalars['String']['output']>;
};

export type ProductInput = {
  category_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  city_or_province?: InputMaybe<Scalars['String']['input']>;
  commented?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['String']['input']>;
  group_or_village?: InputMaybe<Scalars['String']['input']>;
  khan_or_district?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  product_description?: InputMaybe<Scalars['String']['input']>;
  product_image?: InputMaybe<Array<InputMaybe<ImageInput>>>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  sangkat_or_commune?: InputMaybe<Scalars['String']['input']>;
};

export enum ProductStatusEnum {
  Approved = 'APPROVED',
  Inreview = 'INREVIEW',
  Rejected = 'REJECTED',
  Returned = 'RETURNED'
}

export type ProductViewCountsInput = {
  browser_session?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  adminCategoryDetail?: Maybe<Category>;
  adminCategoryList?: Maybe<AdminCategoryList>;
  adminCategoryNested?: Maybe<AdminCategoryNested>;
  adminContactFormList?: Maybe<AdminContactList>;
  adminDashBoard?: Maybe<Dashboard>;
  adminMe?: Maybe<AdminUser>;
  adminProductDetail?: Maybe<AdminProduct>;
  adminProductList?: Maybe<AdminProductList>;
  adminTotalUserRegister?: Maybe<TotalUserRegister>;
  adminUserBusinessDetail?: Maybe<UserBusiness>;
  adminUserBusinessList?: Maybe<Array<Maybe<UserBusiness>>>;
  adminUserDetail?: Maybe<AdminUser>;
  adminUserIndividualDetail?: Maybe<UserIndividual>;
  adminUserIndividualList?: Maybe<Array<Maybe<UserIndividual>>>;
  adminUserList?: Maybe<AdminUserList>;
  adminUserListByPlanType?: Maybe<AdminUserList>;
  adminUserRegistrationDetail?: Maybe<UserRegistration>;
  adminUserRegistrationEditDetail?: Maybe<UserRegistration>;
  adminUserRegistrationEditList?: Maybe<AdminUserRegistrationList>;
  adminUserRegistrationList?: Maybe<AdminUserRegistrationList>;
  adminUserRegistrationVerifyFalse?: Maybe<AdminUserRegistrationList>;
  adminUserRegistrationVerifyTrue?: Maybe<AdminUserRegistrationList>;
  adminUsersBusinessDetail?: Maybe<AdminUsersBusinessDetail>;
  adminUsersBusinessList?: Maybe<AdminUsersBusinessList>;
  appCategoryList?: Maybe<AppCategoryList>;
  appCategoryNested?: Maybe<AppCategoryNested>;
  appMe?: Maybe<User>;
  appMerchantDetail?: Maybe<Merchant>;
  appMerchantList?: Maybe<Array<Maybe<Merchant>>>;
  appPopularProductList?: Maybe<Array<Maybe<AppProduct>>>;
  appProductActiveList?: Maybe<AppProductList>;
  appProductDetail?: Maybe<AppProduct>;
  appProductInactiveList?: Maybe<AppProductList>;
  appProductInreviewList?: Maybe<AppProductList>;
  appProductList?: Maybe<AppProductList>;
  appProductReturnedList?: Maybe<AppProductList>;
  appRelatedProductList?: Maybe<AppProductList>;
  appShopDetail?: Maybe<Shop>;
  appShopList?: Maybe<AppShopList>;
  appUserList?: Maybe<AppUserList>;
  appUsersBusinessDetail?: Maybe<AppUsersBusiness>;
  appUsersBusinessDetailByUserId?: Maybe<AppUsersBusiness>;
  roleDetail?: Maybe<Role>;
  roleList?: Maybe<Array<Maybe<Role>>>;
  testDetail?: Maybe<Scalars['String']['output']>;
  testList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type QueryAdminCategoryDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminCategoryListArgs = {
  filter?: InputMaybe<CategoryFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminCategoryNestedArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminContactFormListArgs = {
  filter?: InputMaybe<ContactFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminProductDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminProductListArgs = {
  filter?: InputMaybe<AdminProductFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminUserBusinessDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminUserBusinessListArgs = {
  input?: InputMaybe<AdminUserBusinessInput>;
};


export type QueryAdminUserDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminUserIndividualDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminUserIndividualListArgs = {
  input?: InputMaybe<AdminUserIndividualInput>;
};


export type QueryAdminUserListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminUserListByPlanTypeArgs = {
  input?: InputMaybe<AdminUserListPlanTypeInput>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminUserRegistrationDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminUserRegistrationEditDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminUserRegistrationEditListArgs = {
  filter?: InputMaybe<UserRegistrationFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminUserRegistrationListArgs = {
  filter?: InputMaybe<UserRegistrationFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminUserRegistrationVerifyFalseArgs = {
  filter?: InputMaybe<UserRegistrationFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminUserRegistrationVerifyTrueArgs = {
  filter?: InputMaybe<UserRegistrationFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAdminUsersBusinessDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdminUsersBusinessListArgs = {
  filter?: InputMaybe<AdminUsersBusinessFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppCategoryListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppCategoryNestedArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppMerchantDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAppProductActiveListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppProductDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAppProductInactiveListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppProductInreviewListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppProductListArgs = {
  filter?: InputMaybe<AppProductFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppProductReturnedListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppRelatedProductListArgs = {
  filter?: InputMaybe<AppProductFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppShopDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAppShopListArgs = {
  filter?: InputMaybe<AdminUsersBusinessFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppUserListArgs = {
  paginationInput?: InputMaybe<PaginationInput>;
};


export type QueryAppUsersBusinessDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAppUsersBusinessDetailByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryRoleDetailArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTestDetailArgs = {
  id: Scalars['Int']['input'];
};

export type RegisterUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  userProfile?: InputMaybe<Scalars['String']['input']>;
};

export type RequestBy = {
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  user_profile?: Maybe<Scalars['String']['output']>;
};

export type Role = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productModify?: Maybe<Scalars['Boolean']['output']>;
  productRead?: Maybe<Scalars['Boolean']['output']>;
  productRemove?: Maybe<Scalars['Boolean']['output']>;
  productWrite?: Maybe<Scalars['Boolean']['output']>;
  read?: Maybe<Scalars['Boolean']['output']>;
  remove?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  update?: Maybe<Scalars['Boolean']['output']>;
  write?: Maybe<Scalars['Boolean']['output']>;
};

export type RoleInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Shop = {
  business_address?: Maybe<Scalars['String']['output']>;
  business_license?: Maybe<Scalars['String']['output']>;
  business_name?: Maybe<Scalars['String']['output']>;
  business_profile?: Maybe<Scalars['String']['output']>;
  business_reg_no?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  patent?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  province_city?: Maybe<Scalars['String']['output']>;
};

export enum Status {
  Approved = 'APPROVED',
  Inreview = 'INREVIEW',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type TestInput = {
  message?: InputMaybe<Scalars['String']['input']>;
};

export type TotalUserRegister = {
  total_users_individual?: Maybe<Scalars['Int']['output']>;
  total_users_register?: Maybe<Scalars['Int']['output']>;
  users_register_business_within1Year?: Maybe<Array<Maybe<AmountUsersInMonth>>>;
  users_register_business_within7Days?: Maybe<Array<Maybe<AmountUsers>>>;
  users_register_business_within30Days?: Maybe<Array<Maybe<AmountUsers>>>;
  users_register_individual_within1Year?: Maybe<Array<Maybe<AmountUsersInMonth>>>;
  users_register_individual_within7Days?: Maybe<Array<Maybe<AmountUsers>>>;
  users_register_individual_within30Days?: Maybe<Array<Maybe<AmountUsers>>>;
};

export type UpdateMeInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  userProfile?: InputMaybe<Scalars['String']['input']>;
};

export type UploadImageResponse = {
  image_url?: Maybe<Scalars['String']['output']>;
  upload_order?: Maybe<Scalars['Int']['output']>;
};

export type User = {
  commented?: Maybe<Scalars['String']['output']>;
  editStatus?: Maybe<EditMeEnum>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isBusiness?: Maybe<UsersBusinessEnum>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  userProfile?: Maybe<Scalars['String']['output']>;
};

export type UserBusiness = {
  created_at?: Maybe<Scalars['String']['output']>;
  document_info?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  info?: Maybe<Scalars['JSON']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  plan_id?: Maybe<Scalars['Int']['output']>;
  plan_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  user_profile?: Maybe<Scalars['String']['output']>;
};

export type UserIndividual = {
  created_at?: Maybe<Scalars['String']['output']>;
  document_info?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  info?: Maybe<Scalars['JSON']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  plan_id?: Maybe<Scalars['Int']['output']>;
  plan_name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updated_at?: Maybe<Scalars['String']['output']>;
  user_profile?: Maybe<Scalars['String']['output']>;
};

export type UserLoginInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UserRegistration = {
  commented?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  status?: Maybe<UserStatus>;
  updated_at?: Maybe<Scalars['String']['output']>;
  user_profile?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Int']['output']>;
};

export type UserRegistrationFilter = {
  fullname?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<UserStatus>>>;
};

export type UserRegistrationInput = {
  commented?: InputMaybe<Scalars['String']['input']>;
  confirm_password?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<UserStatus>;
  user_profile?: InputMaybe<Scalars['String']['input']>;
};

export enum UserStatus {
  Approved = 'APPROVED',
  Inreview = 'INREVIEW',
  Rejected = 'REJECTED'
}

export enum UsersBusinessEnum {
  Approved = 'APPROVED',
  Inreview = 'INREVIEW',
  Rejected = 'REJECTED',
  Returned = 'RETURNED'
}

export type VerifyOtpUserInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type LoginAdminUserMutationVariables = Exact<{
  input?: InputMaybe<LoginAdminUserInput>;
}>;


export type LoginAdminUserMutation = { loginAdminUser?: { token?: string | null } | null };

export type AdminMeQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminMeQuery = { adminMe?: { id?: number | null, email?: string | null, fullname?: string | null, userProfile?: string | null, phoneNumber?: string | null, info?: any | null, planId?: number | null, status?: Status | null, documentInfo?: any | null, role?: { id?: number | null, name?: string | null, slug?: string | null, read?: boolean | null, write?: boolean | null, update?: boolean | null, remove?: boolean | null, productRead?: boolean | null, productWrite?: boolean | null, productModify?: boolean | null, productRemove?: boolean | null } | null } | null };


export const LoginAdminUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginAdminUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginAdminUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAdminUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginAdminUserMutation, LoginAdminUserMutationVariables>;
export const AdminMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"userProfile"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"planId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"documentInfo"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"read"}},{"kind":"Field","name":{"kind":"Name","value":"write"}},{"kind":"Field","name":{"kind":"Name","value":"update"}},{"kind":"Field","name":{"kind":"Name","value":"remove"}},{"kind":"Field","name":{"kind":"Name","value":"productRead"}},{"kind":"Field","name":{"kind":"Name","value":"productWrite"}},{"kind":"Field","name":{"kind":"Name","value":"productModify"}},{"kind":"Field","name":{"kind":"Name","value":"productRemove"}}]}}]}}]}}]} as unknown as DocumentNode<AdminMeQuery, AdminMeQueryVariables>;