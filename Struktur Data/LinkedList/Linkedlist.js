const n1 = {
    data: 100
}

const n2 ={
    data: 200
}

//.next di bawah ini artinya n1 mengambil objek dari n2 menjadi data miliknya dengan object index dan value n2
n1.next = n2

// console.log(n1)

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }
    //insertfirst Linkedlist
    insertNode(data){
        this.head = new Node(data, this.head)
    }

    //insertlastNode
    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node;
        }
    }

    //print list Data
    printData(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const linkedlist = new LinkedList();


linkedlist.insertNode(100)
linkedlist.insertNode(50)
linkedlist.insertNode(10)
linkedlist.insertNode(1000)

console.log(linkedlist)