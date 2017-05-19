#------------------ Arithmetic: ------------------#
x = 15
y = 4

# Output: x + y = 19
print('x + y =', x+y)

# Output: x - y = 11
print('x - y =', x-y)

# Output: x * y = 60
print('x * y =', x*y)

# Output: x / y = 3.75
print('x / y =', x/y)

# Output: x // y = 3
print('x // y =', x//y)

# Output: x ** y = 50625
print('x ** y =', x**y)


#------------------ Comparisons: ------------------#
x = 10
y = 12

# Output: x > y is False
print('x > y  is',x>y)

# Output: x < y is True
print('x < y  is',x<y)

# Output: x == y is False
print('x == y is',x==y)

# Output: x != y is True
print('x != y is',x!=y)

# Output: x >= y is False
print('x >= y is',x>=y)

# Output: x <= y is True
print('x <= y is',x<=y)


#------------------ Logical: ------------------#
x = True
y = False

# Output: x and y is False
print('x and y is', x and y)

# Output: x or y is True
print('x or y is', x or y)

# Output: not x is False
print('not x is', not x)

camilo = False

print(not camilo)# True


#------------------ Identity: ------------------#

# Is mira la posiciòn de memoria del dato

True is True

x1 = 5
y1 = 5

x2 = 'Hello'
y2 = 'Hello'

x3 = [1,2,3]
y3 = [1,2,3]

x3[2] = True

# Output: False
print(x1 is not y1)

# Output: True
print(x2 is y2)

# Output: False
print(x3 is y3)

if x1 is y1:
    print('They are the same')

type(x1)

isinstance(x1, type(y1))

#------------------ Membership: ------------------#
x = 'Hello world'
y = {1:'a',2:'b'}

# Output: True
print('H' in x)

# Output: True
print('hello' not in x)

# Output: True
print(1 in y)

# Output: False
print('a' in y)


#------------------ Assignment and Bitwise: ------------------#
# https://www.programiz.com/python-programming/operators