"use strict";

// TODO DATA TYPES
var myName;

// Primitive Data Types
var undefined = "unassigned variables have this value and type"
var dtNull = "a special keyword denoting a lack of a value"
var boolean = true/false;
var string = "";
var symbol = "cannot be changed and are unique. can be a key in an object";
var bigint = "afely store and operate on large integers even beyond the safe integer limit for Numbers.";
var number = 123;
var object = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// TODO Which Type?

//     A term or phrase typed into a search box? - string
//     If a user is logged in?- boolean
//     A discount amount to apply to a user's shopping cart? - number
//     Whether or not a coupon code is valid? - boolean
//     An email address typed into a registration form? string
//     The price of a product? number

// TODO OPERATORS - Console
//  Typeof
//      is a special operator that will produce a string that
//      contains the type of the operand it is used on.

// typeof 42 = "number"

// TODO Math Operators
//  +	addition
//  -	subtraction
//   *	multiplication
//  /	division
//  % modulus - produces the remainder of 2 numbers divided


// TODO String Concatenation
//     + - overloaded operator meaning it depends on it operands
//     (how it's used because it's also addition sign

// TODO Boolean
//  &&	- AND - True if both operands are true, false otherwise
//  || - OR - True if either operand is true, false otherwise
//  ! - NOT - The opposite

//  TODO AND
//      Expression	        Result
//      true && true	    true
//      true && false	    false
//      false && true	    false
//      false && false	    false

// TODO OR
//  Expression	        Result
//  true || true	    true
//  true || false	    true
//  false || true	    true
//  false || false	    false

// TODO NOT
//  Expression	    Result
//  !true	        false
//  !false	        true

// Note that && has a higher precedence in the order of operations than || does. Like the arithmetic operations, logical operations can be grouped with parentheses:
//
// false && false || true // true
// false && (false || true) // false

// TODO COMPARISON
//  ==	Equal in value
//  ===	Equal in type and value
//  !=	Not equal in value
//  !==	Not equal in type and value

// TODO Examples of Comparison
//  True	        False
//  4 == '4'	    4 == 5
//  4 === 4	        4 === '4'
//  4 != 5	        4 != '4'
//  4 !== '4'	    4 !== 4

// The difference between == and === is sometimes called loose vs strict comparison.
//     The string "4" and the number 4 are loosely equal, because they both
// have a value of four, but are not strictly equal, because they have different types.
//
//
// TODO Comparison with Number Operands
//      Operator	    Description
//          >	        greater than
//          >=	        greater than or equal to
//          <	        less than
//          <=      	less than or equal to


// TODO Operator Practice in Console
//     '1' + 2
//     typeof '1' + 2
//     6 % 4
//     '3 + 4 is ' + 3 + 4
//     // how could you make this produce the correct output?
//     0 < 0
//     'false' == false
//     true == 'true'
//     5 >= -5
//     !false || false
//     true || "42"
//     !true && !false
//     6 % 5
//     5 < 4 && 1 === 1
//     typeof 'codeup' === 'string'
//     'codeup' === 'codeup' && 'codeup' === 'Codeup'
//     4 >= 0 && 1 !== '1'
//     6 % 3 === 0
//     5 % 2 !== 0