const fillCups = (a) => {
    let res = 0;
    while (!valid(a)) {
        a.sort((x, y) => x - y);
        if (a[1] > 0) { // can make two color remove
            a[2]--;
            a[1]--;
            res++;
        } else { // only one color left
            res += a[2];
            break;
        }
    }
    return res;
};

const valid = (a) => a.every(x => x <= 0);