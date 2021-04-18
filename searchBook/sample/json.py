import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

def sendBookInfo(book, bookcode):

    #1
    print(book)
    print(bookcode)
    print("FixedVALUE")
    

    #2
    print(book,"\n",bookcode, "\n","space")
    # for i in range(3):
    #     i += 10;
    #     # print(book, bookcode)
    #     print(book, bookcode, i, "FixedVALUE")


if __name__ == '__main__':
    sendBookInfo(sys.argv[1], sys.argv[2])