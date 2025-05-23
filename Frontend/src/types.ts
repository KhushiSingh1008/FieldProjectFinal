export interface User {
  id: string;
  _id: string;
  username: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  location?: string;
  age?: number;
  bio?: string;
  profilePicture?: string;
  emailNotifications?: boolean;
  createdAt?: Date;
  isVerified?: boolean;
  createdCourses?: string[];
}

export interface Course {
  id: string;
  _id: string;
  title: string;
  instructor: User;
  location: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
  price: number;
  rating: number;
  category: string;
  detailedDescription: string;
  syllabus?: string[];
  requirements?: string[];
  students: {
    _id: string;
    username: string;
  }[];
  reviews?: Review[];
  userRating?: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  thumbnail?: string;
  approvalStatus?: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  enrollments?: Enrollment[];
}

export interface Review {
  _id: string;
  user: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
}

export interface FormData {
  username: string;
  email: string;
  password: string;
  role: 'student' | 'instructor';
}

export interface CourseFormData {
  title: string;
  description: string;
  location: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
  price: number;
  category: string;
  detailedDescription: string;
  syllabus: string[];
  requirements: string[];
  instructor: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ProfileUpdateData {
  location?: string;
  age?: number;
  bio?: string;
  emailNotifications?: boolean;
}

export interface ProfilePictureResponse {
  user: User;
  message?: string;
}

export interface Enrollment {
  _id: string;
  student: string | User;
  course: string | Course;
  enrollmentDate: Date;
  paymentDetails?: {
    paymentId: string;
    amount: number;
    paymentMethod: string;
    date: Date;
  };
} 