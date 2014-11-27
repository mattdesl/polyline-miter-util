var vec = {
    add: require('gl-vec2/add'),
    set: require('gl-vec2/set'),
    normalize: require('gl-vec2/normalize'),
    subtract: require('gl-vec2/subtract')
}

var tmp = [0, 0]

module.exports.computeMiter = function computeMiter(tangent, miter, lineA, lineB, halfThick) {
    //get tangent line
    vec.add(tangent, lineA, lineB)
    vec.normalize(tangent, tangent)

    //get miter as a unit vector
    vec.set(miter, -tangent[1], tangent[0])
    vec.set(tmp, -lineA[1], lineA[0])

    //get the necessary length of our miter
    return halfThick / vec.dot(miter, tmp)
}

module.exports.normal = function normal(out, dir) {
    //get perpendicular
    vec.set(out, -dir[1], dir[0])
    return out
}

module.exports.direction = function direction(out, a, b) {
    //get unit dir of two lines
    vec.subtract(out, a, b)
    vec.normalize(out, out)
    return out
}