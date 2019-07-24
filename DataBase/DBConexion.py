import json
import psycopg2


class DB:

    def __init__(self) -> None:
        with open('./config.json') as file:
            data = json.load(file)
        self.__connstr = "host=%s port=%s user=%s password=%s dbname=%s" % (
            data["host"], data["port"], data["user"], data["password"], data["database"])

    def llamar_sp(self, store_procedure_name: str, values) -> bool:
        self.__conn = psycopg2.connect(self.__connstr)
        self.__cur = self.__conn.cursor()
        self.__cur.callproc(store_procedure_name, values)
        try:
            row = self.__cur.fetchall()
        except psycopg2.ProgrammingError:
            row = None
        finally:
            self.__cur.close()
            self.__conn.close()
        return row
