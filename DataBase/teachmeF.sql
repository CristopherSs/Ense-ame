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

--
-- Name: eliminarpermiso(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.eliminarpermiso(idpermisoe integer) RETURNS integer
    LANGUAGE plpgsql
    AS $$
Begin
	---guarda el permiso en la tabla---
	DELETE FROM public."Permiso" WHERE "idPermiso" = idPermisoE;
	return idPermisoE;
End;
$$;


ALTER FUNCTION public.eliminarpermiso(idpermisoe integer) OWNER TO postgres;

--
-- Name: eliminarrol(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.eliminarrol(idrol integer) RETURNS integer
    LANGUAGE plpgsql
    AS $$Begin
	---guarda el permiso en la tabla---
	
	DELETE FROM public."Rol_Permiso" WHERE "idRol" = idRol;
	DELETE FROM public."Rol" WHERE "idRol" = idRol;
	return idRol;
End;
$$;


ALTER FUNCTION public.eliminarrol(idrol integer) OWNER TO postgres;

--
-- Name: eliminarusuario(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.eliminarusuario(ci integer) RETURNS integer
    LANGUAGE plpgsql
    AS $$
Begin
	---guarda el permiso en la tabla---
	DELETE FROM public."Usuario" WHERE "idCi" = ci;
	return ci;
End;
$$;


ALTER FUNCTION public.eliminarusuario(ci integer) OWNER TO postgres;

--
-- Name: guardarpermiso(character varying, character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.guardarpermiso(nombre character varying, descripcion character varying) RETURNS integer
    LANGUAGE plpgsql
    AS $$
Begin
	---guarda el permiso en la tabla---
	INSERT INTO "Permiso" (nombre,descripcion)VALUES (nombre,descripcion);
	return (SELECT MAX("idPermiso") from "Permiso" );
End;
$$;


ALTER FUNCTION public.guardarpermiso(nombre character varying, descripcion character varying) OWNER TO postgres;

--
-- Name: guardarrol(character varying, character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.guardarrol(nombre character varying, descripcion character varying) RETURNS integer
    LANGUAGE plpgsql
    AS $$
Begin
	---guarda el permiso en la tabla---
	INSERT INTO "Rol" (nombre,descripcion)VALUES (nombre,descripcion);
	return (SELECT MAX("idRol") from "Rol" );
End;
$$;


ALTER FUNCTION public.guardarrol(nombre character varying, descripcion character varying) OWNER TO postgres;

--
-- Name: guardarrolpermiso(integer, integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.guardarrolpermiso(idrol integer, idpermiso integer) RETURNS SETOF boolean
    LANGUAGE plpgsql
    AS $$
Begin
	INSERT INTO "Rol_Permiso" VALUES (idRol,idPermiso);
	return next true;
End;
$$;


ALTER FUNCTION public.guardarrolpermiso(idrol integer, idpermiso integer) OWNER TO postgres;

--
-- Name: guardarusuario(integer, character varying, character varying, character varying, character varying, integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.guardarusuario(ci integer, nombrecompleto character varying, email character varying, apodo character varying, "contraseña" character varying, idrol integer) RETURNS integer
    LANGUAGE plpgsql
    AS $$
Begin
	INSERT INTO "Usuario" VALUES (ci,nombreCompleto,email,apodo,contraseña,idRol);
	return ci;
End;
$$;


ALTER FUNCTION public.guardarusuario(ci integer, nombrecompleto character varying, email character varying, apodo character varying, "contraseña" character varying, idrol integer) OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Permiso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Permiso" (
    "idPermiso" integer NOT NULL,
    nombre character varying,
    descripcion character varying
);


ALTER TABLE public."Permiso" OWNER TO postgres;

--
-- Name: obtenerpermiso(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.obtenerpermiso(idpermiso integer) RETURNS SETOF public."Permiso"
    LANGUAGE plpgsql
    AS $$
declare
permiso RECORD;
Begin
	---devuelve todos los datos de la tabla Permiso---
	for PERMISO in Select * from "Permiso" where "idPermiso" = idPermiso loop
		return next permiso ;
	end loop;
End
$$;


ALTER FUNCTION public.obtenerpermiso(idpermiso integer) OWNER TO postgres;

--
-- Name: obtenerrol(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.obtenerrol(idrol integer) RETURNS SETOF public."Permiso"
    LANGUAGE plpgsql
    AS $$
declare
rol RECORD;
Begin
	---devuelve todos los datos de la tabla Permiso---
	for ROL in Select * from "Rol" where "idRol" = idRol loop
		return next rol ;
	end loop;
End
$$;


ALTER FUNCTION public.obtenerrol(idrol integer) OWNER TO postgres;

--
-- Name: obtenertodopermisorol(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.obtenertodopermisorol(idrol integer) RETURNS SETOF integer
    LANGUAGE plpgsql
    AS $$
declare
id_permiso integer;
Begin
	for ID_PERMISO in Select "idPermiso" from "Rol_Permiso" where "idRol"=idRol loop
		return next id_permiso ;
	end loop;
End;
$$;


ALTER FUNCTION public.obtenertodopermisorol(idrol integer) OWNER TO postgres;

--
-- Name: obtenertodopermisos(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.obtenertodopermisos() RETURNS SETOF public."Permiso"
    LANGUAGE plpgsql
    AS $$
declare
permiso RECORD;
Begin
	---devuelve todos los datos de la tabla Permiso---
	for PERMISO in Select * from "Permiso" loop
		return next permiso ;
	end loop;
End
$$;


ALTER FUNCTION public.obtenertodopermisos() OWNER TO postgres;

--
-- Name: Rol; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Rol" (
    "idRol" integer NOT NULL,
    nombre character varying,
    descripcion character varying
);


ALTER TABLE public."Rol" OWNER TO postgres;

--
-- Name: obtenertodorol(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.obtenertodorol() RETURNS SETOF public."Rol"
    LANGUAGE plpgsql
    AS $$
declare
rol RECORD;
Begin
	for ROL in Select * from "Rol" loop
		return next rol ;
	end loop;
End;
$$;


ALTER FUNCTION public.obtenertodorol() OWNER TO postgres;

--
-- Name: Usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Usuario" (
    "idCi" integer NOT NULL,
    "nombreCompleto" character varying,
    email character varying,
    "nombreUsuario" character varying NOT NULL,
    "contraseña" character varying,
    "idRol" integer NOT NULL
);


ALTER TABLE public."Usuario" OWNER TO postgres;

--
-- Name: obtenertodousuario(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.obtenertodousuario() RETURNS SETOF public."Usuario"
    LANGUAGE plpgsql
    AS $$
declare
usuario RECORD;
Begin
	for Usuario in Select * from "Usuario" loop
		return next usuario ;
	end loop;
End;
$$;


ALTER FUNCTION public.obtenertodousuario() OWNER TO postgres;

--
-- Name: obtenerusuario(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.obtenerusuario(ci integer) RETURNS SETOF public."Usuario"
    LANGUAGE plpgsql
    AS $$
declare
rol RECORD;
Begin
	for ROL in Select * from "Usuario" where "idCi" = ci loop
		return next rol ;
	end loop;
End
$$;


ALTER FUNCTION public.obtenerusuario(ci integer) OWNER TO postgres;

--
-- Name: Permiso_idPermiso_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Permiso_idPermiso_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Permiso_idPermiso_seq" OWNER TO postgres;

--
-- Name: Permiso_idPermiso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Permiso_idPermiso_seq" OWNED BY public."Permiso"."idPermiso";


--
-- Name: Rol_Permiso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Rol_Permiso" (
    "idRol" integer NOT NULL,
    "idPermiso" integer NOT NULL
);


ALTER TABLE public."Rol_Permiso" OWNER TO postgres;

--
-- Name: Rol_idRol_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Rol_idRol_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Rol_idRol_seq" OWNER TO postgres;

--
-- Name: Rol_idRol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Rol_idRol_seq" OWNED BY public."Rol"."idRol";


--
-- Name: Permiso idPermiso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Permiso" ALTER COLUMN "idPermiso" SET DEFAULT nextval('public."Permiso_idPermiso_seq"'::regclass);


--
-- Name: Rol idRol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol" ALTER COLUMN "idRol" SET DEFAULT nextval('public."Rol_idRol_seq"'::regclass);


--
-- Data for Name: Permiso; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Permiso" ("idPermiso", nombre, descripcion) FROM stdin;
43	Decano	No estoy muy seguro que hace
\.


--
-- Data for Name: Rol; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Rol" ("idRol", nombre, descripcion) FROM stdin;
14	rol1	rol1
\.


--
-- Data for Name: Rol_Permiso; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Rol_Permiso" ("idRol", "idPermiso") FROM stdin;
14	43
\.


--
-- Data for Name: Usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Usuario" ("idCi", "nombreCompleto", email, "nombreUsuario", "contraseña", "idRol") FROM stdin;
13					14
123					14
\.


--
-- Name: Permiso_idPermiso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Permiso_idPermiso_seq"', 43, true);


--
-- Name: Rol_idRol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Rol_idRol_seq"', 14, true);


--
-- Name: Permiso Permiso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Permiso"
    ADD CONSTRAINT "Permiso_pkey" PRIMARY KEY ("idPermiso");


--
-- Name: Rol_Permiso Rol_Permiso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol_Permiso"
    ADD CONSTRAINT "Rol_Permiso_pkey" PRIMARY KEY ("idRol", "idPermiso");


--
-- Name: Rol Rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol"
    ADD CONSTRAINT "Rol_pkey" PRIMARY KEY ("idRol");


--
-- Name: Usuario Usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idCi", "nombreUsuario");


--
-- Name: fki_idPermiso_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "fki_idPermiso_fk" ON public."Rol_Permiso" USING btree ("idPermiso");


--
-- Name: fki_idRol_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "fki_idRol_fk" ON public."Rol_Permiso" USING btree ("idRol");


--
-- Name: Usuario Usuario_idRol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_idRol_fkey" FOREIGN KEY ("idRol") REFERENCES public."Rol"("idRol");


--
-- Name: Rol_Permiso idPermiso_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol_Permiso"
    ADD CONSTRAINT "idPermiso_fk" FOREIGN KEY ("idPermiso") REFERENCES public."Permiso"("idPermiso");


--
-- Name: Rol_Permiso idRol_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rol_Permiso"
    ADD CONSTRAINT "idRol_fk" FOREIGN KEY ("idRol") REFERENCES public."Rol"("idRol");


--
-- PostgreSQL database dump complete
--

