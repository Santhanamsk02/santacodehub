export type Course = {
  id: string;
  title: string;
  description: string;
  progress: number;
};

export type Topic = {
  id: string;
  courseId: string;
  title: string;
};

export type SubTopic = {
  id: string;
  topicId: string;
  title: string;
  contentEn: string;
  contentTl: string;
  codeJava: string;
  codeC: string;
};

export const courses: Course[] = [
  {
    id: 'java-basics',
    title: 'Java Fundamentals',
    description: 'Learn the fundamentals of Java programming from scratch.',
    progress: 65,
  },
  {
    id: 'c-programming',
    title: 'C Programming Mastery',
    description: 'Master the C language for high-performance applications.',
    progress: 30,
  },
  {
    id: 'data-structures',
    title: 'Data Structures & Algorithms',
    description: 'Efficiently organize and manage complex data structures.',
    progress: 90,
  },
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    description: 'Build modern, responsive websites and web applications.',
    progress: 15,
  },
];

export const topics: Topic[] = [
  { id: 'jb-1', courseId: 'java-basics', title: 'Introduction to Java' },
  { id: 'jb-2', courseId: 'java-basics', title: 'Variables and Data Types' },
  { id: 'jb-3', courseId: 'java-basics', title: 'Control Flow' },

  { id: 'cr-1', courseId: 'c-programming', title: 'Getting Started with C' },
  { id: 'cr-2', courseId: 'c-programming', title: 'Pointers and Memory' },
];

export const subTopics: SubTopic[] = [
  {
    id: 'st-jb-1-1',
    topicId: 'jb-1',
    title: 'What is Java?',
    contentEn: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    contentTl: 'Java oru high-level, class-based, object-oriented programming language. Athuku adhigama implementation dependencies irukathu.',
    codeJava: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
    codeC: `// C doesn't have classes in the same way as Java\n// This is a simple C program\n#include <stdio.h>\n\nint main() {\n   printf("Hello, World!");\n   return 0;\n}`,
  },
  {
    id: 'st-jb-2-1',
    topicId: 'jb-2',
    title: 'Primitive Data Types',
    contentEn: 'In Java, there are eight primitive data types: byte, short, int, long, float, double, boolean, and char.',
    contentTl: 'Java-la, ettu primitive data types iruku: byte, short, int, long, float, double, boolean, and char.',
    codeJava: `int myNum = 5;               // Integer (whole number)\nfloat myFloatNum = 5.99f;    // Floating point number\nchar myLetter = 'D';         // Character\nboolean myBool = true;       // Boolean`,
    codeC: `int myNum = 5;               // Integer\nfloat myFloatNum = 5.99;     // Float\nchar myLetter = 'D';         // Character\n// C uses 1 for true and 0 for false`,
  },
    {
    id: 'st-cr-1-1',
    topicId: 'cr-1',
    title: 'Your First C Program',
    contentEn: 'The main function is the entry point of every C program. The stdio.h header file provides standard input/output functions, like printf().',
    contentTl: 'main function thaan ella C program-oda entry point. stdio.h header file-la printf() mathiri standard input/output functions irukum.',
    codeJava: `// This is Java, not C\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("This is Java!");\n    }\n}`,
    codeC: `#include <stdio.h>\n\nint main() {\n   printf("Hello from C!");\n   return 0;\n}`,
  },
];
