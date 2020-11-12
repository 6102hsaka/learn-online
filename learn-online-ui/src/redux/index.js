// for teachers
export { loginTeacher, registerTeacher, loadTeachers } from './teacher/Middleware';
export { teacherLogout } from './teacher/ActionCreators';


// for students
export { loginStudent, registerStudent, loadStudents } from './student/Middleware';
export { studentLogout } from './student/ActionCreators';

// for email
export { sendEMail } from './email/ActionCreators';

// for chat messages
export { loadMessages } from './chat/Middleware';
