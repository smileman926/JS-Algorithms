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
var mergeTwoLists = function(l1, l2) {
    const head = new ListNode(0);
    let current = head; 
    while( l1 != null && l2 != null)
        {
            while( l1!=null && l1.val <= l2.val)
            {
                current.next = l1;
                l1 = l1.next;
                current = current.next;
                
            }   
            while ( l1!= null && l2 != null && l1.val > l2.val)
            {
                current.next = l2;
                l2 = l2.next;
                current = current.next;
            }
        }
    current.next = l2 || l1;
    return head.next;
};