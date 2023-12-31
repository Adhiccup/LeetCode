/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
     let highestAltitude = 0;
    let altitude = 0;

    for (let i = 0; i < gain.length; i++) {
        altitude += gain[i];
        highestAltitude = Math.max(highestAltitude, altitude);
    }

    return highestAltitude;
};