export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  ONBOARDING: "/onboarding",
  DASHBOARD: "/dashboard",
  AI_CHAT: "/ai-chat",
  CONVERSATION_CHAT: "/ai-chat/session",
  SPEAKING: "/speaking",
  CONVERSATION_SESSION: "/speaking/session",
  SPEAKING_SUMMARY: "/speaking/summary",
  SPEAKING_HISTORY_DETAIL: "/speaking/history/:id",
  LESSONS: "/lessons",
  LESSON_DETAIL: "/lessons/:id",
  GRAMMAR: "/grammar",
  VOCABULARY: "/vocabulary",
  LISTENING: "/listening",
  PROGRESS: "/progress",
  ACHIEVEMENTS: "/achievements",
  NOTIFICATIONS: "/notifications",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  HELP: "/help",
  ABOUT: "/about",

  // Super Admin
  ADMIN_LOGIN: "/admin/login",
  ADMIN_FORGOT_PASSWORD: "/admin/forgot-password",
  ADMIN_VERIFY_OTP: "/admin/verify-otp",
  ADMIN_RESET_PASSWORD: "/admin/reset-password",
  ADMIN_DASHBOARD: "/admin/dashboard",

  // School Admin
  SCHOOL_ADMIN_LOGIN: "/school-admin/login",
  SCHOOL_ADMIN_FORGOT_PASSWORD: "/school-admin/forgot-password",
  SCHOOL_ADMIN_VERIFY_OTP: "/school-admin/verify-otp",
  SCHOOL_ADMIN_RESET_PASSWORD: "/school-admin/reset-password",
  SCHOOL_ADMIN_DASHBOARD: "/school-admin/dashboard",

  // Teacher
  TEACHER_LOGIN: "/teacher/login",
  TEACHER_FORGOT_PASSWORD: "/teacher/forgot-password",
  TEACHER_VERIFY_OTP: "/teacher/verify-otp",
  TEACHER_RESET_PASSWORD: "/teacher/reset-password",
  TEACHER_DASHBOARD: "/teacher/dashboard",
  TEACHER_STUDENTS: "/teacher/students",
  TEACHER_STUDENT_DETAILS: "/teacher/students/:studentId",
  TEACHER_ANALYTICS: "/teacher/analytics",
  TEACHER_REPORTS: "/teacher/reports",
  TEACHER_PROFILE: "/teacher/profile",

  NOT_FOUND: "/404",
};

export default ROUTES;

