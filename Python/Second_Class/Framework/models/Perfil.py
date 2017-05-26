import json

class Perfil(object):
    def __init__(self, nombre, id, edad):
        self.nombre = nombre
        self.edad = edad
        self.id = id

    def toJson(self):
        return json.dumps({"id": self.id, "nombre": self.nombre, "edad": self.edad}, encoding='utf-8')