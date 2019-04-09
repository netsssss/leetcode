/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(0), c = 0;
    var cur = res;
    while(l1 || l2 || c) {
        c += (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        cur.next = new ListNode(c % 10);
        cur = cur.next
        c = c > 9
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    return res.next;
};