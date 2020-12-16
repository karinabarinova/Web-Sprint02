"use strict"

function total (addCount = 1, addPrice, currentTotal = 0) {
    if (Number.isFinite(addCount) && Number.isFinite(addPrice) 
    && Number.isFinite(currentTotal))
        return currentTotal += addCount * addPrice;
    if (currentTotal != 0)
        return currentTotal;
}