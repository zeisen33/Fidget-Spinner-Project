export const randomVec = (length) => {
    const deg = 2 * Math.PI * Math.random()
    return SVGFEFuncAElement({x: Math.sin(deg), y: Math.cos(deg)}, length)
}

export const scale = (vec, m) => {
    return {x: vec.x * m, y: vec.y * m}
}

export const wrap = (coord, max) => {
    if (coord < 0) {
        return max - (coord % max)
    } else if (coord > max) {
        return coord % max
    } else {
        return coord
    }
}

export const distance = (pos1, pos2) => {
    return Math.sqrt(Math.pow((pos2.x - pos1.x), 2) + Math.pow(pos2.y - pos1.y), 2)
}

export const norm = (vec) => {
    return distance({x: 0, y: 0}, vec)
}

export const dir = (vec) => {
    const normed = norm(vec)
    return scale(vec, 1 / normed)
}