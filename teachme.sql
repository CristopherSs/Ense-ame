--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: permiso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permiso (
    permisoid integer NOT NULL,
    nombre character varying(30),
    descripcion character varying(60)
);


ALTER TABLE public.permiso OWNER TO postgres;

--
-- Name: permiso_permisoid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.permiso_permisoid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.permiso_permisoid_seq OWNER TO postgres;

--
-- Name: permiso_permisoid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.permiso_permisoid_seq OWNED BY public.permiso.permisoid;


--
-- Name: rol; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rol (
    rolid integer NOT NULL,
    nombre character varying(30),
    descripcion character varying(60)
);


ALTER TABLE public.rol OWNER TO postgres;

--
-- Name: rol_rolid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rol_rolid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rol_rolid_seq OWNER TO postgres;

--
-- Name: rol_rolid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rol_rolid_seq OWNED BY public.rol.rolid;


--
-- Name: rolpermiso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rolpermiso (
    rolid integer,
    permisoid integer
);


ALTER TABLE public.rolpermiso OWNER TO postgres;

--
-- Name: permiso permisoid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso ALTER COLUMN permisoid SET DEFAULT nextval('public.permiso_permisoid_seq'::regclass);


--
-- Name: rol rolid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol ALTER COLUMN rolid SET DEFAULT nextval('public.rol_rolid_seq'::regclass);


--
-- Data for Name: permiso; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permiso (permisoid, nombre, descripcion) FROM stdin;
\.


--
-- Data for Name: rol; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rol (rolid, nombre, descripcion) FROM stdin;
\.


--
-- Data for Name: rolpermiso; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rolpermiso (rolid, permisoid) FROM stdin;
\.


--
-- Name: permiso_permisoid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permiso_permisoid_seq', 1, false);


--
-- Name: rol_rolid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rol_rolid_seq', 1, false);


--
-- Name: permiso permiso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso
    ADD CONSTRAINT permiso_pkey PRIMARY KEY (permisoid);


--
-- Name: rol rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (rolid);


--
-- Name: rolpermiso rolpermiso_permisoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rolpermiso
    ADD CONSTRAINT rolpermiso_permisoid_fkey FOREIGN KEY (permisoid) REFERENCES public.permiso(permisoid);


--
-- Name: rolpermiso rolpermiso_rolid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rolpermiso
    ADD CONSTRAINT rolpermiso_rolid_fkey FOREIGN KEY (rolid) REFERENCES public.rol(rolid);


--
-- PostgreSQL database dump complete
--

