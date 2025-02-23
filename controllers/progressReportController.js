import ProgressReport from '../models/progressReportModels.js';

// -------------------------------------------------------------------
// Student Progress Report Endpoints
// -------------------------------------------------------------------

// Create a new progress report for a student
export const createStudent = async (req, res) => {
  console.log('createStudent function called');
  try {
    const {
      studentId,
      subject, // Expecting an object: { teacherId, subjectName }
      gpa,
      quizzes,
      midExam,
      finalExam,
      total,
      attendance
    } = req.body;

    const newReport = new ProgressReport({
      studentId,
      subject,
      gpa,
      quizzes,
      midExam,
      finalExam,
      total,
      attendance,
      isTeacherSubjectTemplate: false  // Mark this as a student progress report
    });

    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (error) {
    console.error('Error in createStudent:', error);
    res.status(500).json({ error: error.message });
  }
};

// Retrieve progress reports for students
// Optionally, filter by studentId via query parameters
export const getStudents = async (req, res) => {
  console.log('getStudents function called');
  try {
    const filter = { isTeacherSubjectTemplate: false };
    if (req.query.studentId) {
      filter.studentId = req.query.studentId;
    }
    const reports = await ProgressReport.find(filter)
      .populate('studentId')
      .populate('subject.teacherId'); // Assuming teacher details are in the User model
    res.json(reports);
  } catch (error) {
    console.error('Error in getStudents:', error);
    res.status(500).json({ error: error.message });
  }
};

// -------------------------------------------------------------------
// Teacher Subject Template Endpoints
// -------------------------------------------------------------------

// Create a new teacher subject template record.
// This record contains subject information but is not associated with a specific student.
export const createTeacherSubject = async (req, res) => {
  console.log('createTeacherSubject function called');
  try {
    const { teacherId, subjectName } = req.body;
    // Create a teacher subject template record.
    // Note: We do not require a studentId here.
    const newTemplate = new ProgressReport({
      subject: { teacherId, subjectName },
      isTeacherSubjectTemplate: true
    });

    const savedTemplate = await newTemplate.save();
    res.status(201).json(savedTemplate);
  } catch (error) {
    console.error('Error in createTeacherSubject:', error);
    res.status(500).json({ error: error.message });
  }
};

// Retrieve teacher subject template records
export const getTeacherSubjects = async (req, res) => {
  console.log('getTeacherSubjects function called');
  try {
    const templates = await ProgressReport.find({ isTeacherSubjectTemplate: true });
    res.json(templates);
  } catch (error) {
    console.error('Error in getTeacherSubjects:', error);
    res.status(500).json({ error: error.message });
  }
};
