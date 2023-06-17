class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  const dummy = new ListNode();
  let curr = dummy;
  let carry = 0;

  while (l1 || l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const total = x + y + carry;
    carry = Math.floor(total / 10);
    curr.next = new ListNode(total % 10);
    curr = curr.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
};
