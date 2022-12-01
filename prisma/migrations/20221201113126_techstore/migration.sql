-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `isInNavigation` BOOLEAN NOT NULL,

    UNIQUE INDEX `Category_id_slug_key`(`id`, `slug`),
    UNIQUE INDEX `Category_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `manufacturer` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `attributes` JSON NULL,
    `description` VARCHAR(191) NOT NULL,
    `images` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `categorySlug` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Product_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_categorySlug_fkey` FOREIGN KEY (`categoryId`, `categorySlug`) REFERENCES `Category`(`id`, `slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
