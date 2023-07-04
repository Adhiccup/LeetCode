var findDuplicate = function(nums) {
    
    // start hopping from Node_#0
    let [slow, fast] = [0,0];
    
    // for locating start node of cycle
    let check = 0;
    
    // Step_#1
    // Cycle detection
    // Let slow jumper and fast jumper meet somewhere in the cycle
    
    while( true ){
        
        // slow jumpper hops 1 step, while fast jumpper hops two steps forward
        slow = nums[ slow ];
        fast = nums[ nums[ fast ] ];
        
        if( slow == fast ){
            break;
        }
    }
    
    // Step_#2
    // Locate the start node of cycle (i.e., the duplicate number)
    while( true ){
        
        slow = nums[ slow ];
        check = nums[ check ];
        
        if( slow == check ){
            break;
        }
    }
    
    return check;
    
};