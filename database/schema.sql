CREATE DATABASE IF NOT EXISTS job_board;

USE job_board;

CREATE TABLE company (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE technology (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE offer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    city VARCHAR(100) NOT NULL,
    contract_type ENUM('internship','apprenticeship') NOT NULL,
    long_description TEXT NOT NULL,
    short_description TEXT NOT NULL,
    contact_email VARCHAR(100),
    application_link TEXT,
    publication_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    company_id INT NOT NULL,

    CONSTRAINT fk_offer_company
        FOREIGN KEY (company_id)
        REFERENCES company(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE offer_technology (
    offer_id INT NOT NULL,
    technology_id INT NOT NULL,

    PRIMARY KEY (offer_id, technology_id),

    CONSTRAINT fk_offer_technology_offer
        FOREIGN KEY (offer_id)
        REFERENCES offer(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_offer_technology_technology
        FOREIGN KEY (technology_id)
        REFERENCES technology(id)
        ON DELETE CASCADE
);