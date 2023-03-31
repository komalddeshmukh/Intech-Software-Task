// Simple Javascript program to find n'th node from end of linked list
/* Linked List node */
class Node {	
	constructor(d)
	{
		this.data = d;
		this.next = null;
	}
}
/* Function to get the nth node from the last of a
	linked list */
class LinkedList
{
	constructor(d){
	this.head = d;
	}
	
printNthFromLast(k)
{
    let front = this.head;
    let back = this.head;
 
        // Move front k positions forward
        for (let i = 1; i < k; i++) {
          if (front === null) {
            // Linked list is shorter than k elements
            return null;
          }
          front = front.next;
        }
        // Move both front and back pointers forward until front reaches the end
        while (front.next != null) {  
          front = front.next;
          back = back.next;
        }
      
        // back is pointing to the kth element from the end
        console.log(back.data);
      }
    
/* Inserts a new Node at front of the list. */
push(new_data)
{
	/* 1 & 2: Allocate the Node &
				Put in the data*/
	let new_node = new Node(new_data);

	/* 3. Make next of new Node as head */
	new_node.next = this.head;

	/* 4. Move the head to point to new Node */
	this.head = new_node;
}
}	
/*Driver program to test above methods */
	let llist = new LinkedList();
	llist.push(20);
	llist.push(4);
	llist.push(15);
	llist.push(35);
    llist.push(55);

	llist.printNthFromLast(3);
	

