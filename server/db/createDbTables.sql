CREATE TABLE clients (
    client_id        serial PRIMARY KEY,
    name             text
);
CREATE TABLE users (
    user_Id        serial PRIMARY KEY,
    username       varchar(40) NOT NULL,
    password       varchar(40) NOT NULL,
    clients_id     integer REFERENCES clients (client_id)
);
CREATE TABLE roles (
    role_id        serial PRIMARY KEY,
    role           text
);
CREATE TABLE user_roles (
    user_role_id  serial PRIMARY KEY,
    user_id integer REFERENCES users (user_id),
    role_id  integer REFERENCES roles (role_id)
);
CREATE TABLE project (
    project_id        serial PRIMARY KEY,
    name              text,
    client_id         integer REFERENCES clients (client_id)
);
CREATE TABLE invoice (
    invoice_id        serial PRIMARY KEY,
    client_id         integer REFERENCES clients (client_id),
    project_id        integer REFERENCES project (project_id)
);
CREATE TABLE files (
    file_id        serial PRIMARY KEY,
    name           varchar(80),
    file_path      varchar(80)
);
CREATE TABLE ahj (
    ahj_id        serial PRIMARY KEY,
    name          text
);
CREATE TABLE positions (
    position_id        serial PRIMARY KEY,
    position           text
);
CREATE TABLE ahj_links (
    ahj_links_id  serial PRIMARY KEY,
    ahj_id        integer REFERENCES ahj (ahj_id),
    link          text
);
CREATE TABLE professional_contacts (
    professional_contact_id  serial PRIMARY KEY,
    position_id              integer REFERENCES positions (position_id),
    name                     text
);
CREATE TABLE ahj_contacts (
    ahj_contact_id  serial PRIMARY KEY,
    ahj_id          integer REFERENCES ahj (ahj_id),
    position_id     integer REFERENCES positions (position_id),
    name            text
);
