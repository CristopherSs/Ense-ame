PGDMP     4        
            w            DB    10.5    10.5 '               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    16499    DB    DATABASE     �   CREATE DATABASE "DB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Bolivia.1252' LC_CTYPE = 'Spanish_Bolivia.1252';
    DROP DATABASE "DB";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16521    Permiso    TABLE     �   CREATE TABLE public."Permiso" (
    "idPermiso" integer NOT NULL,
    nombre character varying,
    descripcion character varying
);
    DROP TABLE public."Permiso";
       public         postgres    false    3            �            1259    16519    Permiso_idPermiso_seq    SEQUENCE     �   CREATE SEQUENCE public."Permiso_idPermiso_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."Permiso_idPermiso_seq";
       public       postgres    false    3    200                        0    0    Permiso_idPermiso_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."Permiso_idPermiso_seq" OWNED BY public."Permiso"."idPermiso";
            public       postgres    false    199            �            1259    16510    Rol    TABLE     }   CREATE TABLE public."Rol" (
    "idRol" integer NOT NULL,
    nombre character varying,
    descripcion character varying
);
    DROP TABLE public."Rol";
       public         postgres    false    3            �            1259    16530    Rol_Permiso    TABLE     f   CREATE TABLE public."Rol_Permiso" (
    "idRol" integer NOT NULL,
    "idPermiso" integer NOT NULL
);
 !   DROP TABLE public."Rol_Permiso";
       public         postgres    false    3            �            1259    16508    Rol_idRol_seq    SEQUENCE     �   CREATE SEQUENCE public."Rol_idRol_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Rol_idRol_seq";
       public       postgres    false    198    3            !           0    0    Rol_idRol_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Rol_idRol_seq" OWNED BY public."Rol"."idRol";
            public       postgres    false    197            �            1259    16500    Usuario    TABLE     �   CREATE TABLE public."Usuario" (
    ci integer NOT NULL,
    "nombreCompleto" character varying,
    email character varying,
    "nombreUsuario" character varying NOT NULL,
    password character varying
);
    DROP TABLE public."Usuario";
       public         postgres    false    3            �            1259    16547    Usuario_Rol    TABLE     �   CREATE TABLE public."Usuario_Rol" (
    ci integer NOT NULL,
    "nombreUsuario" character varying NOT NULL,
    "idRol" integer NOT NULL
);
 !   DROP TABLE public."Usuario_Rol";
       public         postgres    false    3            �
           2604    16524    Permiso idPermiso    DEFAULT     |   ALTER TABLE ONLY public."Permiso" ALTER COLUMN "idPermiso" SET DEFAULT nextval('public."Permiso_idPermiso_seq"'::regclass);
 D   ALTER TABLE public."Permiso" ALTER COLUMN "idPermiso" DROP DEFAULT;
       public       postgres    false    200    199    200            �
           2604    16513 	   Rol idRol    DEFAULT     l   ALTER TABLE ONLY public."Rol" ALTER COLUMN "idRol" SET DEFAULT nextval('public."Rol_idRol_seq"'::regclass);
 <   ALTER TABLE public."Rol" ALTER COLUMN "idRol" DROP DEFAULT;
       public       postgres    false    197    198    198                      0    16521    Permiso 
   TABLE DATA               E   COPY public."Permiso" ("idPermiso", nombre, descripcion) FROM stdin;
    public       postgres    false    200   �(                 0    16510    Rol 
   TABLE DATA               =   COPY public."Rol" ("idRol", nombre, descripcion) FROM stdin;
    public       postgres    false    198   �(                 0    16530    Rol_Permiso 
   TABLE DATA               =   COPY public."Rol_Permiso" ("idRol", "idPermiso") FROM stdin;
    public       postgres    false    201    )                 0    16500    Usuario 
   TABLE DATA               [   COPY public."Usuario" (ci, "nombreCompleto", email, "nombreUsuario", password) FROM stdin;
    public       postgres    false    196   )                 0    16547    Usuario_Rol 
   TABLE DATA               E   COPY public."Usuario_Rol" (ci, "nombreUsuario", "idRol") FROM stdin;
    public       postgres    false    202   :)       "           0    0    Permiso_idPermiso_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."Permiso_idPermiso_seq"', 1, false);
            public       postgres    false    199            #           0    0    Rol_idRol_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Rol_idRol_seq"', 1, false);
            public       postgres    false    197            �
           2606    16529    Permiso Permiso_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public."Permiso"
    ADD CONSTRAINT "Permiso_pkey" PRIMARY KEY ("idPermiso");
 B   ALTER TABLE ONLY public."Permiso" DROP CONSTRAINT "Permiso_pkey";
       public         postgres    false    200            �
           2606    16534    Rol_Permiso Rol_Permiso_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."Rol_Permiso"
    ADD CONSTRAINT "Rol_Permiso_pkey" PRIMARY KEY ("idRol", "idPermiso");
 J   ALTER TABLE ONLY public."Rol_Permiso" DROP CONSTRAINT "Rol_Permiso_pkey";
       public         postgres    false    201    201            �
           2606    16518    Rol Rol_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public."Rol"
    ADD CONSTRAINT "Rol_pkey" PRIMARY KEY ("idRol");
 :   ALTER TABLE ONLY public."Rol" DROP CONSTRAINT "Rol_pkey";
       public         postgres    false    198            �
           2606    16554    Usuario_Rol Usuario_Rol_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."Usuario_Rol"
    ADD CONSTRAINT "Usuario_Rol_pkey" PRIMARY KEY (ci, "nombreUsuario", "idRol");
 J   ALTER TABLE ONLY public."Usuario_Rol" DROP CONSTRAINT "Usuario_Rol_pkey";
       public         postgres    false    202    202    202            �
           2606    16507    Usuario Usuario_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY (ci, "nombreUsuario");
 B   ALTER TABLE ONLY public."Usuario" DROP CONSTRAINT "Usuario_pkey";
       public         postgres    false    196    196            �
           1259    16566 
   fki_Rol_fk    INDEX     I   CREATE INDEX "fki_Rol_fk" ON public."Usuario_Rol" USING btree ("idRol");
     DROP INDEX public."fki_Rol_fk";
       public         postgres    false    202            �
           1259    16560    fki_Usuario_fk    INDEX     Y   CREATE INDEX "fki_Usuario_fk" ON public."Usuario_Rol" USING btree (ci, "nombreUsuario");
 $   DROP INDEX public."fki_Usuario_fk";
       public         postgres    false    202    202            �
           1259    16546    fki_idPermiso_fk    INDEX     S   CREATE INDEX "fki_idPermiso_fk" ON public."Rol_Permiso" USING btree ("idPermiso");
 &   DROP INDEX public."fki_idPermiso_fk";
       public         postgres    false    201            �
           1259    16540    fki_idRol_fk    INDEX     K   CREATE INDEX "fki_idRol_fk" ON public."Rol_Permiso" USING btree ("idRol");
 "   DROP INDEX public."fki_idRol_fk";
       public         postgres    false    201            �
           2606    16561    Usuario_Rol Rol_fk    FK CONSTRAINT     z   ALTER TABLE ONLY public."Usuario_Rol"
    ADD CONSTRAINT "Rol_fk" FOREIGN KEY ("idRol") REFERENCES public."Rol"("idRol");
 @   ALTER TABLE ONLY public."Usuario_Rol" DROP CONSTRAINT "Rol_fk";
       public       postgres    false    198    2697    202            �
           2606    16555    Usuario_Rol Usuario_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public."Usuario_Rol"
    ADD CONSTRAINT "Usuario_fk" FOREIGN KEY (ci, "nombreUsuario") REFERENCES public."Usuario"(ci, "nombreUsuario");
 D   ALTER TABLE ONLY public."Usuario_Rol" DROP CONSTRAINT "Usuario_fk";
       public       postgres    false    196    2695    196    202    202            �
           2606    16541    Rol_Permiso idPermiso_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public."Rol_Permiso"
    ADD CONSTRAINT "idPermiso_fk" FOREIGN KEY ("idPermiso") REFERENCES public."Permiso"("idPermiso");
 F   ALTER TABLE ONLY public."Rol_Permiso" DROP CONSTRAINT "idPermiso_fk";
       public       postgres    false    200    2699    201            �
           2606    16535    Rol_Permiso idRol_fk    FK CONSTRAINT     |   ALTER TABLE ONLY public."Rol_Permiso"
    ADD CONSTRAINT "idRol_fk" FOREIGN KEY ("idRol") REFERENCES public."Rol"("idRol");
 B   ALTER TABLE ONLY public."Rol_Permiso" DROP CONSTRAINT "idRol_fk";
       public       postgres    false    201    2697    198                  x������ � �            x������ � �            x������ � �            x������ � �            x������ � �     