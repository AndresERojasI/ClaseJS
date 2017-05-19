#------------------ For: ------------------#
# Program to find the sum of all numbers stored in a list

# List of numbers
numbers = [6, 5, 3, 8, 4, 2, 5, 4, 11]

# variable to store the sum
sum = 0

# iterate over the list
for val in numbers:
	sum = sum+val

# Output: The sum is 48
print("The sum is", sum)


# The range() function (range(start,stop,step size))
print(list(range(2, 20, 3)))

# For loop with else:
digits = [0, 1, 5]

for i in digits:
    print(i)
else:
    print("No items left.")


#------------------ While: ------------------#
# Program to add natural
# numbers upto
# sum = 1+2+3+...+n

# To take input from the user,
# n = int(input("Enter n: "))

n = 10

# initialize sum and counter
sum = 0
i = 1

while i <= n and 1 == 1:
    sum = sum + i
    i = i+1    # update counter

# print the sum
print("The sum is", sum)

# With else:

# Example to illustrate
# the use of else statement
# with the while loop

counter = 0

while counter < 3:
    print("Inside loop")
    counter = counter + 1
else:
    print("Inside else")


# Andres: talk about Pass https://www.programiz.com/python-programming/pass-statement