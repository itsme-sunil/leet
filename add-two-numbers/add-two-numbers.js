/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 
 Strategy:
 Iterate through each linked list and turn it into a number. (use strings)
 Add the numbers and turn the resulting number into a string by reversing it.
 
 Iterate through the string and create a result linked list.
 */
var addTwoNumbers = function(l1, l2) {
    let list = new ListNode();
    let result = list;
    let sum;

    while (l1 || l2) {
        if (!l1) {
            l1 = new ListNode(0);
        } else if (!l2) {
            l2 = new ListNode(0);
        }
        let sum = l1.val + l2.val;
        if (sum > 9) {
            let carry = Math.floor(sum / 10);
            sum = sum % 10;
            if (!l1.next) {
                l1.next = new ListNode();
            }
            l1.next.val += carry;
        }

        l1 = l1.next;
        l2 = l2.next;
        list.val = sum;
        if (l1 || l2) {
            list.next = new ListNode();
            list = list.next;
        }
    }
    
    return result;
};