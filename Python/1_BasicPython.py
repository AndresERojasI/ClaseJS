#------------------ How to name Things: ------------------#
# Identifiers can be a combination of letters in lowercase (a to z) or uppercase (A to Z) or digits (0 to 9) or an
# underscore (_). Names like myClass, var_1 and print_this_to_screen, all are valid example.

test_variable = 1 # It is ok
camelCaseVars = True # it is ok
serial_var_11 = "hola mundo" # it is ok
11_serial_var = 1 # it is not ok (Cannot start with number)
finally = 1 # it is not ok (Finally is a reserved word)
$test_php_var = 1 # it is not ok (cannot have symbols like !, @, #, $, %)


#------------------ Statements and Multiline Statements: ------------------#

# this is a statement
a = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9

# Also equivalent to
b = 1 + 2 + 3 + \
    4 + 5 + 6 + \
    7 + 8 + 9

# Or even:
c = (1 + 2 + 3 +
    4 + 5 + 6 +
    7 + 8 + 9)

#------------------ Indentation: ------------------#

# Java, C# use {} to define blocks, python uses indentation:
for i in range(1,11):
    print(i)
    if i == 5:
        break

def sayHello():
    print('hola a todas')
    return "Hola mundo"

#------------------ Comments: ------------------#

X = 33 # This is a line comment

# this is also
# a multiline comment

"""This is a multiline comment as well,
dflkgdlkfgj
dfsg.ksdfgkldfjg
dslfkjglsdfkg
but with triple quotes"""

'''This is a multiline comment as well,
lkdjvlskajdfas
but with triple single quotes'''


#------------------ Docstring (Documentation String): ------------------#

def double(num):
    """Function to double the value. Receives a param, type int"""
    return 2*num

#Go to the python console and run: print(double.__doc__)


#------------------ Variable assignments: ------------------#

# Simple assignment
y = "Hello World"
a = 3.1
b = True

# Multiple assignment
a, b, c = 5, 3.2, "Hello" # a = 5, b = 3.2, c = "Hello"

x = y = z = "same" # x,y and z are equal to "same"


#------------------ Python Numbers: ------------------#
# there are more, check them out in https://www.programiz.com/python-programming/numbers

a = 5
print(a, "is of type", type(a)) # int

a = 2.0
print(a, "is of type", type(a)) # float

a = 1+2j
print(a, "is complex number?", isinstance(1+2j,complex)) # complex


#------------------ Lists: ------------------#
a = [1, 2.2, 'python', True, False]

# You can read information easily
a = [5,10,15,20,25,30,35,40]

# a[2] = 15
print("a[2] = ", a[2])

# a[0:3] = [5, 10, 15]
print("a[0:3] = ", a[0:3])

# a[5:] = [30, 35, 40]
print("a[5:] = ", a[5:])

a[5] = True


#------------------ Tuples: ------------------#
t = (5,'program', 1+3j)

# t[1] = 'program'
print("t[1] = ", t[1])

# t[0:3] = (5, 'program', (1+3j))
print("t[0:3] = ", t[0:5])

# Generates error
# Tuples are immutable
t[0] = 10 # This is going to fail, do not do this!!!


#------------------ Strings: ------------------#
s = "This is a string"
s = '''a multiline
that can be written in multiple
lines'''

# and strings can be treated as tuples
s = 'Hello world!'

# s[4] = 'o'
print("s[4] = ", s[4])

# s[6:11] = 'world'
print("s[6:11] = ", s[6:11])

# Generates error
# Strings are immutable in Python
s[5] ='d' # This is going to fail, do not do this!!


#------------------ Sets: ------------------#
#unordered lists, great for union, intersection, Difference, Symmetric Difference and others
a = {5,2,3,1,4}

# More operations with sets: https://www.programiz.com/python-programming/set

# printing set variable
print("a = ", a)

# All values must be unique
a = {1,2,2,3,3,3} # Python fixes it to {1, 2, 3}


#------------------ Dictionaries: ------------------#
d = {1:'value','key':2}

print(d['key']) # returns: 2

