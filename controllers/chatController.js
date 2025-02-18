import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";
import Message from "../models/Message.js";

/**
 * Fetch all teachers
 */
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({}, "id name avatar lastSeen email");
    res.status(200).json(teachers);
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res.status(500).json({ message: "Error fetching teachers" });
  }
};

/**
 * Fetch all students
 */
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({}, "id name avatar lastSeen email");
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Error fetching students" });
  }
};

/**
 * Get chat messages for a specific contact
 */
export const getChatMessages = async (req, res) => {
  try {
    const { contactId } = req.params;
    const messages = await Message.find({ contactId }).sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Error fetching messages" });
  }
};

/**
 * Send a message to a contact
 */
export const sendMessage = async (req, res) => {
  try {
    const { contactId } = req.params;
    const { sender, text } = req.body;

    if (!sender || !text) {
      return res.status(400).json({ message: "Sender and text are required" });
    }

    const newMessage = new Message({
      contactId,
      sender,
      text,
      createdAt: new Date(),
    });

    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Error sending message" });
  }
};
