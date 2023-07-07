var maxConsecutiveAnswers = function(answerKey, k) {
    let i = 0;
    let j = 0;
    const n = answerKey.length;
    let t = 0;
    let f = 0;
    let rs = 0;
    while(j < n) {
        
        if(answerKey[j] === 'T') t++;
        else f++;
        
        /*
            we can consider a substring of either 'T's or 'F's
            so either 'T's count should be <= k 
                    or 
            'F's count should be <= k.
        */
        if(t <= k || f <= k) {
            rs = Math.max(rs, t + f);
        }
        /*
            if count of both 'T' && 'F' becomes greater than k, we have to decrease the window length
            bcz we can perform atmost k flip for any of the 'T's or 'F's.
        */
        while(t > k && f > k) {
            if(answerKey[i] === 'T') t--;
            else f--;
            i++;
        }
        j++;
    }
    return rs;
};