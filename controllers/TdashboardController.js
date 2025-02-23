import TeacherDashboard from '../models/TeacherDashboard.js';

// Get attendance for courses (using batchAttendance array)
export const getCoursesAttendance = async (req, res) => {
  try {
    const dashboard = await TeacherDashboard.findOne({ teacherId: req.user.id });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    res.json({ batchAttendance: dashboard.batchAttendance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get semester attendance (for example, summing attendance counts)
export const getSemesterAttendance = async (req, res) => {
  try {
    const dashboard = await TeacherDashboard.findOne({ teacherId: req.user.id });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    // Example: Summing attendance counts for semester
    const totalAttendance = dashboard.batchAttendance.reduce(
      (sum, batch) => sum + (batch.attendanceCount || 0),
      0
    );
    res.json({ totalSemesterAttendance: totalAttendance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get upcoming course schedules (assuming classTime and classDate)
export const getCoursesSchedule = async (req, res) => {
  try {
    const dashboard = await TeacherDashboard.findOne({ teacherId: req.user.id });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    res.json({ classTime: dashboard.classTime, classDate: dashboard.classDate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get courses weightage (assuming this information might be stored in the courses subdocument)
export const getCoursesWeightage = async (req, res) => {
  try {
    const dashboard = await TeacherDashboard.findOne({ teacherId: req.user.id });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    // This is an example. Adjust based on how weightage is stored.
    const weightageInfo = dashboard.courses.map(course => ({
      courseName: course.courseName,
      weightage: course.weightage || 'N/A'
    }));
    res.json({ coursesWeightage: weightageInfo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get monthly calendar data (for instance, classDate and classTime information)
export const getMonthlyCalendar = async (req, res) => {
  try {
    const dashboard = await TeacherDashboard.findOne({ teacherId: req.user.id });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    res.json({
      calendar: {
        classDate: dashboard.classDate,
        classTime: dashboard.classTime
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get marks progress (example: could use studentGrades array)
export const getMarksProgress = async (req, res) => {
  try {
    const dashboard = await TeacherDashboard.findOne({ teacherId: req.user.id });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    res.json({ studentGrades: dashboard.studentGrades });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get announcements
export const getAnnouncements = async (req, res) => {
  try {
    const dashboard = await TeacherDashboard.findOne({ teacherId: req.user.id });
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    res.json({ announcements: dashboard.announcements });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
