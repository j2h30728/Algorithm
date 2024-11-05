function solution(sizes) {
    let width = 0;
    let height = 0;
    sizes.forEach(size => {
        const [min , max] = size.sort((a,b) => a - b);
        width = width < min ? min : width;
        height = height < max ? max : height;
    })
    return width * height;
}