const { z } = require("zod");

const singupSchema = z.object({
    EmoplyeID: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(4, {message: "employe id must be at least 4 character"})
    .max(7,{message: "employe id must not be more then 7 chaarcter"}),

    EmployeName: z
    .string({ required_error: "Name is required"}),

    Department: z
    .string({ required_error: "Department is required"}),

    Desigantion: z
    .string({ required_error: "Designation is required"}),

    Email: z
    .string({ required_error: "Name is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3, {message: "Email must be at least of 3 character"})
    .max(255, {message: "email mus be not alt least of 255 character"}),

    password: z
    .string({ required_error: "Password is required"})
    .min(7, {message: "password must be at least of 6 character"})
    .max(1024, {message: "password can not be grater then 1024 character"})
});

const singinSchema = z.object({
    Email: z
    .string({ required_error: "Name is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3, {message: "Email must be at least of 3 character"})
    .max(255, {message: "email mus be not alt least of 255 character"}),

    password: z
    .string({ required_error: "Password is required"})
    .min(7, {message: "password must be at least of 6 character"})
    .max(1024, {message: "password can not be grater then 1024 character"})
})

module.exports = {singupSchema, singinSchema};
