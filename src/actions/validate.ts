export const validIsEmpty = (s: string) => {
    return s.length ? '' : 'This field in required'
}

export const validIsNumber = (s: string) => {
    const reg = /^380\d{9}$/g
    return reg.test(s) ? '' : 'Should contain 12 characters'
}
