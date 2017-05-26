import falcon

# Importamos todos los controladores
from controllers import Perfiles

# Create the Falcon application object
app = falcon.API()

# Add a route to serve the resource
app.add_route('/perfiles', Perfiles.Perfiles())
