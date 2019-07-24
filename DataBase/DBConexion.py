import json
import psycopg2


class DB:

    def __init__(self) -> None:
        with open('./config.json') as file:
            data = json.load(file)
        self.__connstr = data

    def __executor_query(self, store_procedure_name: str) -> bool:
        self.__conn = psycopg2.connect(self.__connstr)
        self.__cur = self.__conn.cursor()
        self.__cur.execute(store_procedure_name)
        try:
            row = self.__cur.fetchone()
        except psycopg2.ProgrammingError:
            row = None
        finally:
            self.__conn.commit()
            self.__cur.close()
            self.__conn.close()
        return row
