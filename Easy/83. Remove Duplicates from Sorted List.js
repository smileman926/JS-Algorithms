/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head == null)
        return null;
    var node = head;
    
    var temp = node.val;
    while(node.next != null)
        {
            while (node.next != null && temp == node.next.val )
            {
              
                        node.next = node.next.next;
                      
                       
            }
               
            if(node.next == null)
                {
                    return head;        
                }
               temp =node.next.val;
               node =node.next;
       
        }
    return head;
};