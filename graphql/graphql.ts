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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AuthLoginOutput = {
  __typename?: 'AuthLoginOutput';
  token: Scalars['String']['output'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type Category = {
  __typename?: 'Category';
  Product?: Maybe<Array<Product>>;
  _count: CategoryCount;
  active: Scalars['Boolean']['output'];
  children?: Maybe<Array<Category>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameSecnodary?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['String']['output']>;
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  Product: Scalars['Int']['output'];
  children: Scalars['Int']['output'];
};

export type CategoryCreateManyParentInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameSecnodary?: InputMaybe<Scalars['String']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCreateManyParentInputEnvelope = {
  data: Array<CategoryCreateManyParentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryCreateManyStoreInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameSecnodary?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCreateManyStoreInputEnvelope = {
  data: Array<CategoryCreateManyStoreInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryCreateNestedManyWithoutParentInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutParentInput>>;
  createMany?: InputMaybe<CategoryCreateManyParentInputEnvelope>;
};

export type CategoryCreateNestedManyWithoutStoreInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutStoreInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutStoreInput>>;
  createMany?: InputMaybe<CategoryCreateManyStoreInputEnvelope>;
};

export type CategoryCreateNestedOneWithoutChildrenInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutChildrenInput>;
  create?: InputMaybe<CategoryCreateWithoutChildrenInput>;
};

export type CategoryCreateNestedOneWithoutProductInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<CategoryCreateWithoutProductInput>;
};

export type CategoryCreateOrConnectWithoutChildrenInput = {
  create: CategoryCreateWithoutChildrenInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutParentInput = {
  create: CategoryCreateWithoutParentInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutProductInput = {
  create: CategoryCreateWithoutProductInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutStoreInput = {
  create: CategoryCreateWithoutStoreInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutChildrenInput = {
  Product?: InputMaybe<ProductCreateNestedManyWithoutCategoryInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameSecnodary?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
  store?: InputMaybe<StoreCreateNestedOneWithoutCategoryInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCreateWithoutParentInput = {
  Product?: InputMaybe<ProductCreateNestedManyWithoutCategoryInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameSecnodary?: InputMaybe<Scalars['String']['input']>;
  store?: InputMaybe<StoreCreateNestedOneWithoutCategoryInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCreateWithoutProductInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameSecnodary?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
  store?: InputMaybe<StoreCreateNestedOneWithoutCategoryInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCreateWithoutStoreInput = {
  Product?: InputMaybe<ProductCreateNestedManyWithoutCategoryInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameSecnodary?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryNullableRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export type CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  nameSecnodary?: InputMaybe<StringNullableFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
  storeId?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
};

export type CategoryUpdateInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutCategoryNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nameSecnodary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
  store?: InputMaybe<StoreUpdateOneWithoutCategoryNestedInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nameSecnodary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutParentInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithWhereWithoutStoreInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutParentNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutParentInput>>;
  createMany?: InputMaybe<CategoryCreateManyParentInputEnvelope>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutParentInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutParentInput>>;
};

export type CategoryUpdateManyWithoutStoreNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutStoreInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutStoreInput>>;
  createMany?: InputMaybe<CategoryCreateManyStoreInputEnvelope>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutStoreInput>>;
  updateMany?: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutStoreInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutStoreInput>>;
};

export type CategoryUpdateOneWithoutChildrenNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutChildrenInput>;
  create?: InputMaybe<CategoryCreateWithoutChildrenInput>;
  delete?: InputMaybe<CategoryWhereInput>;
  disconnect?: InputMaybe<CategoryWhereInput>;
  update?: InputMaybe<CategoryUpdateToOneWithWhereWithoutChildrenInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutChildrenInput>;
};

export type CategoryUpdateOneWithoutProductNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<CategoryCreateWithoutProductInput>;
  delete?: InputMaybe<CategoryWhereInput>;
  disconnect?: InputMaybe<CategoryWhereInput>;
  update?: InputMaybe<CategoryUpdateToOneWithWhereWithoutProductInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutProductInput>;
};

export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
  data: CategoryUpdateWithoutChildrenInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpdateToOneWithWhereWithoutProductInput = {
  data: CategoryUpdateWithoutProductInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
  data: CategoryUpdateWithoutParentInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithWhereUniqueWithoutStoreInput = {
  data: CategoryUpdateWithoutStoreInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutChildrenInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutCategoryNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nameSecnodary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
  store?: InputMaybe<StoreUpdateOneWithoutCategoryNestedInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutParentInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutCategoryNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nameSecnodary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  store?: InputMaybe<StoreUpdateOneWithoutCategoryNestedInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutProductInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nameSecnodary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
  store?: InputMaybe<StoreUpdateOneWithoutCategoryNestedInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutStoreInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutCategoryNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nameSecnodary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
  create: CategoryCreateWithoutParentInput;
  update: CategoryUpdateWithoutParentInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithWhereUniqueWithoutStoreInput = {
  create: CategoryCreateWithoutStoreInput;
  update: CategoryUpdateWithoutStoreInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithoutChildrenInput = {
  create: CategoryCreateWithoutChildrenInput;
  update: CategoryUpdateWithoutChildrenInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpsertWithoutProductInput = {
  create: CategoryCreateWithoutProductInput;
  update: CategoryUpdateWithoutProductInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  Product?: InputMaybe<ProductListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  children?: InputMaybe<CategoryListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  nameSecnodary?: InputMaybe<StringNullableFilter>;
  parent?: InputMaybe<CategoryNullableRelationFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
  store?: InputMaybe<StoreNullableRelationFilter>;
  storeId?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
};

export type CategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  Product?: InputMaybe<ProductListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  children?: InputMaybe<CategoryListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  nameSecnodary?: InputMaybe<StringNullableFilter>;
  parent?: InputMaybe<CategoryNullableRelationFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
  store?: InputMaybe<StoreNullableRelationFilter>;
  storeId?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EmailInput = {
  email: Scalars['String']['input'];
};

export type EmailVerification = {
  __typename?: 'EmailVerification';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  retries?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginWithEmailInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  categoryCreate: Category;
  categoryDelete: Category;
  categoryUpdate: Category;
  productCreate: Product;
  productUpdate: Product;
  requestEmailVerification: EmailVerification;
  signInWithEmail: AuthLoginOutput;
  signUpWithEmail: User;
  storeCreate: Store;
  storeMemberAcceptInvitation: StoreMember;
  storeMemberInvite: StoreMemberInvitation;
  storeMemberInviteResend: StoreMemberInvitation;
  storeUpdate: Store;
};


export type MutationCategoryCreateArgs = {
  data: CategoryCreateWithoutStoreInput;
  storeId: Scalars['String']['input'];
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type MutationCategoryUpdateArgs = {
  data: CategoryUpdateInput;
  id: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type MutationProductCreateArgs = {
  data: ProductCreateWithoutStoreInput;
  storeId: Scalars['String']['input'];
};


export type MutationProductUpdateArgs = {
  data: ProductUpdateWithoutStoreInput;
  productId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type MutationRequestEmailVerificationArgs = {
  data: EmailInput;
};


export type MutationSignInWithEmailArgs = {
  data: LoginWithEmailInput;
};


export type MutationSignUpWithEmailArgs = {
  data: SignUpInput;
};


export type MutationStoreCreateArgs = {
  data: StoreCreateInput;
};


export type MutationStoreMemberAcceptInvitationArgs = {
  invitationId: Scalars['String']['input'];
};


export type MutationStoreMemberInviteArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  storeRoleId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStoreMemberInviteResendArgs = {
  invitationId: Scalars['String']['input'];
};


export type MutationStoreUpdateArgs = {
  data: StoreUpdateWithoutUserStoreInput;
  id: Scalars['String']['input'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type Product = {
  __typename?: 'Product';
  _count: ProductCount;
  active: Scalars['Boolean']['output'];
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<ProductImages>>;
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<ProductOptions>>;
  price?: Maybe<Scalars['Float']['output']>;
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  variants?: Maybe<Array<ProductVariants>>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  images: Scalars['Int']['output'];
  options: Scalars['Int']['output'];
  variants: Scalars['Int']['output'];
};

export type ProductCreateManyCategoryInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  storeId?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyCategoryInputEnvelope = {
  data: Array<ProductCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCreateManyStoreInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyStoreInputEnvelope = {
  data: Array<ProductCreateManyStoreInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyCategoryInputEnvelope>;
};

export type ProductCreateNestedManyWithoutStoreInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutStoreInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutStoreInput>>;
  createMany?: InputMaybe<ProductCreateManyStoreInputEnvelope>;
};

export type ProductCreateOrConnectWithoutCategoryInput = {
  create: ProductCreateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutStoreInput = {
  create: ProductCreateWithoutStoreInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutCategoryInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductImagesCreateNestedManyWithoutProductInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<ProductOptionsCreateNestedManyWithoutProductInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  store?: InputMaybe<StoreCreateNestedOneWithoutProductInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  variants?: InputMaybe<ProductVariantsCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutStoreInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<CategoryCreateNestedOneWithoutProductInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductImagesCreateNestedManyWithoutProductInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<ProductOptionsCreateNestedManyWithoutProductInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  variants?: InputMaybe<ProductVariantsCreateNestedManyWithoutProductInput>;
};

export type ProductImages = {
  __typename?: 'ProductImages';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductImagesCreateManyProductInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductImagesCreateManyProductInputEnvelope = {
  data: Array<ProductImagesCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductImagesCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductImagesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductImagesCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductImagesCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductImagesCreateManyProductInputEnvelope>;
};

export type ProductImagesCreateOrConnectWithoutProductInput = {
  create: ProductImagesCreateWithoutProductInput;
  where: ProductImagesWhereUniqueInput;
};

export type ProductImagesCreateWithoutProductInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductImagesListRelationFilter = {
  every?: InputMaybe<ProductImagesWhereInput>;
  none?: InputMaybe<ProductImagesWhereInput>;
  some?: InputMaybe<ProductImagesWhereInput>;
};

export type ProductImagesScalarWhereInput = {
  AND?: InputMaybe<Array<ProductImagesScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductImagesScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductImagesScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  productId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductImagesUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductImagesUpdateManyWithWhereWithoutProductInput = {
  data: ProductImagesUpdateManyMutationInput;
  where: ProductImagesScalarWhereInput;
};

export type ProductImagesUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ProductImagesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductImagesCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductImagesCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductImagesCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductImagesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductImagesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductImagesWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductImagesWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductImagesUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductImagesUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductImagesUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductImagesUpdateWithWhereUniqueWithoutProductInput = {
  data: ProductImagesUpdateWithoutProductInput;
  where: ProductImagesWhereUniqueInput;
};

export type ProductImagesUpdateWithoutProductInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductImagesUpsertWithWhereUniqueWithoutProductInput = {
  create: ProductImagesCreateWithoutProductInput;
  update: ProductImagesUpdateWithoutProductInput;
  where: ProductImagesWhereUniqueInput;
};

export type ProductImagesWhereInput = {
  AND?: InputMaybe<Array<ProductImagesWhereInput>>;
  NOT?: InputMaybe<Array<ProductImagesWhereInput>>;
  OR?: InputMaybe<Array<ProductImagesWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  product?: InputMaybe<ProductNullableRelationFilter>;
  productId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductImagesWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductImagesWhereInput>>;
  NOT?: InputMaybe<Array<ProductImagesWhereInput>>;
  OR?: InputMaybe<Array<ProductImagesWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  product?: InputMaybe<ProductNullableRelationFilter>;
  productId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductNullableRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export type ProductOptions = {
  __typename?: 'ProductOptions';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionsCreateManyProductInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductOptionsCreateManyProductInputEnvelope = {
  data: Array<ProductOptionsCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductOptionsCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductOptionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductOptionsCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductOptionsCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductOptionsCreateManyProductInputEnvelope>;
};

export type ProductOptionsCreateOrConnectWithoutProductInput = {
  create: ProductOptionsCreateWithoutProductInput;
  where: ProductOptionsWhereUniqueInput;
};

export type ProductOptionsCreateWithoutProductInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductOptionsListRelationFilter = {
  every?: InputMaybe<ProductOptionsWhereInput>;
  none?: InputMaybe<ProductOptionsWhereInput>;
  some?: InputMaybe<ProductOptionsWhereInput>;
};

export type ProductOptionsScalarWhereInput = {
  AND?: InputMaybe<Array<ProductOptionsScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductOptionsScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductOptionsScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isDefault?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  productId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductOptionsUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDefault?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductOptionsUpdateManyWithWhereWithoutProductInput = {
  data: ProductOptionsUpdateManyMutationInput;
  where: ProductOptionsScalarWhereInput;
};

export type ProductOptionsUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ProductOptionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductOptionsCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductOptionsCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductOptionsCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductOptionsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductOptionsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductOptionsWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductOptionsWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductOptionsUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductOptionsUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductOptionsUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductOptionsUpdateWithWhereUniqueWithoutProductInput = {
  data: ProductOptionsUpdateWithoutProductInput;
  where: ProductOptionsWhereUniqueInput;
};

export type ProductOptionsUpdateWithoutProductInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDefault?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductOptionsUpsertWithWhereUniqueWithoutProductInput = {
  create: ProductOptionsCreateWithoutProductInput;
  update: ProductOptionsUpdateWithoutProductInput;
  where: ProductOptionsWhereUniqueInput;
};

export type ProductOptionsWhereInput = {
  AND?: InputMaybe<Array<ProductOptionsWhereInput>>;
  NOT?: InputMaybe<Array<ProductOptionsWhereInput>>;
  OR?: InputMaybe<Array<ProductOptionsWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isDefault?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  product?: InputMaybe<ProductNullableRelationFilter>;
  productId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductOptionsWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductOptionsWhereInput>>;
  NOT?: InputMaybe<Array<ProductOptionsWhereInput>>;
  OR?: InputMaybe<Array<ProductOptionsWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  product?: InputMaybe<ProductNullableRelationFilter>;
  productId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  storeId?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutCategoryInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutStoreInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type ProductUpdateManyWithoutStoreNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutStoreInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutStoreInput>>;
  createMany?: InputMaybe<ProductCreateManyStoreInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutStoreInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutStoreInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutStoreInput>>;
};

export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
  data: ProductUpdateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutStoreInput = {
  data: ProductUpdateWithoutStoreInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutCategoryInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductImagesUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  options?: InputMaybe<ProductOptionsUpdateManyWithoutProductNestedInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  store?: InputMaybe<StoreUpdateOneWithoutProductNestedInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  variants?: InputMaybe<ProductVariantsUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateWithoutStoreInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  category?: InputMaybe<CategoryUpdateOneWithoutProductNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductImagesUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  options?: InputMaybe<ProductOptionsUpdateManyWithoutProductNestedInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  variants?: InputMaybe<ProductVariantsUpdateManyWithoutProductNestedInput>;
};

export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
  create: ProductCreateWithoutCategoryInput;
  update: ProductUpdateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutStoreInput = {
  create: ProductCreateWithoutStoreInput;
  update: ProductUpdateWithoutStoreInput;
  where: ProductWhereUniqueInput;
};

export type ProductVariantDetail = {
  __typename?: 'ProductVariantDetail';
  ProductVariant?: Maybe<ProductVariants>;
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productVariantId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductVariantDetailCreateManyProductVariantInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductVariantDetailCreateManyProductVariantInputEnvelope = {
  data: Array<ProductVariantDetailCreateManyProductVariantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductVariantDetailCreateNestedManyWithoutProductVariantInput = {
  connect?: InputMaybe<Array<ProductVariantDetailWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductVariantDetailCreateOrConnectWithoutProductVariantInput>>;
  create?: InputMaybe<Array<ProductVariantDetailCreateWithoutProductVariantInput>>;
  createMany?: InputMaybe<ProductVariantDetailCreateManyProductVariantInputEnvelope>;
};

export type ProductVariantDetailCreateOrConnectWithoutProductVariantInput = {
  create: ProductVariantDetailCreateWithoutProductVariantInput;
  where: ProductVariantDetailWhereUniqueInput;
};

export type ProductVariantDetailCreateWithoutProductVariantInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductVariantDetailListRelationFilter = {
  every?: InputMaybe<ProductVariantDetailWhereInput>;
  none?: InputMaybe<ProductVariantDetailWhereInput>;
  some?: InputMaybe<ProductVariantDetailWhereInput>;
};

export type ProductVariantDetailScalarWhereInput = {
  AND?: InputMaybe<Array<ProductVariantDetailScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductVariantDetailScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductVariantDetailScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  productVariantId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductVariantDetailUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductVariantDetailUpdateManyWithWhereWithoutProductVariantInput = {
  data: ProductVariantDetailUpdateManyMutationInput;
  where: ProductVariantDetailScalarWhereInput;
};

export type ProductVariantDetailUpdateManyWithoutProductVariantNestedInput = {
  connect?: InputMaybe<Array<ProductVariantDetailWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductVariantDetailCreateOrConnectWithoutProductVariantInput>>;
  create?: InputMaybe<Array<ProductVariantDetailCreateWithoutProductVariantInput>>;
  createMany?: InputMaybe<ProductVariantDetailCreateManyProductVariantInputEnvelope>;
  delete?: InputMaybe<Array<ProductVariantDetailWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductVariantDetailScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductVariantDetailWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductVariantDetailWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductVariantDetailUpdateWithWhereUniqueWithoutProductVariantInput>>;
  updateMany?: InputMaybe<Array<ProductVariantDetailUpdateManyWithWhereWithoutProductVariantInput>>;
  upsert?: InputMaybe<Array<ProductVariantDetailUpsertWithWhereUniqueWithoutProductVariantInput>>;
};

export type ProductVariantDetailUpdateWithWhereUniqueWithoutProductVariantInput = {
  data: ProductVariantDetailUpdateWithoutProductVariantInput;
  where: ProductVariantDetailWhereUniqueInput;
};

export type ProductVariantDetailUpdateWithoutProductVariantInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductVariantDetailUpsertWithWhereUniqueWithoutProductVariantInput = {
  create: ProductVariantDetailCreateWithoutProductVariantInput;
  update: ProductVariantDetailUpdateWithoutProductVariantInput;
  where: ProductVariantDetailWhereUniqueInput;
};

export type ProductVariantDetailWhereInput = {
  AND?: InputMaybe<Array<ProductVariantDetailWhereInput>>;
  NOT?: InputMaybe<Array<ProductVariantDetailWhereInput>>;
  OR?: InputMaybe<Array<ProductVariantDetailWhereInput>>;
  ProductVariant?: InputMaybe<ProductVariantsNullableRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  productVariantId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductVariantDetailWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductVariantDetailWhereInput>>;
  NOT?: InputMaybe<Array<ProductVariantDetailWhereInput>>;
  OR?: InputMaybe<Array<ProductVariantDetailWhereInput>>;
  ProductVariant?: InputMaybe<ProductVariantsNullableRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  productVariantId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductVariants = {
  __typename?: 'ProductVariants';
  _count: ProductVariantsCount;
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<Array<ProductVariantDetail>>;
  id: Scalars['ID']['output'];
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductVariantsCount = {
  __typename?: 'ProductVariantsCount';
  details: Scalars['Int']['output'];
};

export type ProductVariantsCreateManyProductInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductVariantsCreateManyProductInputEnvelope = {
  data: Array<ProductVariantsCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductVariantsCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductVariantsCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductVariantsCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductVariantsCreateManyProductInputEnvelope>;
};

export type ProductVariantsCreateOrConnectWithoutProductInput = {
  create: ProductVariantsCreateWithoutProductInput;
  where: ProductVariantsWhereUniqueInput;
};

export type ProductVariantsCreateWithoutProductInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  details?: InputMaybe<ProductVariantDetailCreateNestedManyWithoutProductVariantInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductVariantsListRelationFilter = {
  every?: InputMaybe<ProductVariantsWhereInput>;
  none?: InputMaybe<ProductVariantsWhereInput>;
  some?: InputMaybe<ProductVariantsWhereInput>;
};

export type ProductVariantsNullableRelationFilter = {
  is?: InputMaybe<ProductVariantsWhereInput>;
  isNot?: InputMaybe<ProductVariantsWhereInput>;
};

export type ProductVariantsScalarWhereInput = {
  AND?: InputMaybe<Array<ProductVariantsScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductVariantsScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductVariantsScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  max?: InputMaybe<IntNullableFilter>;
  min?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  productId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductVariantsUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  max?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  min?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductVariantsUpdateManyWithWhereWithoutProductInput = {
  data: ProductVariantsUpdateManyMutationInput;
  where: ProductVariantsScalarWhereInput;
};

export type ProductVariantsUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductVariantsCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductVariantsCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductVariantsCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductVariantsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductVariantsUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductVariantsUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductVariantsUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductVariantsUpdateWithWhereUniqueWithoutProductInput = {
  data: ProductVariantsUpdateWithoutProductInput;
  where: ProductVariantsWhereUniqueInput;
};

export type ProductVariantsUpdateWithoutProductInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  details?: InputMaybe<ProductVariantDetailUpdateManyWithoutProductVariantNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  max?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  min?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductVariantsUpsertWithWhereUniqueWithoutProductInput = {
  create: ProductVariantsCreateWithoutProductInput;
  update: ProductVariantsUpdateWithoutProductInput;
  where: ProductVariantsWhereUniqueInput;
};

export type ProductVariantsWhereInput = {
  AND?: InputMaybe<Array<ProductVariantsWhereInput>>;
  NOT?: InputMaybe<Array<ProductVariantsWhereInput>>;
  OR?: InputMaybe<Array<ProductVariantsWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  details?: InputMaybe<ProductVariantDetailListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  max?: InputMaybe<IntNullableFilter>;
  min?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  product?: InputMaybe<ProductNullableRelationFilter>;
  productId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductVariantsWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductVariantsWhereInput>>;
  NOT?: InputMaybe<Array<ProductVariantsWhereInput>>;
  OR?: InputMaybe<Array<ProductVariantsWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  details?: InputMaybe<ProductVariantDetailListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  max?: InputMaybe<IntNullableFilter>;
  min?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  product?: InputMaybe<ProductNullableRelationFilter>;
  productId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  category?: InputMaybe<CategoryNullableRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  images?: InputMaybe<ProductImagesListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  options?: InputMaybe<ProductOptionsListRelationFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  store?: InputMaybe<StoreNullableRelationFilter>;
  storeId?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  variants?: InputMaybe<ProductVariantsListRelationFilter>;
};

export type ProductWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  category?: InputMaybe<CategoryNullableRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  images?: InputMaybe<ProductImagesListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  options?: InputMaybe<ProductOptionsListRelationFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  store?: InputMaybe<StoreNullableRelationFilter>;
  storeId?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  variants?: InputMaybe<ProductVariantsListRelationFilter>;
};

export type Query = {
  __typename?: 'Query';
  category: Category;
  categoryList: Array<Category>;
  product: Product;
  productImageUploadUrl: Scalars['String']['output'];
  productList: Array<Product>;
  signUpWithEmailAvailable: Scalars['Boolean']['output'];
  store: Store;
  storeList: Array<Store>;
  storeMemberInvitationList: Array<StoreMemberInvitation>;
  storeMemberList: Array<StoreMember>;
  storeMemberMyInvitationList: Array<StoreMemberInvitation>;
  storeRoleById: StoreRole;
  storeRoleList: Array<StoreRole>;
  userInfo: User;
};


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type QueryCategoryListArgs = {
  children?: InputMaybe<Scalars['Boolean']['input']>;
  storeId: Scalars['String']['input'];
};


export type QueryProductArgs = {
  category?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  options?: InputMaybe<Scalars['Boolean']['input']>;
  storeId: Scalars['String']['input'];
  variants?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductImageUploadUrlArgs = {
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};


export type QueryProductListArgs = {
  categoryId: Scalars['String']['input'];
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  storeId: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QuerySignUpWithEmailAvailableArgs = {
  data: EmailInput;
};


export type QueryStoreArgs = {
  id: Scalars['String']['input'];
};


export type QueryStoreListArgs = {
  cursor?: InputMaybe<StoreWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryStoreMemberInvitationListArgs = {
  roles: Scalars['Boolean']['input'];
  skip?: InputMaybe<Scalars['Float']['input']>;
  storeId: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryStoreMemberListArgs = {
  skip?: InputMaybe<Scalars['Float']['input']>;
  storeId: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryStoreMemberMyInvitationListArgs = {
  roles: Scalars['Boolean']['input'];
  skip?: InputMaybe<Scalars['Float']['input']>;
  storeId: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryStoreRoleByIdArgs = {
  skip?: InputMaybe<Scalars['Float']['input']>;
  storeId: Scalars['String']['input'];
  storeRoleId: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryStoreRoleListArgs = {
  skip?: InputMaybe<Scalars['Float']['input']>;
  storeId: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryUserInfoArgs = {
  sessions: Scalars['Boolean']['input'];
};

export type Session = {
  __typename?: 'Session';
  browser?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  device?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  notificationEnabled?: Maybe<Scalars['String']['output']>;
  notificationKey?: Maybe<Scalars['String']['output']>;
  notificationProvider?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionCreateManyUserInput = {
  browser?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  notificationEnabled?: InputMaybe<Scalars['String']['input']>;
  notificationKey?: InputMaybe<Scalars['String']['input']>;
  notificationProvider?: InputMaybe<Scalars['String']['input']>;
  os?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  browser?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  notificationEnabled?: InputMaybe<Scalars['String']['input']>;
  notificationKey?: InputMaybe<Scalars['String']['input']>;
  notificationProvider?: InputMaybe<Scalars['String']['input']>;
  os?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  browser?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  device?: InputMaybe<StringNullableFilter>;
  deviceId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ip?: InputMaybe<StringNullableFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  notificationEnabled?: InputMaybe<StringNullableFilter>;
  notificationKey?: InputMaybe<StringNullableFilter>;
  notificationProvider?: InputMaybe<StringNullableFilter>;
  os?: InputMaybe<StringNullableFilter>;
  region?: InputMaybe<StringNullableFilter>;
  timezone?: InputMaybe<StringNullableFilter>;
  token?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type SessionUpdateManyMutationInput = {
  browser?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  device?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ip?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  notificationEnabled?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationProvider?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  os?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  region?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  browser?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  device?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ip?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  notificationEnabled?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notificationProvider?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  os?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  region?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  browser?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  device?: InputMaybe<StringNullableFilter>;
  deviceId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ip?: InputMaybe<StringNullableFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  notificationEnabled?: InputMaybe<StringNullableFilter>;
  notificationKey?: InputMaybe<StringNullableFilter>;
  notificationProvider?: InputMaybe<StringNullableFilter>;
  os?: InputMaybe<StringNullableFilter>;
  region?: InputMaybe<StringNullableFilter>;
  timezone?: InputMaybe<StringNullableFilter>;
  token?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  browser?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  device?: InputMaybe<StringNullableFilter>;
  deviceId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  ip?: InputMaybe<StringNullableFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  notificationEnabled?: InputMaybe<StringNullableFilter>;
  notificationKey?: InputMaybe<StringNullableFilter>;
  notificationProvider?: InputMaybe<StringNullableFilter>;
  os?: InputMaybe<StringNullableFilter>;
  region?: InputMaybe<StringNullableFilter>;
  timezone?: InputMaybe<StringNullableFilter>;
  token?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
  verificationId: Scalars['String']['input'];
};

export type Store = {
  __typename?: 'Store';
  Category?: Maybe<Array<Category>>;
  Product?: Maybe<Array<Product>>;
  StoreMember?: Maybe<Array<StoreMember>>;
  _count: StoreCount;
  active: Scalars['Boolean']['output'];
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type StoreCount = {
  __typename?: 'StoreCount';
  Category: Scalars['Int']['output'];
  Product: Scalars['Int']['output'];
  StoreMember: Scalars['Int']['output'];
};

export type StoreCreateInput = {
  Category?: InputMaybe<CategoryCreateNestedManyWithoutStoreInput>;
  Product?: InputMaybe<ProductCreateNestedManyWithoutStoreInput>;
  StoreMember?: InputMaybe<StoreMemberCreateNestedManyWithoutStoreInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StoreCreateNestedOneWithoutCategoryInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutCategoryInput>;
  create?: InputMaybe<StoreCreateWithoutCategoryInput>;
};

export type StoreCreateNestedOneWithoutProductInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<StoreCreateWithoutProductInput>;
};

export type StoreCreateOrConnectWithoutCategoryInput = {
  create: StoreCreateWithoutCategoryInput;
  where: StoreWhereUniqueInput;
};

export type StoreCreateOrConnectWithoutProductInput = {
  create: StoreCreateWithoutProductInput;
  where: StoreWhereUniqueInput;
};

export type StoreCreateWithoutCategoryInput = {
  Product?: InputMaybe<ProductCreateNestedManyWithoutStoreInput>;
  StoreMember?: InputMaybe<StoreMemberCreateNestedManyWithoutStoreInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StoreCreateWithoutProductInput = {
  Category?: InputMaybe<CategoryCreateNestedManyWithoutStoreInput>;
  StoreMember?: InputMaybe<StoreMemberCreateNestedManyWithoutStoreInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StoreMember = {
  __typename?: 'StoreMember';
  Store?: Maybe<Store>;
  User?: Maybe<User>;
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  invitationId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  storeId?: Maybe<Scalars['String']['output']>;
  storeRole?: Maybe<StoreRole>;
  storeRoleId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type StoreMemberCreateManyStoreInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  invitationId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  storeRoleId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type StoreMemberCreateManyStoreInputEnvelope = {
  data: Array<StoreMemberCreateManyStoreInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoreMemberCreateNestedManyWithoutStoreInput = {
  connect?: InputMaybe<Array<StoreMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StoreMemberCreateOrConnectWithoutStoreInput>>;
  create?: InputMaybe<Array<StoreMemberCreateWithoutStoreInput>>;
  createMany?: InputMaybe<StoreMemberCreateManyStoreInputEnvelope>;
};

export type StoreMemberCreateOrConnectWithoutStoreInput = {
  create: StoreMemberCreateWithoutStoreInput;
  where: StoreMemberWhereUniqueInput;
};

export type StoreMemberCreateWithoutStoreInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutStoreMemberInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  invitationId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  storeRole?: InputMaybe<StoreRoleCreateNestedOneWithoutStoreMemberInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StoreMemberInvitation = {
  __typename?: 'StoreMemberInvitation';
  acceptedDate?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  expireDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  resent?: Maybe<Scalars['Int']['output']>;
  storeId: Scalars['String']['output'];
  storeRole: StoreRole;
  storeRoleId: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type StoreMemberInvitationCreateManyStoreRoleInput = {
  acceptedDate?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  expireDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resent?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type StoreMemberInvitationCreateManyStoreRoleInputEnvelope = {
  data: Array<StoreMemberInvitationCreateManyStoreRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoreMemberInvitationCreateNestedManyWithoutStoreRoleInput = {
  connect?: InputMaybe<Array<StoreMemberInvitationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StoreMemberInvitationCreateOrConnectWithoutStoreRoleInput>>;
  create?: InputMaybe<Array<StoreMemberInvitationCreateWithoutStoreRoleInput>>;
  createMany?: InputMaybe<StoreMemberInvitationCreateManyStoreRoleInputEnvelope>;
};

export type StoreMemberInvitationCreateOrConnectWithoutStoreRoleInput = {
  create: StoreMemberInvitationCreateWithoutStoreRoleInput;
  where: StoreMemberInvitationWhereUniqueInput;
};

export type StoreMemberInvitationCreateWithoutStoreRoleInput = {
  acceptedDate?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  expireDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resent?: InputMaybe<Scalars['Int']['input']>;
  storeId: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type StoreMemberInvitationListRelationFilter = {
  every?: InputMaybe<StoreMemberInvitationWhereInput>;
  none?: InputMaybe<StoreMemberInvitationWhereInput>;
  some?: InputMaybe<StoreMemberInvitationWhereInput>;
};

export type StoreMemberInvitationScalarWhereInput = {
  AND?: InputMaybe<Array<StoreMemberInvitationScalarWhereInput>>;
  NOT?: InputMaybe<Array<StoreMemberInvitationScalarWhereInput>>;
  OR?: InputMaybe<Array<StoreMemberInvitationScalarWhereInput>>;
  acceptedDate?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  expireDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  resent?: InputMaybe<IntNullableFilter>;
  storeId?: InputMaybe<StringFilter>;
  storeRoleId?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type StoreMemberInvitationUpdateManyMutationInput = {
  acceptedDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expireDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  storeId?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type StoreMemberInvitationUpdateManyWithWhereWithoutStoreRoleInput = {
  data: StoreMemberInvitationUpdateManyMutationInput;
  where: StoreMemberInvitationScalarWhereInput;
};

export type StoreMemberInvitationUpdateManyWithoutStoreRoleNestedInput = {
  connect?: InputMaybe<Array<StoreMemberInvitationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StoreMemberInvitationCreateOrConnectWithoutStoreRoleInput>>;
  create?: InputMaybe<Array<StoreMemberInvitationCreateWithoutStoreRoleInput>>;
  createMany?: InputMaybe<StoreMemberInvitationCreateManyStoreRoleInputEnvelope>;
  delete?: InputMaybe<Array<StoreMemberInvitationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StoreMemberInvitationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StoreMemberInvitationWhereUniqueInput>>;
  set?: InputMaybe<Array<StoreMemberInvitationWhereUniqueInput>>;
  update?: InputMaybe<Array<StoreMemberInvitationUpdateWithWhereUniqueWithoutStoreRoleInput>>;
  updateMany?: InputMaybe<Array<StoreMemberInvitationUpdateManyWithWhereWithoutStoreRoleInput>>;
  upsert?: InputMaybe<Array<StoreMemberInvitationUpsertWithWhereUniqueWithoutStoreRoleInput>>;
};

export type StoreMemberInvitationUpdateWithWhereUniqueWithoutStoreRoleInput = {
  data: StoreMemberInvitationUpdateWithoutStoreRoleInput;
  where: StoreMemberInvitationWhereUniqueInput;
};

export type StoreMemberInvitationUpdateWithoutStoreRoleInput = {
  acceptedDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expireDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  storeId?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type StoreMemberInvitationUpsertWithWhereUniqueWithoutStoreRoleInput = {
  create: StoreMemberInvitationCreateWithoutStoreRoleInput;
  update: StoreMemberInvitationUpdateWithoutStoreRoleInput;
  where: StoreMemberInvitationWhereUniqueInput;
};

export type StoreMemberInvitationWhereInput = {
  AND?: InputMaybe<Array<StoreMemberInvitationWhereInput>>;
  NOT?: InputMaybe<Array<StoreMemberInvitationWhereInput>>;
  OR?: InputMaybe<Array<StoreMemberInvitationWhereInput>>;
  acceptedDate?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  expireDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  resent?: InputMaybe<IntNullableFilter>;
  storeId?: InputMaybe<StringFilter>;
  storeRole?: InputMaybe<StoreRoleRelationFilter>;
  storeRoleId?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type StoreMemberInvitationWhereUniqueInput = {
  AND?: InputMaybe<Array<StoreMemberInvitationWhereInput>>;
  NOT?: InputMaybe<Array<StoreMemberInvitationWhereInput>>;
  OR?: InputMaybe<Array<StoreMemberInvitationWhereInput>>;
  acceptedDate?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  expireDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringNullableFilter>;
  resent?: InputMaybe<IntNullableFilter>;
  storeId?: InputMaybe<StringFilter>;
  storeRole?: InputMaybe<StoreRoleRelationFilter>;
  storeRoleId?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type StoreMemberListRelationFilter = {
  every?: InputMaybe<StoreMemberWhereInput>;
  none?: InputMaybe<StoreMemberWhereInput>;
  some?: InputMaybe<StoreMemberWhereInput>;
};

export type StoreMemberScalarWhereInput = {
  AND?: InputMaybe<Array<StoreMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<StoreMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<StoreMemberScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  invitationId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<StringNullableFilter>;
  storeId?: InputMaybe<StringNullableFilter>;
  storeRoleId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type StoreMemberUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StoreMemberUpdateManyWithWhereWithoutStoreInput = {
  data: StoreMemberUpdateManyMutationInput;
  where: StoreMemberScalarWhereInput;
};

export type StoreMemberUpdateManyWithoutStoreNestedInput = {
  connect?: InputMaybe<Array<StoreMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StoreMemberCreateOrConnectWithoutStoreInput>>;
  create?: InputMaybe<Array<StoreMemberCreateWithoutStoreInput>>;
  createMany?: InputMaybe<StoreMemberCreateManyStoreInputEnvelope>;
  delete?: InputMaybe<Array<StoreMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StoreMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StoreMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<StoreMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<StoreMemberUpdateWithWhereUniqueWithoutStoreInput>>;
  updateMany?: InputMaybe<Array<StoreMemberUpdateManyWithWhereWithoutStoreInput>>;
  upsert?: InputMaybe<Array<StoreMemberUpsertWithWhereUniqueWithoutStoreInput>>;
};

export type StoreMemberUpdateWithWhereUniqueWithoutStoreInput = {
  data: StoreMemberUpdateWithoutStoreInput;
  where: StoreMemberWhereUniqueInput;
};

export type StoreMemberUpdateWithoutStoreInput = {
  User?: InputMaybe<UserUpdateOneWithoutStoreMemberNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  storeRole?: InputMaybe<StoreRoleUpdateOneWithoutStoreMemberNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StoreMemberUpsertWithWhereUniqueWithoutStoreInput = {
  create: StoreMemberCreateWithoutStoreInput;
  update: StoreMemberUpdateWithoutStoreInput;
  where: StoreMemberWhereUniqueInput;
};

export type StoreMemberUserIdStoreIdCompoundUniqueInput = {
  storeId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type StoreMemberWhereInput = {
  AND?: InputMaybe<Array<StoreMemberWhereInput>>;
  NOT?: InputMaybe<Array<StoreMemberWhereInput>>;
  OR?: InputMaybe<Array<StoreMemberWhereInput>>;
  Store?: InputMaybe<StoreNullableRelationFilter>;
  User?: InputMaybe<UserNullableRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  invitationId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<StringNullableFilter>;
  storeId?: InputMaybe<StringNullableFilter>;
  storeRole?: InputMaybe<StoreRoleNullableRelationFilter>;
  storeRoleId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type StoreMemberWhereUniqueInput = {
  AND?: InputMaybe<Array<StoreMemberWhereInput>>;
  NOT?: InputMaybe<Array<StoreMemberWhereInput>>;
  OR?: InputMaybe<Array<StoreMemberWhereInput>>;
  Store?: InputMaybe<StoreNullableRelationFilter>;
  User?: InputMaybe<UserNullableRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  invitationId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<StringNullableFilter>;
  storeId?: InputMaybe<StringNullableFilter>;
  storeRole?: InputMaybe<StoreRoleNullableRelationFilter>;
  storeRoleId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  userId_storeId?: InputMaybe<StoreMemberUserIdStoreIdCompoundUniqueInput>;
};

export type StoreNullableRelationFilter = {
  is?: InputMaybe<StoreWhereInput>;
  isNot?: InputMaybe<StoreWhereInput>;
};

export type StoreRole = {
  __typename?: 'StoreRole';
  StoreMember?: Maybe<Array<StoreMember>>;
  StoreMemberInvitation?: Maybe<Array<StoreMemberInvitation>>;
  _count: StoreRoleCount;
  active?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  permissions: Scalars['String']['output'];
  roleDescription?: Maybe<Scalars['String']['output']>;
  roleName: Scalars['String']['output'];
  storeId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type StoreRoleCount = {
  __typename?: 'StoreRoleCount';
  StoreMember: Scalars['Int']['output'];
  StoreMemberInvitation: Scalars['Int']['output'];
};

export type StoreRoleCreateNestedOneWithoutStoreMemberInput = {
  connect?: InputMaybe<StoreRoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreRoleCreateOrConnectWithoutStoreMemberInput>;
  create?: InputMaybe<StoreRoleCreateWithoutStoreMemberInput>;
};

export type StoreRoleCreateOrConnectWithoutStoreMemberInput = {
  create: StoreRoleCreateWithoutStoreMemberInput;
  where: StoreRoleWhereUniqueInput;
};

export type StoreRoleCreateWithoutStoreMemberInput = {
  StoreMemberInvitation?: InputMaybe<StoreMemberInvitationCreateNestedManyWithoutStoreRoleInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  permissions: Scalars['String']['input'];
  roleDescription?: InputMaybe<Scalars['String']['input']>;
  roleName: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type StoreRoleNullableRelationFilter = {
  is?: InputMaybe<StoreRoleWhereInput>;
  isNot?: InputMaybe<StoreRoleWhereInput>;
};

export type StoreRoleRelationFilter = {
  is?: InputMaybe<StoreRoleWhereInput>;
  isNot?: InputMaybe<StoreRoleWhereInput>;
};

export type StoreRoleStoreIdRoleNameCompoundUniqueInput = {
  roleName: Scalars['String']['input'];
  storeId: Scalars['String']['input'];
};

export type StoreRoleUpdateOneWithoutStoreMemberNestedInput = {
  connect?: InputMaybe<StoreRoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreRoleCreateOrConnectWithoutStoreMemberInput>;
  create?: InputMaybe<StoreRoleCreateWithoutStoreMemberInput>;
  delete?: InputMaybe<StoreRoleWhereInput>;
  disconnect?: InputMaybe<StoreRoleWhereInput>;
  update?: InputMaybe<StoreRoleUpdateToOneWithWhereWithoutStoreMemberInput>;
  upsert?: InputMaybe<StoreRoleUpsertWithoutStoreMemberInput>;
};

export type StoreRoleUpdateToOneWithWhereWithoutStoreMemberInput = {
  data: StoreRoleUpdateWithoutStoreMemberInput;
  where?: InputMaybe<StoreRoleWhereInput>;
};

export type StoreRoleUpdateWithoutStoreMemberInput = {
  StoreMemberInvitation?: InputMaybe<StoreMemberInvitationUpdateManyWithoutStoreRoleNestedInput>;
  active?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<StringFieldUpdateOperationsInput>;
  roleDescription?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roleName?: InputMaybe<StringFieldUpdateOperationsInput>;
  storeId?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedBy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type StoreRoleUpsertWithoutStoreMemberInput = {
  create: StoreRoleCreateWithoutStoreMemberInput;
  update: StoreRoleUpdateWithoutStoreMemberInput;
  where?: InputMaybe<StoreRoleWhereInput>;
};

export type StoreRoleWhereInput = {
  AND?: InputMaybe<Array<StoreRoleWhereInput>>;
  NOT?: InputMaybe<Array<StoreRoleWhereInput>>;
  OR?: InputMaybe<Array<StoreRoleWhereInput>>;
  StoreMember?: InputMaybe<StoreMemberListRelationFilter>;
  StoreMemberInvitation?: InputMaybe<StoreMemberInvitationListRelationFilter>;
  active?: InputMaybe<BoolNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<StringFilter>;
  roleDescription?: InputMaybe<StringNullableFilter>;
  roleName?: InputMaybe<StringFilter>;
  storeId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type StoreRoleWhereUniqueInput = {
  AND?: InputMaybe<Array<StoreRoleWhereInput>>;
  NOT?: InputMaybe<Array<StoreRoleWhereInput>>;
  OR?: InputMaybe<Array<StoreRoleWhereInput>>;
  StoreMember?: InputMaybe<StoreMemberListRelationFilter>;
  StoreMemberInvitation?: InputMaybe<StoreMemberInvitationListRelationFilter>;
  active?: InputMaybe<BoolNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<StringFilter>;
  roleDescription?: InputMaybe<StringNullableFilter>;
  roleName?: InputMaybe<StringFilter>;
  storeId?: InputMaybe<StringFilter>;
  storeId_roleName?: InputMaybe<StoreRoleStoreIdRoleNameCompoundUniqueInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type StoreUpdateOneWithoutCategoryNestedInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutCategoryInput>;
  create?: InputMaybe<StoreCreateWithoutCategoryInput>;
  delete?: InputMaybe<StoreWhereInput>;
  disconnect?: InputMaybe<StoreWhereInput>;
  update?: InputMaybe<StoreUpdateToOneWithWhereWithoutCategoryInput>;
  upsert?: InputMaybe<StoreUpsertWithoutCategoryInput>;
};

export type StoreUpdateOneWithoutProductNestedInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<StoreCreateWithoutProductInput>;
  delete?: InputMaybe<StoreWhereInput>;
  disconnect?: InputMaybe<StoreWhereInput>;
  update?: InputMaybe<StoreUpdateToOneWithWhereWithoutProductInput>;
  upsert?: InputMaybe<StoreUpsertWithoutProductInput>;
};

export type StoreUpdateToOneWithWhereWithoutCategoryInput = {
  data: StoreUpdateWithoutCategoryInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreUpdateToOneWithWhereWithoutProductInput = {
  data: StoreUpdateWithoutProductInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreUpdateWithoutCategoryInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutStoreNestedInput>;
  StoreMember?: InputMaybe<StoreMemberUpdateManyWithoutStoreNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StoreUpdateWithoutProductInput = {
  Category?: InputMaybe<CategoryUpdateManyWithoutStoreNestedInput>;
  StoreMember?: InputMaybe<StoreMemberUpdateManyWithoutStoreNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StoreUpdateWithoutUserStoreInput = {
  Category?: InputMaybe<CategoryUpdateManyWithoutStoreNestedInput>;
  Product?: InputMaybe<ProductUpdateManyWithoutStoreNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StoreUpsertWithoutCategoryInput = {
  create: StoreCreateWithoutCategoryInput;
  update: StoreUpdateWithoutCategoryInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreUpsertWithoutProductInput = {
  create: StoreCreateWithoutProductInput;
  update: StoreUpdateWithoutProductInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreWhereInput = {
  AND?: InputMaybe<Array<StoreWhereInput>>;
  Category?: InputMaybe<CategoryListRelationFilter>;
  NOT?: InputMaybe<Array<StoreWhereInput>>;
  OR?: InputMaybe<Array<StoreWhereInput>>;
  Product?: InputMaybe<ProductListRelationFilter>;
  StoreMember?: InputMaybe<StoreMemberListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  address?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currency?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type StoreWhereUniqueInput = {
  AND?: InputMaybe<Array<StoreWhereInput>>;
  Category?: InputMaybe<CategoryListRelationFilter>;
  NOT?: InputMaybe<Array<StoreWhereInput>>;
  OR?: InputMaybe<Array<StoreWhereInput>>;
  Product?: InputMaybe<ProductListRelationFilter>;
  StoreMember?: InputMaybe<StoreMemberListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  address?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currency?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  Session?: Maybe<Array<Session>>;
  StoreMember?: Maybe<Array<StoreMember>>;
  _count: UserCount;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailVerificationId?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  fistName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phoneCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  Session: Scalars['Int']['output'];
  StoreMember: Scalars['Int']['output'];
};

export type UserCreateNestedOneWithoutStoreMemberInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStoreMemberInput>;
  create?: InputMaybe<UserCreateWithoutStoreMemberInput>;
};

export type UserCreateOrConnectWithoutStoreMemberInput = {
  create: UserCreateWithoutStoreMemberInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutStoreMemberInput = {
  Session?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerificationId?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  fistName?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneCode?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneWithoutStoreMemberNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStoreMemberInput>;
  create?: InputMaybe<UserCreateWithoutStoreMemberInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutStoreMemberInput>;
  upsert?: InputMaybe<UserUpsertWithoutStoreMemberInput>;
};

export type UserUpdateToOneWithWhereWithoutStoreMemberInput = {
  data: UserUpdateWithoutStoreMemberInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutStoreMemberInput = {
  Session?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerificationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  fistName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  middleName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutStoreMemberInput = {
  create: UserCreateWithoutStoreMemberInput;
  update: UserUpdateWithoutStoreMemberInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Session?: InputMaybe<SessionListRelationFilter>;
  StoreMember?: InputMaybe<StoreMemberListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerificationId?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  fistName?: InputMaybe<StringNullableFilter>;
  fullName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  middleName?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  phoneCode?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Session?: InputMaybe<SessionListRelationFilter>;
  StoreMember?: InputMaybe<StoreMemberListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerificationId?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  fistName?: InputMaybe<StringNullableFilter>;
  fullName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  middleName?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  phoneCode?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LoginWithEmailMutationVariables = Exact<{
  data: LoginWithEmailInput;
}>;


export type LoginWithEmailMutation = { __typename?: 'Mutation', signInWithEmail: { __typename?: 'AuthLoginOutput', token: string } };

export type EmailAvailableQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type EmailAvailableQuery = { __typename?: 'Query', signUpWithEmailAvailable: boolean };

export type StoreFields_FragmentFragment = { __typename?: 'Store', id: string, name?: string | null, address?: string | null, currency?: string | null, email?: string | null, phone?: string | null, logo?: string | null, active: boolean, image?: string | null, thumbnail?: string | null, createdAt: any } & { ' $fragmentName'?: 'StoreFields_FragmentFragment' };

export type StoreMemberFragmentFragment = { __typename?: 'StoreMember', id: string, storeRoleId?: string | null, userId?: string | null, status?: string | null, active: boolean, createdAt: any } & { ' $fragmentName'?: 'StoreMemberFragmentFragment' };

export type StoreByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type StoreByIdQuery = { __typename?: 'Query', store: { __typename?: 'Store', id: string, name?: string | null, address?: string | null, currency?: string | null, email?: string | null, phone?: string | null, logo?: string | null, active: boolean, image?: string | null, thumbnail?: string | null, createdAt: any } };

export type StoreListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Float']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  cursor?: InputMaybe<StoreWhereUniqueInput>;
}>;


export type StoreListQuery = { __typename?: 'Query', storeList: Array<{ __typename?: 'Store', id: string, name?: string | null, address?: string | null, currency?: string | null, email?: string | null, phone?: string | null, logo?: string | null, active: boolean, image?: string | null, thumbnail?: string | null, createdAt: any, StoreMember?: Array<(
      { __typename?: 'StoreMember' }
      & { ' $fragmentRefs'?: { 'StoreMemberFragmentFragment': StoreMemberFragmentFragment } }
    )> | null }> };

export type StoreCreate_MutationMutationVariables = Exact<{
  input: StoreCreateInput;
}>;


export type StoreCreate_MutationMutation = { __typename?: 'Mutation', storeCreate: { __typename?: 'Store', id: string, name?: string | null, address?: string | null, currency?: string | null, email?: string | null, phone?: string | null, logo?: string | null, active: boolean, image?: string | null, thumbnail?: string | null, createdAt: any } };

export const StoreFields_FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoreFields_Fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Store"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<StoreFields_FragmentFragment, unknown>;
export const StoreMemberFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoreMemberFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoreMember"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"storeRoleId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<StoreMemberFragmentFragment, unknown>;
export const LoginWithEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginWithEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginWithEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginWithEmailMutation, LoginWithEmailMutationVariables>;
export const EmailAvailableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"emailAvailable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpWithEmailAvailable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}}]}]}}]} as unknown as DocumentNode<EmailAvailableQuery, EmailAvailableQueryVariables>;
export const StoreByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StoreById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"store"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<StoreByIdQuery, StoreByIdQueryVariables>;
export const StoreListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StoreList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StoreWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storeList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"StoreMember"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoreMemberFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoreMemberFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoreMember"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"storeRoleId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<StoreListQuery, StoreListQueryVariables>;
export const StoreCreate_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StoreCreate_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StoreCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storeCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<StoreCreate_MutationMutation, StoreCreate_MutationMutationVariables>;