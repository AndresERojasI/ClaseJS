def prime_numbers(init = 1, end = 1000, step = 1, arg = True):
    print(init)

prime_numbers(1, 1000, 1)
prime_numbers(step = 2)

def ingredientes(tipo = 'desayuno', *ingrediente):
    for item in ingrediente:
        print(item)

ingredientes('almuerzo', 'sal', 'huevo', 'arroz')
ingredientes('comida', 'sal', 'agua', 'papa', 'pollo')