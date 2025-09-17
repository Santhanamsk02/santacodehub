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
  codePython: string;
  imageUrl: string;
};

export const courses: Course[] = [
  {
    id: 'java-basics',
    title: 'Java Fundamentals',
    description: 'Learn the fundamentals of Java programming from scratch.',
    progress: 65,
  },
  {
    id: 'python-basics',
    title: 'Python for Beginners',
    description: 'Start your programming journey with Python.',
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

  { id: 'pb-1', courseId: 'python-basics', title: 'Introduction to Python' },
];

export const subTopics: SubTopic[] = [
  {
    id: 'st-jb-1-1',
    topicId: 'jb-1',
    title: 'What is Java?',
    contentEn: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    contentTl: 'Java oru high-level, class-based, object-oriented programming language. Athuku adhigama implementation dependencies irukathu.',
    codeJava: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
    codePython: `print("Hello, World!")`,
    imageUrl: 'https://picsum.photos/seed/java-concept/600/400',
  },
  {
    id: 'st-jb-2-1',
    topicId: 'jb-2',
    title: 'Primitive Data Types',
    contentEn: 'In Java, there are eight primitive data types: byte, short, int, long, float, double, boolean, and char.',
    contentTl: 'Java-la, ettu primitive data types iruku: byte, short, int, long, float, double, boolean, and char.',
    codeJava: `int myNum = 5;               // Integer (whole number)\nfloat myFloatNum = 5.99f;    // Floating point number\nchar myLetter = 'D';         // Character\nboolean myBool = true;       // Boolean`,
    codePython: `my_num = 5               # Integer\nmy_float_num = 5.99    # Float\nmy_letter = 'D'          # String\nmy_bool = True           # Boolean`,
    imageUrl: 'https://picsum.photos/seed/data-types/600/400',
  },
    {
    id: 'st-pb-1-1',
    topicId: 'pb-1',
    title: 'Your First Python Program',
    contentEn: 'The print() function is the easiest way to display output in Python. It prints the specified message to the screen.',
    contentTl: 'print() function vechu output display panradhu romba easy. Athu sonna message-ah screen-la print pannum.',
    codeJava: `// This is Java, not Python\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("This is Java!");\n    }\n}`,
    codePython: `# This is a comment in Python\nprint("Hello from Python!")`,
    imageUrl: 'https://picsum.photos/seed/python-program/600/400',
  },
];
