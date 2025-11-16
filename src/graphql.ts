
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CarStatus {
    AVAILABLE = "AVAILABLE",
    INACTIVE = "INACTIVE",
    IN_USE = "IN_USE",
    MAINTENANCE = "MAINTENANCE"
}

export enum CourseStatus {
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED",
    INACTIVE = "INACTIVE",
    UPCOMING = "UPCOMING"
}

export enum CourseType {
    ADVANCED = "ADVANCED",
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    REFRESHER = "REFRESHER"
}

export enum DriverStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    ON_LEAVE = "ON_LEAVE",
    SUSPENDED = "SUSPENDED"
}

export enum FuelType {
    CNG = "CNG",
    DIESEL = "DIESEL",
    ELECTRIC = "ELECTRIC",
    HYBRID = "HYBRID",
    PETROL = "PETROL"
}

export enum HolidayDeclarationType {
    ALL_CARS_MULTIPLE_DATES = "ALL_CARS_MULTIPLE_DATES",
    ALL_CARS_PARTICULAR_SLOTS = "ALL_CARS_PARTICULAR_SLOTS",
    ONE_CAR_MULTIPLE_DATES = "ONE_CAR_MULTIPLE_DATES",
    ONE_CAR_PARTICULAR_SLOTS = "ONE_CAR_PARTICULAR_SLOTS"
}

export enum HolidayStatus {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    EXPIRED = "EXPIRED",
    UPCOMING = "UPCOMING"
}

export enum LeaveStatus {
    APPROVED = "APPROVED",
    CANCELLED = "CANCELLED",
    PENDING = "PENDING",
    REJECTED = "REJECTED"
}

export enum Role {
    ADMIN = "ADMIN",
    DRIVER = "DRIVER",
    MT_ACCOUNTS = "MT_ACCOUNTS",
    MT_ADMIN = "MT_ADMIN",
    MT_MANAGER = "MT_MANAGER",
    SYSTEM = "SYSTEM",
    USER = "USER"
}

export enum SalaryStatus {
    PAID = "PAID",
    PENDING = "PENDING",
    PROCESSING = "PROCESSING"
}

export enum SchoolStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}

export enum ServiceStatus {
    ACTIVE = "ACTIVE",
    DISCONTINUED = "DISCONTINUED",
    INACTIVE = "INACTIVE",
    UPCOMING = "UPCOMING"
}

export enum ServiceType {
    ADDON = "ADDON",
    LICENSE = "LICENSE"
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum TransmissionType {
    AMT = "AMT",
    AUTOMATIC = "AUTOMATIC",
    CVT = "CVT",
    MANUAL = "MANUAL"
}

export interface CreateCarInput {
    assignedDriverId?: Nullable<number>;
    carId: string;
    carName: string;
    chassisNumber?: Nullable<string>;
    color: string;
    currentMileage?: Nullable<number>;
    engineNumber?: Nullable<string>;
    fitnessExpiry?: Nullable<DateTime>;
    fuelType: FuelType;
    insuranceExpiry?: Nullable<DateTime>;
    insuranceNumber?: Nullable<string>;
    lastServiceDate?: Nullable<DateTime>;
    model: string;
    nextServiceDate?: Nullable<DateTime>;
    pucExpiry?: Nullable<DateTime>;
    purchaseCost?: Nullable<number>;
    purchaseDate?: Nullable<DateTime>;
    registrationNumber: string;
    schoolId: number;
    seatingCapacity?: Nullable<number>;
    status?: Nullable<CarStatus>;
    transmission: TransmissionType;
    year: number;
}

export interface CreateCourseInput {
    courseDays: number;
    courseId: string;
    courseName: string;
    courseType: CourseType;
    description: string;
    enrolledStudents?: Nullable<number>;
    hoursPerDay: number;
    price: number;
    requirements?: Nullable<string>;
    schoolId: number;
    sessionsCompleted?: Nullable<number>;
    status?: Nullable<CourseStatus>;
    syllabus?: Nullable<string>;
    totalRevenue?: Nullable<number>;
}

export interface CreateDriverInput {
    address: string;
    alternatePhone?: Nullable<string>;
    bloodGroup?: Nullable<string>;
    cancelledBookings?: Nullable<number>;
    completedBookings?: Nullable<number>;
    dateOfBirth: DateTime;
    driverId: string;
    email: string;
    emergencyContactName?: Nullable<string>;
    emergencyContactNumber?: Nullable<string>;
    emergencyContactRelation?: Nullable<string>;
    experience?: Nullable<number>;
    gender: string;
    joiningDate?: Nullable<DateTime>;
    licenseExpiryDate: DateTime;
    licenseIssueDate: DateTime;
    licenseNumber: string;
    licenseType: string;
    mobile: string;
    name: string;
    rating?: Nullable<number>;
    salary?: Nullable<number>;
    schoolId: number;
    totalBookings?: Nullable<number>;
    userId: number;
}

export interface CreateHolidayInput {
    carId?: Nullable<number>;
    declarationType: string;
    endDate: string;
    reason: string;
    schoolId: number;
    slots?: Nullable<string>;
    startDate: string;
}

export interface CreateLeaveHistoryInput {
    approvedAt?: Nullable<DateTime>;
    approvedBy?: Nullable<number>;
    driverId: number;
    fromDate: DateTime;
    leaveId: string;
    leaveType?: Nullable<string>;
    reason: string;
    rejectionReason?: Nullable<string>;
    toDate: DateTime;
    totalDays: number;
}

export interface CreateSalaryHistoryInput {
    basicSalary: number;
    bonus?: Nullable<number>;
    deductions?: Nullable<number>;
    driverId: number;
    month: string;
    monthNumber: number;
    netSalary: number;
    paidBy?: Nullable<number>;
    paidOn?: Nullable<DateTime>;
    paymentMethod?: Nullable<string>;
    remarks?: Nullable<string>;
    salaryId: string;
    transactionId?: Nullable<string>;
    year: number;
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
    gstNumber?: Nullable<string>;
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
    website?: Nullable<string>;
    weeklyHoliday?: Nullable<string>;
}

export interface CreateServiceInput {
    activeUsers?: Nullable<number>;
    category: string;
    description: string;
    duration: number;
    features?: Nullable<string>;
    includedServices?: Nullable<string>;
    price: number;
    requirements?: Nullable<string>;
    schoolId: number;
    serviceId: string;
    serviceName: string;
    serviceType: ServiceType;
    status?: Nullable<ServiceStatus>;
    termsAndConditions?: Nullable<string>;
    totalRevenue?: Nullable<number>;
}

export interface CreateSyllabusInput {
    assessmentCriteria?: Nullable<string>;
    courseId: number;
    dayNumber: number;
    notes?: Nullable<string>;
    objectives?: Nullable<string>;
    practicalActivities?: Nullable<string>;
    syllabusId: string;
    title: string;
    topics: string;
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
    schoolId?: Nullable<number>;
    status?: Nullable<Status>;
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface SearchCarInput {
    assignedDriverId?: Nullable<number>;
    fuelType?: Nullable<FuelType>;
    schoolId?: Nullable<number>;
    search?: Nullable<string>;
    status?: Nullable<CarStatus>;
}

export interface SearchCourseInput {
    courseId?: Nullable<string>;
    courseName?: Nullable<string>;
    courseType?: Nullable<CourseType>;
    schoolId?: Nullable<number>;
    status?: Nullable<CourseStatus>;
}

export interface SearchHolidayInput {
    carId?: Nullable<number>;
    declarationType?: Nullable<string>;
    endDate?: Nullable<string>;
    reason?: Nullable<string>;
    schoolId?: Nullable<number>;
    startDate?: Nullable<string>;
    status?: Nullable<string>;
}

export interface SearchPaginationInput {
    search?: Nullable<string>;
    skip: number;
    take: number;
}

export interface SearchSyllabusInput {
    courseId?: Nullable<number>;
    dayNumber?: Nullable<number>;
    syllabusId?: Nullable<string>;
    title?: Nullable<string>;
}

export interface SignUpUserInput {
    mobile: string;
    name: string;
    password: string;
}

export interface UpdateCarInput {
    assignedDriverId?: Nullable<number>;
    carId?: Nullable<string>;
    carName?: Nullable<string>;
    chassisNumber?: Nullable<string>;
    color?: Nullable<string>;
    currentMileage?: Nullable<number>;
    engineNumber?: Nullable<string>;
    fitnessExpiry?: Nullable<DateTime>;
    fuelType?: Nullable<FuelType>;
    id: number;
    insuranceExpiry?: Nullable<DateTime>;
    insuranceNumber?: Nullable<string>;
    lastServiceDate?: Nullable<DateTime>;
    model?: Nullable<string>;
    nextServiceDate?: Nullable<DateTime>;
    pucExpiry?: Nullable<DateTime>;
    purchaseCost?: Nullable<number>;
    purchaseDate?: Nullable<DateTime>;
    registrationNumber?: Nullable<string>;
    schoolId?: Nullable<number>;
    seatingCapacity?: Nullable<number>;
    status?: Nullable<CarStatus>;
    totalBookings?: Nullable<number>;
    transmission?: Nullable<TransmissionType>;
    year?: Nullable<number>;
}

export interface UpdateCourseInput {
    courseDays?: Nullable<number>;
    courseId?: Nullable<string>;
    courseName?: Nullable<string>;
    courseType?: Nullable<CourseType>;
    description?: Nullable<string>;
    enrolledStudents?: Nullable<number>;
    hoursPerDay?: Nullable<number>;
    id: number;
    price?: Nullable<number>;
    requirements?: Nullable<string>;
    schoolId?: Nullable<number>;
    sessionsCompleted?: Nullable<number>;
    status?: Nullable<CourseStatus>;
    syllabus?: Nullable<string>;
    totalRevenue?: Nullable<number>;
}

export interface UpdateDriverInput {
    address?: Nullable<string>;
    alternatePhone?: Nullable<string>;
    bloodGroup?: Nullable<string>;
    cancelledBookings?: Nullable<number>;
    completedBookings?: Nullable<number>;
    dateOfBirth?: Nullable<DateTime>;
    email?: Nullable<string>;
    emergencyContactName?: Nullable<string>;
    emergencyContactNumber?: Nullable<string>;
    emergencyContactRelation?: Nullable<string>;
    experience?: Nullable<number>;
    gender?: Nullable<string>;
    id: number;
    joiningDate?: Nullable<DateTime>;
    licenseExpiryDate?: Nullable<DateTime>;
    licenseIssueDate?: Nullable<DateTime>;
    licenseNumber?: Nullable<string>;
    licenseType?: Nullable<string>;
    mobile?: Nullable<string>;
    name?: Nullable<string>;
    rating?: Nullable<number>;
    salary?: Nullable<number>;
    status?: Nullable<DriverStatus>;
    totalBookings?: Nullable<number>;
}

export interface UpdateHolidayInput {
    carId?: Nullable<number>;
    declarationType?: Nullable<string>;
    endDate?: Nullable<string>;
    reason?: Nullable<string>;
    schoolId?: Nullable<number>;
    slots?: Nullable<string>;
    startDate?: Nullable<string>;
    status?: Nullable<string>;
}

export interface UpdateLeaveHistoryInput {
    approvedAt?: Nullable<DateTime>;
    approvedBy?: Nullable<number>;
    fromDate?: Nullable<DateTime>;
    id: number;
    leaveType?: Nullable<string>;
    reason?: Nullable<string>;
    rejectionReason?: Nullable<string>;
    status?: Nullable<LeaveStatus>;
    toDate?: Nullable<DateTime>;
    totalDays?: Nullable<number>;
}

export interface UpdateSalaryHistoryInput {
    basicSalary?: Nullable<number>;
    bonus?: Nullable<number>;
    deductions?: Nullable<number>;
    id: number;
    month?: Nullable<string>;
    monthNumber?: Nullable<number>;
    netSalary?: Nullable<number>;
    paidBy?: Nullable<number>;
    paidOn?: Nullable<DateTime>;
    paymentMethod?: Nullable<string>;
    remarks?: Nullable<string>;
    status?: Nullable<SalaryStatus>;
    transactionId?: Nullable<string>;
    year?: Nullable<number>;
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

export interface UpdateServiceInput {
    activeUsers?: Nullable<number>;
    category?: Nullable<string>;
    description?: Nullable<string>;
    duration?: Nullable<number>;
    features?: Nullable<string>;
    includedServices?: Nullable<string>;
    price?: Nullable<number>;
    requirements?: Nullable<string>;
    schoolId?: Nullable<number>;
    serviceId?: Nullable<string>;
    serviceName?: Nullable<string>;
    serviceType?: Nullable<ServiceType>;
    status?: Nullable<ServiceStatus>;
    termsAndConditions?: Nullable<string>;
    totalRevenue?: Nullable<number>;
}

export interface UpdateSyllabusInput {
    assessmentCriteria?: Nullable<string>;
    courseId?: Nullable<number>;
    dayNumber?: Nullable<number>;
    id: number;
    notes?: Nullable<string>;
    objectives?: Nullable<string>;
    practicalActivities?: Nullable<string>;
    syllabusId?: Nullable<string>;
    title?: Nullable<string>;
    topics?: Nullable<string>;
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
    schoolId?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
}

export interface WhereDriverSearchInput {
    driverId?: Nullable<string>;
    email?: Nullable<string>;
    id?: Nullable<number>;
    licenseNumber?: Nullable<string>;
    mobile?: Nullable<string>;
    name?: Nullable<string>;
    schoolId?: Nullable<number>;
    search?: Nullable<string>;
    status?: Nullable<DriverStatus>;
    userId?: Nullable<number>;
}

export interface WhereLeaveHistorySearchInput {
    driverId?: Nullable<number>;
    id?: Nullable<number>;
    leaveId?: Nullable<string>;
    leaveType?: Nullable<string>;
    search?: Nullable<string>;
    status?: Nullable<LeaveStatus>;
}

export interface WhereSalaryHistorySearchInput {
    driverId?: Nullable<number>;
    id?: Nullable<number>;
    month?: Nullable<string>;
    salaryId?: Nullable<string>;
    search?: Nullable<string>;
    status?: Nullable<SalaryStatus>;
    year?: Nullable<number>;
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

export interface WhereServiceSearchInput {
    schoolId?: Nullable<number>;
    serviceType?: Nullable<ServiceType>;
    status?: Nullable<ServiceStatus>;
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
    schoolId?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
}

export interface Car {
    assignedDriverId?: Nullable<number>;
    carId: string;
    carName: string;
    chassisNumber?: Nullable<string>;
    color: string;
    createdAt: DateTime;
    currentMileage: number;
    deletedAt?: Nullable<DateTime>;
    engineNumber?: Nullable<string>;
    fitnessExpiry?: Nullable<DateTime>;
    fuelType: FuelType;
    id: number;
    insuranceExpiry?: Nullable<DateTime>;
    insuranceNumber?: Nullable<string>;
    lastServiceDate?: Nullable<DateTime>;
    model: string;
    nextServiceDate?: Nullable<DateTime>;
    pucExpiry?: Nullable<DateTime>;
    purchaseCost?: Nullable<number>;
    purchaseDate?: Nullable<DateTime>;
    registrationNumber: string;
    school?: Nullable<School>;
    schoolId: number;
    seatingCapacity: number;
    status: CarStatus;
    totalBookings: number;
    transmission: TransmissionType;
    updatedAt: DateTime;
    year: number;
}

export interface CarPagination {
    data: Car[];
    skip: number;
    take: number;
    total: number;
}

export interface Course {
    courseDays: number;
    courseId: string;
    courseName: string;
    courseType: CourseType;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    description: string;
    enrolledStudents: number;
    hoursPerDay: number;
    id: number;
    price: number;
    requirements?: Nullable<string>;
    school?: Nullable<School>;
    schoolId: number;
    sessionsCompleted: number;
    status: CourseStatus;
    syllabus?: Nullable<string>;
    totalRevenue: number;
    updatedAt: DateTime;
}

export interface CoursePagination {
    data: Course[];
    skip: number;
    take: number;
    total: number;
}

export interface Driver {
    address: string;
    alternatePhone?: Nullable<string>;
    bloodGroup?: Nullable<string>;
    cancelledBookings: number;
    completedBookings: number;
    createdAt: DateTime;
    dateOfBirth: DateTime;
    deletedAt?: Nullable<DateTime>;
    driverId: string;
    email: string;
    emergencyContactName?: Nullable<string>;
    emergencyContactNumber?: Nullable<string>;
    emergencyContactRelation?: Nullable<string>;
    experience: number;
    gender: string;
    id: number;
    joiningDate: DateTime;
    leaveHistory?: Nullable<LeaveHistory[]>;
    licenseExpiryDate: DateTime;
    licenseIssueDate: DateTime;
    licenseNumber: string;
    licenseType: string;
    mobile: string;
    name: string;
    rating: number;
    salary: number;
    salaryHistory?: Nullable<SalaryHistory[]>;
    school?: Nullable<School>;
    schoolId: number;
    status: DriverStatus;
    totalBookings: number;
    updatedAt: DateTime;
    user?: Nullable<User>;
    userId: number;
}

export interface DriverPagination {
    data: Driver[];
    skip: number;
    take: number;
    total: number;
}

export interface Holiday {
    car?: Nullable<Car>;
    carId?: Nullable<number>;
    createdAt: DateTime;
    declarationType: HolidayDeclarationType;
    deletedAt?: Nullable<DateTime>;
    endDate: DateTime;
    id: number;
    reason: string;
    school?: Nullable<School>;
    schoolId: number;
    slots?: Nullable<string[]>;
    startDate: DateTime;
    status: HolidayStatus;
    updatedAt: DateTime;
}

export interface HolidayPagination {
    data: Holiday[];
    skip: number;
    take: number;
    total: number;
}

export interface LeaveHistory {
    approvedAt?: Nullable<DateTime>;
    approvedBy?: Nullable<number>;
    createdAt: DateTime;
    driver?: Nullable<Driver>;
    driverId: number;
    fromDate: DateTime;
    id: number;
    leaveId: string;
    leaveType?: Nullable<string>;
    reason: string;
    rejectionReason?: Nullable<string>;
    status: LeaveStatus;
    toDate: DateTime;
    totalDays: number;
    updatedAt: DateTime;
}

export interface LeaveHistoryPagination {
    data: LeaveHistory[];
    skip: number;
    take: number;
    total: number;
}

export interface IMutation {
    createCar(inputType: CreateCarInput): Car | Promise<Car>;
    createCourse(inputType: CreateCourseInput): Course | Promise<Course>;
    createDriver(inputType: CreateDriverInput): Driver | Promise<Driver>;
    createHoliday(inputType: CreateHolidayInput): Holiday | Promise<Holiday>;
    createLeaveHistory(inputType: CreateLeaveHistoryInput): LeaveHistory | Promise<LeaveHistory>;
    createSalaryHistory(inputType: CreateSalaryHistoryInput): SalaryHistory | Promise<SalaryHistory>;
    createSchool(inputType: CreateSchoolInput): School | Promise<School>;
    createService(inputType: CreateServiceInput): Service | Promise<Service>;
    createSyllabus(inputType: CreateSyllabusInput): Syllabus | Promise<Syllabus>;
    createUser(inputType: CreateUserInput): User | Promise<User>;
    deleteCar(id: number, userid: number): Car | Promise<Car>;
    deleteCourse(id: number, userid: number): Course | Promise<Course>;
    deleteDriver(id: number, userid: number): Driver | Promise<Driver>;
    deleteHoliday(id: number, userid: number): Holiday | Promise<Holiday>;
    deleteLeaveHistory(id: number, userid: number): LeaveHistory | Promise<LeaveHistory>;
    deleteSalaryHistory(id: number, userid: number): SalaryHistory | Promise<SalaryHistory>;
    deleteSchool(id: number, userid: number): School | Promise<School>;
    deleteService(id: number, userid: number): Service | Promise<Service>;
    deleteSyllabus(id: number, userid: number): Syllabus | Promise<Syllabus>;
    deleteUser(id: number, userid: number): User | Promise<User>;
    optLogin(contact: string): User | Promise<User>;
    signup(signUpUserInput: SignUpUserInput): User | Promise<User>;
    updateCar(id: number, updateType: UpdateCarInput): Car | Promise<Car>;
    updateCourse(id: number, updateType: UpdateCourseInput): Course | Promise<Course>;
    updateDriver(id: number, updateType: UpdateDriverInput): Driver | Promise<Driver>;
    updateHoliday(id: number, updateType: UpdateHolidayInput): Holiday | Promise<Holiday>;
    updateLeaveHistory(id: number, updateType: UpdateLeaveHistoryInput): LeaveHistory | Promise<LeaveHistory>;
    updateSalaryHistory(id: number, updateType: UpdateSalaryHistoryInput): SalaryHistory | Promise<SalaryHistory>;
    updateSchool(id: number, updateType: UpdateSchoolInput): School | Promise<School>;
    updateService(id: number, updateType: UpdateServiceInput): Service | Promise<Service>;
    updateSyllabus(id: number, updateType: UpdateSyllabusInput): Syllabus | Promise<Syllabus>;
    updateUser(id: number, updateType: UpdateUserInput): User | Promise<User>;
    verifyOtp(contact: string, otp: string): User | Promise<User>;
}

export interface IQuery {
    getAllCar(whereSearchInput: SearchCarInput): Car[] | Promise<Car[]>;
    getAllCourse(whereSearchInput: SearchCourseInput): Course[] | Promise<Course[]>;
    getAllDriver(whereSearchInput: WhereDriverSearchInput): Driver[] | Promise<Driver[]>;
    getAllHoliday(whereSearchInput: SearchHolidayInput): Holiday[] | Promise<Holiday[]>;
    getAllLeaveHistory(whereSearchInput: WhereLeaveHistorySearchInput): LeaveHistory[] | Promise<LeaveHistory[]>;
    getAllSalaryHistory(whereSearchInput: WhereSalaryHistorySearchInput): SalaryHistory[] | Promise<SalaryHistory[]>;
    getAllSchool(whereSearchInput: WhereSchoolSearchInput): School[] | Promise<School[]>;
    getAllService(whereSearchInput: WhereServiceSearchInput): Service[] | Promise<Service[]>;
    getAllSyllabus(whereSearchInput: SearchSyllabusInput): Syllabus[] | Promise<Syllabus[]>;
    getAllUser(whereSearchInput: WhereUserSearchInput): User[] | Promise<User[]>;
    getCarById(id: number): Car | Promise<Car>;
    getCourseById(id: number): Course | Promise<Course>;
    getDriverById(id: number): Driver | Promise<Driver>;
    getHolidayById(id: number): Holiday | Promise<Holiday>;
    getLeaveHistoryById(id: number): LeaveHistory | Promise<LeaveHistory>;
    getPaginatedCar(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchCarInput): CarPagination | Promise<CarPagination>;
    getPaginatedCourse(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchCourseInput): CoursePagination | Promise<CoursePagination>;
    getPaginatedDriver(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereDriverSearchInput): DriverPagination | Promise<DriverPagination>;
    getPaginatedHoliday(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchHolidayInput): HolidayPagination | Promise<HolidayPagination>;
    getPaginatedLeaveHistory(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereLeaveHistorySearchInput): LeaveHistoryPagination | Promise<LeaveHistoryPagination>;
    getPaginatedSalaryHistory(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereSalaryHistorySearchInput): SalaryHistoryPagination | Promise<SalaryHistoryPagination>;
    getPaginatedSchool(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereSchoolSearchInput): SchoolPagination | Promise<SchoolPagination>;
    getPaginatedService(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereServiceSearchInput): ServicePagination | Promise<ServicePagination>;
    getPaginatedSyllabus(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchSyllabusInput): SyllabusPagination | Promise<SyllabusPagination>;
    getPaginatedUser(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereUserSearchInput): UserPagination | Promise<UserPagination>;
    getSalaryHistoryById(id: number): SalaryHistory | Promise<SalaryHistory>;
    getSchoolById(id: number): School | Promise<School>;
    getServiceById(id: number): Service | Promise<Service>;
    getSyllabusById(id: number): Syllabus | Promise<Syllabus>;
    getUserById(id: number): User | Promise<User>;
    login(loginUserInput: LoginUserInput): User | Promise<User>;
    searchCar(whereSearchInput: SearchCarInput): Nullable<Car> | Promise<Nullable<Car>>;
    searchCourse(whereSearchInput: SearchCourseInput): Nullable<Course> | Promise<Nullable<Course>>;
    searchDriver(whereSearchInput: WhereDriverSearchInput): Nullable<Driver> | Promise<Nullable<Driver>>;
    searchHoliday(whereSearchInput: SearchHolidayInput): Nullable<Holiday> | Promise<Nullable<Holiday>>;
    searchLeaveHistory(whereSearchInput: WhereLeaveHistorySearchInput): Nullable<LeaveHistory> | Promise<Nullable<LeaveHistory>>;
    searchSalaryHistory(whereSearchInput: WhereSalaryHistorySearchInput): Nullable<SalaryHistory> | Promise<Nullable<SalaryHistory>>;
    searchSchool(whereSearchInput: WhereSchoolSearchInput): Nullable<School> | Promise<Nullable<School>>;
    searchService(whereSearchInput: WhereServiceSearchInput): Nullable<Service> | Promise<Nullable<Service>>;
    searchSyllabus(whereSearchInput: SearchSyllabusInput): Nullable<Syllabus> | Promise<Nullable<Syllabus>>;
    searchUser(whereSearchInput: WhereUserSearchInput): Nullable<User> | Promise<Nullable<User>>;
}

export interface SalaryHistory {
    basicSalary: number;
    bonus: number;
    createdAt: DateTime;
    deductions: number;
    driver?: Nullable<Driver>;
    driverId: number;
    id: number;
    month: string;
    monthNumber: number;
    netSalary: number;
    paidBy?: Nullable<number>;
    paidOn?: Nullable<DateTime>;
    paymentMethod?: Nullable<string>;
    remarks?: Nullable<string>;
    salaryId: string;
    status: SalaryStatus;
    transactionId?: Nullable<string>;
    updatedAt: DateTime;
    year: number;
}

export interface SalaryHistoryPagination {
    data: SalaryHistory[];
    skip: number;
    take: number;
    total: number;
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

export interface Service {
    activeUsers: number;
    category: string;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    description: string;
    duration: number;
    features?: Nullable<string>;
    id: number;
    includedServices?: Nullable<string>;
    price: number;
    requirements?: Nullable<string>;
    school?: Nullable<School>;
    schoolId: number;
    serviceId: string;
    serviceName: string;
    serviceType: ServiceType;
    status: ServiceStatus;
    termsAndConditions?: Nullable<string>;
    totalRevenue: number;
    updatedAt: DateTime;
}

export interface ServicePagination {
    data: Service[];
    skip: number;
    take: number;
    total: number;
}

export interface Syllabus {
    assessmentCriteria?: Nullable<string>;
    course?: Nullable<Course>;
    courseId: number;
    createdAt: DateTime;
    dayNumber: number;
    deletedAt?: Nullable<DateTime>;
    id: number;
    notes?: Nullable<string>;
    objectives?: Nullable<string>;
    practicalActivities?: Nullable<string>;
    syllabusId: string;
    title: string;
    topics: string;
    updatedAt: DateTime;
}

export interface SyllabusPagination {
    data: Syllabus[];
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
    school?: Nullable<School>;
    schoolId?: Nullable<number>;
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
