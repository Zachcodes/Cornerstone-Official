CREATE TABLE clients (
    client_id        integer serial PRIMARY KEY
);
CREATE TABLE users (
    user_Id        integer serial PRIMARY KEY
);
CREATE TABLE roles (
    role_id        integer serial PRIMARY KEY
);
CREATE TABLE user_roles (
    user_role_id  integer serial PRIMARY KEY,
    user_id integer REFERENCES users (user_id),
    role_id  integer REFERENCES roles (role_id)
);
CREATE TABLE project (
    project_id        integer serial PRIMARY KEY
);
CREATE TABLE invoice (
    invoice_id        integer serial PRIMARY KEY
);
CREATE TABLE files (
    file_id        integer serial PRIMARY KEY
);
CREATE TABLE ahj (
    ahj_id        integer serial PRIMARY KEY
);
CREATE TABLE positions (
    position_id        integer serial PRIMARY KEY
);
CREATE TABLE ahj_positions (
  ahj_position_id  integer serial PRIMARY KEY,
  ahj_id integer REFERENCES ahj (ahj_id),
  position_id  integer REFERENCES positions (position_id)
);
CREATE TABLE ahj_links (
    ahj_links_id        integer serial PRIMARY KEY,
    ahj_id  integer REFERENCES ahj (ahj_id)
);
CREATE TABLE professional_service_positions (
    professional_service_position_id  integer serial PRIMARY KEY
);
CREATE TABLE professional_service_contacts (
    professional_service_contact_id integer serial PRIMARY KEY,
    professional_service_position_id  integer REFERENCES professional_service_positions (professional_service_position_id)
);
