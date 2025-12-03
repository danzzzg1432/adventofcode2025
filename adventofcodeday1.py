# import sys

# count = 0
# dial = 50


# def fix_current_rotation(num):
    


# def rotate(direction):
#     global dial
#     if direction.startswith("L"):
#         dial -= int(direction[1:])
#         check(fix_current_rotation(dial))
#     else:
#         dial += int(direction[1:])
#         check(fix_current_rotation(dial))


# def check(num):
#     global count
#     if num == 0:
#         count += 1


# def main(input_text):
#     commands = input_text.strip().split('\n')
#     for command in commands:
#         rotate(command.strip())
#     print(count)


# if __name__ == "__main__":
#     with open('input.txt', 'r') as f:
#         input_lines = f.read()
#     main(input_lines)
