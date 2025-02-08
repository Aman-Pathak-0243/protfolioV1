import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { sendContactNotification } from "./mail";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const message = insertMessageSchema.parse(req.body);
      const result = await storage.createMessage(message);
      console.log(`New message received from ${result.name} (${result.email})`);

      // Send email notification
      const emailSent = await sendContactNotification({
        name: result.name,
        email: result.email,
        message: result.message
      });

      if (!emailSent) {
        console.warn("Failed to send email notification");
      }

      res.json(result);
    } catch (error) {
      console.error("Error processing contact message:", error);
      res.status(400).json({ error: "Invalid message data" });
    }
  });

  app.get("/api/messages", async (_req, res) => {
    try {
      const messages = await storage.getMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}