function combiner(obj1, obj2) {
    final = {}

    for (let key in obj2) {
        val2 = obj2[key];
        if (!obj1[key]) {
            obj1[key] = val2
        } else {
            (obj1[key] += val2)
        }
    }

    return final;
}
