import sys


# print("BMC")
# print("Yeti")
# print("Kona")
# print("Trek")

print(sys.argv[1])

def sendBookInfo(book, bookcode):
    print("Book : ", book, "\nBook-code : ", bookcode)


if __name__ == '__main__':
    sendBookInfo(sys.argv[1], sys.argv[2])