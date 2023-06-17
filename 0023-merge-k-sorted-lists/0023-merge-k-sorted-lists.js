/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    while (lists.length > 1) {
        let newList = [];
        for (let i = 0; i < lists.length; i += 2) {
            if (i + 1 === lists.length) {
                newList.push(lists[i]);
            } else {
                newList.push(mergeTwoLists(lists[i], lists[i + 1]));
            }
        }
        lists = newList;
    }
    return lists[0];
};


var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let tail = dummyHead;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    
    if (l1 !== null) {
        tail.next = l1;
    } else if (l2 !== null) {
        tail.next = l2;
    }
    
    return dummyHead.next;
};