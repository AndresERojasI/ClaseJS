#------------------ Output: ------------------#
print('This sentence is output to the screen')
# Output: This sentence is output to the screen

a = 5

# print(*args, separator, end, file, XXX)

print('The value of a is', a, True, 4.2)
# Output: The value of a is 5

print(1,2,3,4)
# Output: 1 2 3 4

print(1,2,3,4,sep='*')
# Output: 1*2*3*4

print(1,2,3,4,sep='\n',end='&')
# Output:
# 1
# 2
# 3
# 4&

print('I love {0} and {1}'.format('bread','butter'))
# Output: I love bread and butter

print('I love {1} and {0}'.format('bread','butter', True))
# Output: I love butter and bread

# ------------------ Input: ------------------#
num = float(input('Enter a number: '))
num = int(num) * 5

# num type String

#$> Enter a number:
#$> 5 #enter
