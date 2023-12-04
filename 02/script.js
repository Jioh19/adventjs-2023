function manufacture(gifts, materials) {
    var result = gifts.slice(0);
    for (var i = gifts.length - 1; i >= 0; i--) {
        for (var _i = 0, _a = gifts[i]; _i < _a.length; _i++) {
            var letter = _a[_i];
            if (!materials.includes(letter))
                result.splice(i, 1);
        }
    }
    // gifts.forEach((gift) => {
    //   let found: boolean = true;
    //   for (const letter of gift) {
    //     if (!materials.includes(letter)) found = false;
    //   }
    //   (found)? result.push(gift): null;
    // })
    return gifts;
}
console.log(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb'));
