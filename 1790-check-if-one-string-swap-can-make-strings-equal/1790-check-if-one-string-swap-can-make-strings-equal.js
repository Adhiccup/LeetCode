function areAlmostEqual(target, source) {
    if(target === source) {
        return true;
    }

    let mismatches = [];

    for (let i = 0; i < source.length; i++) {
        if(source[i] !== target[i]) {
            mismatches.push(i);
        }
    }

    if(mismatches.length !== 0 && mismatches.length !== 2) {
        return false;
    }

    return target[mismatches[0]] === source[mismatches[1]] && target[mismatches[1]] === source[mismatches[0]];
}