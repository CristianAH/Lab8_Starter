// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber
test('checks (858) 534-2230 is a valid phone number.', ()=> {
    expect(functions.isPhoneNumber('(858) 534-2230')).toBe(true);
});
test('checks (760) 744-1150 is a valid phone number.', ()=> {
    expect(functions.isPhoneNumber('(760) 744-1150')).toBe(true);
});
test('checks empty string is not a valid phone', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
});
test('checks 110 is not a valid phone', () => {
    expect(functions.isPhoneNumber('110')).toBe(false);
});

//isEmail
test('checks servicedesk@ucsd.edu is a valid email', () =>{
    expect(functions.isEmail('servicedesk@ucsd.edu')).toBe(true);
});
test('checks cantoniohernandez@ucsd.edu is a valid email', () =>{
    expect(functions.isEmail('cantoniohernandez@ucsd.edu')).toBe(true);
});
test('checks empty string is not a valid email', () =>{
    expect(functions.isEmail('')).toBe(false);
});
test('checks www@http.google is not a valid email', () =>{
    expect(functions.isEmail('www@http.google')).toBe(false);
});

//isStrongPassword
test('checks weBb63M92 is a strong password', () =>{
    expect(functions.isStrongPassword('weBb63M92')).toBe(true);
});
test('checks password110 is a strong password', () =>{
    expect(functions.isStrongPassword('password110')).toBe(true);
});
test('checks empty string is not a strong password', () =>{
    expect(functions.isStrongPassword('')).toBe(false);
});
test('checks 123 is not a strong password', () =>{
    expect(functions.isStrongPassword('123')).toBe(false);
});

//isDate
test('check 11/20/2022 is a valid date', () =>{
    expect(functions.isDate('11/20/2022')).toBe(true);
});
test('check 12/25/2022 is a valid date', () =>{
    expect(functions.isDate('12/25/2022')).toBe(true);
});
test('checks nov 20 2022 is not a valid date', () =>{
    expect(functions.isDate('nov 20 2022')).toBe(false);
});
test('checks empty string is not a valid date', () =>{
    expect(functions.isDate('')).toBe(false);
});

//isHexColor
test('checks EAECEE is a valid character hex code', () =>{
    expect(functions.isHexColor('EAECEE')).toBe(true);
});
test('checks 255 is a valid character hex code', () =>{
    expect(functions.isHexColor('255')).toBe(true);
});
test('checks CSE110L is not a valid character hex code', () =>{
    expect(functions.isHexColor('CSE110L')).toBe(false);
});
test('checks empty string is not a valid character hex code', () =>{
    expect(functions.isHexColor('')).toBe(false);
});