import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Hello Hono!",
  });
});
app.post("/users", (c) => {
  return c.text("Hello Hono!");
});

export default app;
