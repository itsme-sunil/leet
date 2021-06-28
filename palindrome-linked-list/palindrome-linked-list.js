/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 Strategy 
 Create data array
 while head is not null
 push value.toString() to data array
 reassign head to head.next
 
 return data.join === palindrome function
 */
var isPalindrome = function(head) {
    let data = [];
    
    while (head !== null) {
        data.push(head.val);
        head = head.next;
    }
    
    return data.join('') === data.reverse().join('');
};