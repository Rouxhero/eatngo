
-- PostgreSQL database dump
--

-- Dumped from database version 11.9
-- Dumped by pg_dump version 11.9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: resto_u; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA resto_u;


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: resto; Type: TABLE; Schema: resto_u; Owner: -
--

CREATE TABLE resto_u.resto (
    nom varchar (30) NOT NULL,
    adresse varchar (30),
    position varchar (30),
    status int (1),
    afluence int(2);

);

INSERT INTO resto_u.resto (nom,adresse,position,status,afluence) VALUES 
("RU Pariselle","NN","123-454-55","1","0"),
("Cafet Pariselle","NN","123-454-55","0","0"),
("Pasteria","NN","123-454-55","0","0"),