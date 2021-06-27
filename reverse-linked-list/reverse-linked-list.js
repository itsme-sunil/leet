/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // placeholder current assign to head
    let current = head;
    // placeholder prev
    let prev = null;
    
    // while current
    while (current) {
        // assign temp to current.next
        const temp = current.next
        // assign current.next to prev
        current.next = prev;
        // assign prev to current
        prev = current;
        // assign current to temp        
        current = temp;
    }

    // return prev    
    return prev;
};