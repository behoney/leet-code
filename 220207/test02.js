let result = [];

// [ 3]
function reverse(list) {
    // 해당 부분을 구현하세요.
    if (is_empty(list)) return result;
    // 3     [2, 1]               =>  [3, 2, 1]
    result = concat(head(list), result,);

    //         []
    reverse(tail(list));
}

reverse([1, 2, 3, 4, 5]) // [5, 4, 3, 2, 1] 리턴