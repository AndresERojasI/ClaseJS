import falcon
import json

from Framework.models import Perfil

class Perfiles(object):
    def on_get(self, request, response):
        """Handles all GET requests."""
        response.status = falcon.HTTP_200  # This is the default status
        response.body = ('Esto es la lista de perfiles')

    def on_post(self, request, response):
        """Handles all POST Responses"""
        if request.content_length:
            doc = json.load(request.stream)
            nuevoPerfil = Perfil.Perfil(doc['nombre'], doc['id'], doc['edad'])
            response.body = nuevoPerfil.toJson()

        response.status = falcon.HTTP_200  # This is the default status
