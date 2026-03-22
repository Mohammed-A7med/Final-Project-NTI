import { Router } from "express";

import * as roomService from "./service/room.service.js";
import { roleTypes } from "../../DB/Model/User.model.js";
import {
  authentication,
  authorization,
} from "../../middleware/auth.middleware.js";

const roomRouter = Router();

const adminAuth = [authentication, authorization(roleTypes.admin)];

roomRouter.get("/", roomService.getAllRooms);
roomRouter.get("/offers", roomService.getRoomsWithOffers);
roomRouter.get("/top-rated", roomService.getTopRatedRooms);
roomRouter.get("/:id", roomService.getRoomById);

//  Admin Routes
roomRouter.post("/", adminAuth, roomService.createRoom);
roomRouter.patch("/:id", adminAuth, roomService.updateRoomById);
roomRouter.delete("/:id", adminAuth, roomService.deleteRoomById);

export default roomRouter;