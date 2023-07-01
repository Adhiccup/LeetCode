/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    if(money < children){
        return -1;
    }
    if(children * 8 < money){
        return children - 1
    }
    let moneyLeft = money - children;
    let childrenBy8 = Math.floor(moneyLeft/7);
    let left = moneyLeft % 7;
    
    if(left === 3 && childrenBy8 > 0 && children - childrenBy8 === 1){
        childrenBy8--;
    }
    
    
    return childrenBy8;
};