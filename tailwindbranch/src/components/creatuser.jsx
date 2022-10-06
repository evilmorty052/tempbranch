// src/pages/api/todo.js

import { client } from "../../lib/client";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      //this JSON arrives as a string,
      //so we turn it into a JS object with JSON.parse()
      const newTodo = await JSON.parse(req.body);
      //then use the Sanity client to create a new todo doc
      try {
        await client
          .create({
            _type: "users",
            email: null,
            Password: false,
            firstname: new Date().toISOString(),
            lastname: newTodo.dueDate,
            avatar: newTodo.user,
            plan : null,
            investment : null


          })
          .then((res) => {
            console.log(`Todo was created, document ID is ${res._id}`);
          });
        res
          .status(200)
          .json({ msg: `Todo was created, document ID is ${res._id}` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error, check console" });
      }

      break;
  }
}