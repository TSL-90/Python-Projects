"""A basic calculator program."""

print("Give me two numbers, and I'll help you calculate an answer.")
print("Enter 'q' to quit.")


# Function to perform addition
def add(a, b):
    return a + b


# Function to perform subtraction
def subtract(a, b):
    return a - b


# Function to perform multiplication
def multiply(a, b):
    return a * b


# Function to perform division
def divide(a, b):
    if b == 0:
        return "Error, can't divide by 0!"
    else:
        return a / b


# Function to capture user input
def calculator():
    while True:
        print("\nChoose an operation (+, -, *, /) or 'q' to quit: ")
        operation = input()

        if operation.lower() == 'q':
            break

        if operation not in ['+', '-', '*', '/']:
            print("Invalid operation!")
            continue

        try:
            number_1 = float(input("First number: "))
            number_2 = float(input("Second number: "))
        except ValueError:
            print("Invalid input, numbers only!")
            continue

        if operation == '+':
            print(f"{number_1} + {number_2} = {number_1 + number_2}")

        elif operation == '-':
            print(f"{number_1} - {number_2} = {number_1 - number_2}")

        elif operation == '*':
            print(f"{number_1} * {number_2} = {number_1 * number_2}")

        elif operation == '/':
            result = divide(number_1, number_2)
            print(f"{number_1} / {number_2} = {result}")


calculator()
