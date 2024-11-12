const zod =require("zod");
 
const createTodo = zod.object({
    ttile:zod.string(),
    description:zod.string()
})

const updateTodo = zod.object({
    id:zod.string(),
})

module.export={
    createTodo:createTodo,
    updateTodo:updateTodo
}