import AdminDashboard from '../models/AdminDashboard.js';

// Get overall dashboard statistics (e.g., totalStudentsCount, pendingFeePayments, totalPresentStudents)
export const getDashboardStats = async (req, res) => {
  try {
    // Assume admin dashboard is unique or fetched by an identifier from req.user if needed
    const dashboard = await AdminDashboard.findOne({ /* criteria based on req.user or global config */ });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    const stats = {
      totalStudentsCount: dashboard.totalStudentsCount,
      pendingFeePayments: dashboard.pendingFeePayments,
      totalPresentStudents: dashboard.totalPresentStudents,
    };
    res.json({ stats });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get course schedule for admin (using classTime and classDate)
export const getCoursesScheduleAdmin = async (req, res) => {
  try {
    const dashboard = await AdminDashboard.findOne({ /* criteria based on req.user or global config */ });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    res.json({
      schedule: {
        classTime: dashboard.classTime,
        classDate: dashboard.classDate
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get announcements for admin dashboard
export const getAnnouncementsAdmin = async (req, res) => {
  try {
    const dashboard = await AdminDashboard.findOne({ /* criteria based on req.user or global config */ });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    res.json({ announcements: dashboard.announcements });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Optionally, get student chats or other admin-specific data if needed
export const getStudentChatsAdmin = async (req, res) => {
  try {
    const dashboard = await AdminDashboard.findOne({ /* criteria based on req.user or global config */ });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    res.json({ studentChats: dashboard.studentChats });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
