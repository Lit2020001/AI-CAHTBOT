import { Router } from "express";
import userRoutes from "./user-routes";
import chatRoutes from "./chat-routes";

 const appRouter = Router();

 appRouter.use("/user",userRoutes);  //domain/api/v1/user
 appRouter.use("/chats",chatRoutes); //domain/api/v1/chat

 export default appRouter;

