-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `contact1` VARCHAR(191) NOT NULL,
    `contact2` VARCHAR(191) NULL,
    `address` LONGTEXT NULL,
    `role` ENUM('SYSTEM', 'ADMIN', 'USER', 'DRIVER', 'MT_ADMIN', 'MT_ACCOUNTS', 'MT_MANAGER') NOT NULL DEFAULT 'USER',
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `otp` VARCHAR(191) NULL,
    `dob` DATETIME(3) NULL,
    `profile` VARCHAR(191) NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `schoolId` INTEGER NULL,

    UNIQUE INDEX `user_contact1_key`(`contact1`),
    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `driver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `schoolId` INTEGER NOT NULL,
    `driverId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `alternatePhone` VARCHAR(191) NULL,
    `address` LONGTEXT NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `bloodGroup` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NOT NULL,
    `licenseNumber` VARCHAR(191) NOT NULL,
    `licenseType` VARCHAR(191) NOT NULL,
    `licenseIssueDate` DATETIME(3) NOT NULL,
    `licenseExpiryDate` DATETIME(3) NOT NULL,
    `experience` INTEGER NOT NULL DEFAULT 0,
    `joiningDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `salary` DOUBLE NOT NULL DEFAULT 0,
    `emergencyContactName` VARCHAR(191) NULL,
    `emergencyContactNumber` VARCHAR(191) NULL,
    `emergencyContactRelation` VARCHAR(191) NULL,
    `totalBookings` INTEGER NOT NULL DEFAULT 0,
    `completedBookings` INTEGER NOT NULL DEFAULT 0,
    `cancelledBookings` INTEGER NOT NULL DEFAULT 0,
    `rating` DOUBLE NOT NULL DEFAULT 0.0,
    `status` ENUM('ACTIVE', 'INACTIVE', 'ON_LEAVE', 'SUSPENDED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `driver_userId_key`(`userId`),
    UNIQUE INDEX `driver_driverId_key`(`driverId`),
    UNIQUE INDEX `driver_email_key`(`email`),
    UNIQUE INDEX `driver_mobile_key`(`mobile`),
    UNIQUE INDEX `driver_licenseNumber_key`(`licenseNumber`),
    INDEX `driver_schoolId_idx`(`schoolId`),
    INDEX `driver_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `leaveHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `driverId` INTEGER NOT NULL,
    `leaveId` VARCHAR(191) NOT NULL,
    `fromDate` DATETIME(3) NOT NULL,
    `toDate` DATETIME(3) NOT NULL,
    `reason` TEXT NOT NULL,
    `leaveType` VARCHAR(191) NULL,
    `totalDays` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `approvedBy` INTEGER NULL,
    `approvedAt` DATETIME(3) NULL,
    `rejectionReason` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `leaveHistory_leaveId_key`(`leaveId`),
    INDEX `leaveHistory_driverId_idx`(`driverId`),
    INDEX `leaveHistory_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `salaryHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `driverId` INTEGER NOT NULL,
    `salaryId` VARCHAR(191) NOT NULL,
    `month` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `monthNumber` INTEGER NOT NULL,
    `basicSalary` DOUBLE NOT NULL,
    `bonus` DOUBLE NOT NULL DEFAULT 0,
    `deductions` DOUBLE NOT NULL DEFAULT 0,
    `netSalary` DOUBLE NOT NULL,
    `paymentMethod` VARCHAR(191) NULL,
    `transactionId` VARCHAR(191) NULL,
    `remarks` TEXT NULL,
    `paidBy` INTEGER NULL,
    `paidOn` DATETIME(3) NULL,
    `status` ENUM('PENDING', 'PAID', 'PROCESSING') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `salaryHistory_salaryId_key`(`salaryId`),
    INDEX `salaryHistory_driverId_idx`(`driverId`),
    INDEX `salaryHistory_status_idx`(`status`),
    UNIQUE INDEX `salaryHistory_driverId_year_monthNumber_key`(`driverId`, `year`, `monthNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `school` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `alternatePhone` VARCHAR(191) NULL,
    `address` LONGTEXT NOT NULL,
    `registrationNumber` VARCHAR(191) NOT NULL,
    `gstNumber` VARCHAR(191) NOT NULL,
    `establishedYear` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `dayStartTime` VARCHAR(191) NULL,
    `dayEndTime` VARCHAR(191) NULL,
    `lunchStartTime` VARCHAR(191) NULL,
    `lunchEndTime` VARCHAR(191) NULL,
    `weeklyHoliday` VARCHAR(191) NULL,
    `ownerName` VARCHAR(191) NULL,
    `ownerPhone` VARCHAR(191) NULL,
    `ownerEmail` VARCHAR(191) NULL,
    `bankName` VARCHAR(191) NULL,
    `accountNumber` VARCHAR(191) NULL,
    `ifscCode` VARCHAR(191) NULL,
    `branchName` VARCHAR(191) NULL,
    `rtoLicenseNumber` VARCHAR(191) NULL,
    `rtoLicenseExpiry` DATETIME(3) NULL,
    `insuranceProvider` VARCHAR(191) NULL,
    `insurancePolicyNumber` VARCHAR(191) NULL,
    `insuranceExpiry` DATETIME(3) NULL,
    `facebook` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `status` ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `school_email_key`(`email`),
    UNIQUE INDEX `school_registrationNumber_key`(`registrationNumber`),
    UNIQUE INDEX `school_gstNumber_key`(`gstNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `school`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `driver` ADD CONSTRAINT `driver_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `driver` ADD CONSTRAINT `driver_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `school`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `leaveHistory` ADD CONSTRAINT `leaveHistory_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `driver`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `salaryHistory` ADD CONSTRAINT `salaryHistory_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `driver`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
