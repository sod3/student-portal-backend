import Event from '../models/calander.js'; 
import Timetable from '../models/Timetable.js'; 

export const postAdminEvent = async (req, res) => {
  try {
    const { title, start, end, color } = req.body;

    if (!title || !start || !end) {
      return res.status(400).json({ message: 'Please provide all event details' });
    }

    const newEvent = new Event({
      title,
      start,
      end,
      color: color || '#991D20',
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get student events
export const getStudentEvent = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching student events:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get class timetable
export const getClassTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.find();
    res.status(200).json(timetable);
  } catch (error) {
    console.error('Error fetching timetable:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
