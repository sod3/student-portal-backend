import Announcement from '../models/announcement.js';
// import nodemailer from 'nodemailer'; // Uncomment and configure if using nodemailer

// Create a new announcement
export const createAnnouncement = async (req, res) => {
  try {
    console.log('createAnnouncement function called');
    const { announcementBy, text, image, files } = req.body;
    // Create new announcement document; date and time are set by default
    const newAnnouncement = new Announcement({
      announcementBy,
      text,
      image,
      files
    });
    const savedAnnouncement = await newAnnouncement.save();
    res.status(201).json(savedAnnouncement);
  } catch (error) {
    console.error('Error in createAnnouncement:', error);
    res.status(500).json({ error: error.message });
  }
};

// Edit an existing announcement
export const editAnnouncement = async (req, res) => {
  try {
    console.log('editAnnouncement function called');
    const { id } = req.params;
    const updateData = req.body;
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });
    if (!updatedAnnouncement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    res.json(updatedAnnouncement);
  } catch (error) {
    console.error('Error in editAnnouncement:', error);
    res.status(500).json({ error: error.message });
  }
};

// View all announcements (optionally, you can paginate results)
export const viewAnnouncements = async (req, res) => {
  try {
    console.log('viewAnnouncements function called');
    const announcements = await Announcement.find().sort({ date: -1 });
    res.json(announcements);
  } catch (error) {
    console.error('Error in viewAnnouncements:', error);
    res.status(500).json({ error: error.message });
  }
};

// Delete an announcement
export const deleteAnnouncement = async (req, res) => {
  try {
    console.log('deleteAnnouncement function called');
    const { id } = req.params;
    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);
    if (!deletedAnnouncement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    res.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    console.error('Error in deleteAnnouncement:', error);
    res.status(500).json({ error: error.message });
  }
};

// Filter announcements by date range
export const filterAnnouncementsByDate = async (req, res) => {
  try {
    console.log('filterAnnouncementsByDate function called');
    const { startDate, endDate } = req.query;
    if (!startDate || !endDate) {
      return res.status(400).json({ message: 'startDate and endDate are required' });
    }
    // Convert query params to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);
    // Find announcements within the date range
    const announcements = await Announcement.find({
      date: { $gte: start, $lte: end }
    }).sort({ date: -1 });
    res.json(announcements);
  } catch (error) {
    console.error('Error in filterAnnouncementsByDate:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get announcements intended for students
export const getStudentAnnouncements = async (req, res) => {
  try {
    console.log('getStudentAnnouncements function called');
    // Example logic: Return all announcements created by teachers
    // You might use req.user.role or a similar property to filter based on creator's role
    const announcements = await Announcement.find().sort({ date: -1 });
    res.json(announcements);
  } catch (error) {
    console.error('Error in getStudentAnnouncements:', error);
    res.status(500).json({ error: error.message });
  }
};

// Send announcement email
export const sendAnnouncementEmail = async (req, res) => {
  try {
    console.log('sendAnnouncementEmail function called');
    const { emailList, announcementId } = req.body;
    if (!emailList || !announcementId) {
      return res.status(400).json({ message: 'Email list and announcementId are required' });
    }
    
    const announcement = await Announcement.findById(announcementId);
    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    
    // Placeholder email sending logic. You can configure nodemailer or any other email service.
    // Example using nodemailer (uncomment and configure as needed):
    /*
    const transporter = nodemailer.createTransport({
      host: 'your_email_host',
      port: 587,
      secure: false,
      auth: {
        user: 'your_email@example.com',
        pass: 'your_password'
      }
    });
    
    const mailOptions = {
      from: 'your_email@example.com',
      to: emailList,
      subject: 'New Announcement',
      text: announcement.text,
      // optionally include html, attachments, etc.
    };
    
    await transporter.sendMail(mailOptions);
    */
    
    // Simulate email sent
    res.json({ message: 'Announcement email sent successfully (simulation)' });
  } catch (error) {
    console.error('Error in sendAnnouncementEmail:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get announcements intended for teachers
export const getTeacherAnnouncements = async (req, res) => {
  try {
    console.log('getTeacherAnnouncements function called');
    // Example: If a teacher should only see announcements they created or are meant for them,
    // you can filter by req.user.id or another field. Here we return all announcements.
    const announcements = await Announcement.find().sort({ date: -1 });
    res.json(announcements);
  } catch (error) {
    console.error('Error in getTeacherAnnouncements:', error);
    res.status(500).json({ error: error.message });
  }
};
