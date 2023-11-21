function solution(park, routes) {
    const maxH = park.length;
    const maxW = park[0].length;
    let [x, y] = calculateStart(park);
    const blocks = calculateBlock(park);

    for (const [direction, rawSteps] of routes.map(r => r.split(' '))) {
        const steps = parseInt(rawSteps);
        let newX = x, newY = y;

        switch (direction) {
            case "N": newX -= steps; break;
            case "S": newX += steps; break;
            case "W": newY -= steps; break;
            case "E": newY += steps; break;
        }

        if (isPathClear(x, y, newX, newY, maxW, maxH, blocks)) {
            x = newX;
            y = newY;
        }
    }

    return [x, y];
}

function isPathClear(x1, y1, x2, y2, maxW, maxH, blocks) {
    // 경계 확인
    if (x2 < 0 || x2 >= maxH || y2 < 0 || y2 >= maxW) {
        return false;
    }

    // 시작 지점에서 장애물 확인
    if (blocks.some(block => block[0] === x1 && block[1] === y1)) {
        return false;
    }

    // 이동 경로상의 장애물 확인
    const xStep = x2 > x1 ? 1 : -1;
    const yStep = y2 > y1 ? 1 : -1;

    let currentX = x1;
    let currentY = y1;

    while (currentX !== x2 || currentY !== y2) {
        if (currentX !== x2) {
            currentX += xStep;
            if (blocks.some(block => block[0] === currentX && block[1] === currentY)) {
                return false;
            }
        }
        if (currentY !== y2) {
            currentY += yStep;
            if (blocks.some(block => block[0] === currentX && block[1] === currentY)) {
                return false;
            }
        }
    }
    return true;
}
function calculateStart(park) {
    const index = park.join('').indexOf('S');
    const x = Math.floor(index / park[0].length);
    const y = index % park[0].length;
    return [x, y];
}

function calculateBlock(park) {
    const block = [];
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === "X") {
                block.push([i, j]);
            }
        }
    }
    return block;
}

function isBlocked(x, y, blocks) {
    return blocks.some(block => block[0] === x && block[1] === y);
}
