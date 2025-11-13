
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

export enum SchoolStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export interface CreateSchoolInput {
    accountNumber?: Nullable<string>;
    address: string;
    alternatePhone?: Nullable<string>;
    bankName?: Nullable<string>;
    branchName?: Nullable<string>;
    dayEndTime?: Nullable<string>;
    dayStartTime?: Nullable<string>;
    email: string;
    establishedYear: string;
    facebook?: Nullable<string>;
    gstNumber: string;
    ifscCode?: Nullable<string>;
    instagram?: Nullable<string>;
    insuranceExpiry?: Nullable<DateTime>;
    insurancePolicyNumber?: Nullable<string>;
    insuranceProvider?: Nullable<string>;
    logo?: Nullable<string>;
    lunchEndTime?: Nullable<string>;
    lunchStartTime?: Nullable<string>;
    name: string;
    ownerEmail?: Nullable<string>;
    ownerName?: Nullable<string>;
    ownerPhone?: Nullable<string>;
    phone: string;
    registrationNumber: string;
    rtoLicenseExpiry?: Nullable<DateTime>;
    rtoLicenseNumber?: Nullable<string>;
    twitter?: Nullable<string>;
    website: string;
    weeklyHoliday?: Nullable<string>;
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

export interface UpdateSchoolInput {
    accountNumber?: Nullable<string>;
    address?: Nullable<string>;
    alternatePhone?: Nullable<string>;
    bankName?: Nullable<string>;
    branchName?: Nullable<string>;
    dayEndTime?: Nullable<string>;
    dayStartTime?: Nullable<string>;
    email?: Nullable<string>;
    establishedYear?: Nullable<string>;
    facebook?: Nullable<string>;
    gstNumber?: Nullable<string>;
    id: number;
    ifscCode?: Nullable<string>;
    instagram?: Nullable<string>;
    insuranceExpiry?: Nullable<DateTime>;
    insurancePolicyNumber?: Nullable<string>;
    insuranceProvider?: Nullable<string>;
    logo?: Nullable<string>;
    lunchEndTime?: Nullable<string>;
    lunchStartTime?: Nullable<string>;
    name?: Nullable<string>;
    ownerEmail?: Nullable<string>;
    ownerName?: Nullable<string>;
    ownerPhone?: Nullable<string>;
    phone?: Nullable<string>;
    registrationNumber?: Nullable<string>;
    rtoLicenseExpiry?: Nullable<DateTime>;
    rtoLicenseNumber?: Nullable<string>;
    status?: Nullable<string>;
    twitter?: Nullable<string>;
    website?: Nullable<string>;
    weeklyHoliday?: Nullable<string>;
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

export interface WhereSchoolSearchInput {
    address?: Nullable<string>;
    alternatePhone?: Nullable<string>;
    bankName?: Nullable<string>;
    email?: Nullable<string>;
    establishedYear?: Nullable<string>;
    gstNumber?: Nullable<string>;
    ifscCode?: Nullable<string>;
    insuranceProvider?: Nullable<string>;
    name?: Nullable<string>;
    ownerEmail?: Nullable<string>;
    ownerName?: Nullable<string>;
    ownerPhone?: Nullable<string>;
    phone?: Nullable<string>;
    registrationNumber?: Nullable<string>;
    rtoLicenseNumber?: Nullable<string>;
    status?: Nullable<string>;
    website?: Nullable<string>;
    weeklyHoliday?: Nullable<string>;
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
    createSchool(inputType: CreateSchoolInput): School | Promise<School>;
    createUser(inputType: CreateUserInput): User | Promise<User>;
    deleteSchool(id: number, userid: number): School | Promise<School>;
    deleteUser(id: number, userid: number): User | Promise<User>;
    optLogin(contact: string): User | Promise<User>;
    signup(signUpUserInput: SignUpUserInput): User | Promise<User>;
    updateSchool(id: number, updateType: UpdateSchoolInput): School | Promise<School>;
    updateUser(id: number, updateType: UpdateUserInput): User | Promise<User>;
    verifyOtp(contact: string, otp: string): User | Promise<User>;
}

export interface IQuery {
    getAllSchool(whereSearchInput: WhereSchoolSearchInput): School[] | Promise<School[]>;
    getAllUser(whereSearchInput: WhereUserSearchInput): User[] | Promise<User[]>;
    getPaginatedSchool(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereSchoolSearchInput): SchoolPagination | Promise<SchoolPagination>;
    getPaginatedUser(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereUserSearchInput): UserPagination | Promise<UserPagination>;
    getSchoolById(id: number): School | Promise<School>;
    getUserById(id: number): User | Promise<User>;
    login(loginUserInput: LoginUserInput): User | Promise<User>;
    searchSchool(whereSearchInput: WhereSchoolSearchInput): Nullable<School> | Promise<Nullable<School>>;
    searchUser(whereSearchInput: WhereUserSearchInput): Nullable<User> | Promise<Nullable<User>>;
}

export interface School {
    accountNumber?: Nullable<string>;
    address: string;
    alternatePhone?: Nullable<string>;
    bankName?: Nullable<string>;
    branchName?: Nullable<string>;
    createdAt: DateTime;
    dayEndTime?: Nullable<string>;
    dayStartTime?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    email: string;
    establishedYear: string;
    facebook?: Nullable<string>;
    gstNumber: string;
    id: number;
    ifscCode?: Nullable<string>;
    instagram?: Nullable<string>;
    insuranceExpiry?: Nullable<DateTime>;
    insurancePolicyNumber?: Nullable<string>;
    insuranceProvider?: Nullable<string>;
    logo?: Nullable<string>;
    lunchEndTime?: Nullable<string>;
    lunchStartTime?: Nullable<string>;
    name: string;
    ownerEmail?: Nullable<string>;
    ownerName?: Nullable<string>;
    ownerPhone?: Nullable<string>;
    phone: string;
    registrationNumber: string;
    rtoLicenseExpiry?: Nullable<DateTime>;
    rtoLicenseNumber?: Nullable<string>;
    status: SchoolStatus;
    twitter?: Nullable<string>;
    updatedAt: DateTime;
    users?: Nullable<User[]>;
    website: string;
    weeklyHoliday?: Nullable<string>;
}

export interface SchoolPagination {
    data: School[];
    skip: number;
    take: number;
    total: number;
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
