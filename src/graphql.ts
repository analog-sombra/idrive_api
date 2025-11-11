
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    ADMIN = "ADMIN",
    DRIVER = "DRIVER",
    MT_ACCOUNTS = "MT_ACCOUNTS",
    MT_ADMIN = "MT_ADMIN",
    MT_MANAGER = "MT_MANAGER",
    SYSTEM = "SYSTEM",
    USER = "USER"
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export interface CreateUserInput {
    address?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    name: string;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface SearchPaginationInput {
    search?: Nullable<string>;
    skip: number;
    take: number;
}

export interface SignUpUserInput {
    mobile: string;
    name: string;
    password: string;
}

export interface UpdateUserInput {
    address?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
}

export interface WhereUserSearchInput {
    address?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
}

export interface IMutation {
    createUser(inputType: CreateUserInput): User | Promise<User>;
    deleteUser(id: number, userid: number): User | Promise<User>;
    optLogin(contact: string): User | Promise<User>;
    signup(signUpUserInput: SignUpUserInput): User | Promise<User>;
    updateUser(id: number, updateType: UpdateUserInput): User | Promise<User>;
    verifyOtp(contact: string, otp: string): User | Promise<User>;
}

export interface IQuery {
    getAllUser(whereSearchInput: WhereUserSearchInput): User[] | Promise<User[]>;
    getPaginatedUser(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereUserSearchInput): UserPagination | Promise<UserPagination>;
    getUserById(id: number): User | Promise<User>;
    login(loginUserInput: LoginUserInput): User | Promise<User>;
    searchUser(whereSearchInput: WhereUserSearchInput): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    address?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    id: number;
    name: string;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role: Role;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface UserPagination {
    data: User[];
    skip: number;
    take: number;
    total: number;
}

export type DateTime = any;
type Nullable<T> = T | null;
