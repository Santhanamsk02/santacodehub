export type Course = {
  id: string;
  title: string;
  description: string;
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
  },
  {
    id: 'python-basics',
    title: 'Python for Beginners',
    description: 'Start your programming journey with Python.',
  },
  {
    id: 'data-structures',
    title: 'Data Structures & Algorithms',
    description: 'Efficiently organize and manage complex data structures.',
  },
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    description: 'Build modern, responsive websites and web applications.',
  },
];

export const topics: Topic[] = [
  { id: 'jb-1', courseId: 'java-basics', title: 'Introduction to Java' },
  { id: 'jb-2', courseId: 'java-basics', title: 'Variables and Data Types' },
  { id: 'jb-3', courseId: 'java-basics', title: 'Control Flow' },

  { id: 'pb-1', courseId: 'python-basics', title: 'Introduction to Python' },

  { id: 'ds-1', courseId: 'data-structures', title: 'Array' },
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
  {
    id: 'st-ds-1-1',
    topicId: 'ds-1',
    title: 'Array Creation',
    contentEn: 'An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.',
    contentTl: 'Array endrathu ore maathiriyana items-ah thodarndhu memory-la store panradhu. ',
    codeJava: `int[] myArray = new int[5]; // Creates an array of 5 integers\nString[] names = {"John", "Doe"}; // Creates and initializes an array`,
    codePython: `my_array = [0] * 5  # Creates a list of 5 zeros\nnames = ["John", "Doe"] # Creates and initializes a list`,
    imageUrl: 'https://picsum.photos/seed/array-creation/600/400',
  },
  {
    id: 'st-ds-1-2',
    topicId: 'ds-1',
    title: 'Insertion',
    contentEn: 'Insertion adds an element at a given index. This requires shifting all subsequent elements to the right.',
    contentTl: 'Insertion oru element-ah kudutha index-la add pannum. Ithuku pinnadi irukura ella elements-ayum valadhu pakkam nagathanum.',
    codeJava: `// Assuming an array with enough capacity\nint[] arr = new int[10];\narr[0] = 1; arr[1] = 2;\nint insertIndex = 1;\nint newValue = 99;\n// Shift elements\nfor (int i = 2; i > insertIndex; i--) {\n    arr[i] = arr[i - 1];\n}\narr[insertIndex] = newValue;`,
    codePython: `my_list = [1, 2, 3]\nmy_list.insert(1, 99) # Inserts 99 at index 1\n# my_list is now [1, 99, 2, 3]`,
    imageUrl: 'https://picsum.photos/seed/array-insertion/600/400',
  },
  {
    id: 'st-ds-1-3',
    topicId: 'ds-1',
    title: 'Deletion',
    contentEn: 'Deletion removes an element from a given index. This requires shifting all subsequent elements to the left.',
    contentTl: 'Deletion oru element-ah kudutha index-la irundhu remove pannum. Ithuku pinnadi irukura ella elements-ayum edhadhu pakkam nagathanum.',
    codeJava: `// Assuming an array [1, 99, 2]\nint[] arr = {1, 99, 2};\nint deleteIndex = 1;\n// Shift elements\nfor (int i = deleteIndex; i < arr.length - 1; i++) {\n    arr[i] = arr[i + 1];\n}\n// Last element can be set to a default value like 0`,
    codePython: `my_list = [1, 99, 2, 3]\nmy_list.pop(1) # Removes element at index 1\ndel my_list[1] # Another way to delete\n# my_list is now [1, 3]`,
    imageUrl: 'https://picsum.photos/seed/array-deletion/600/400',
  },
  {
    id: 'st-ds-1-4',
    topicId: 'ds-1',
    title: 'Traversal',
    contentEn: 'Traversal is the process of visiting each element in the array exactly once.',
    contentTl: 'Traversal-na array-la irukura ovvoru element-ayum sariya oru murai visit panradhu.',
    codeJava: `int[] arr = {1, 2, 3, 4, 5};\nfor (int i = 0; i < arr.length; i++) {\n    System.out.println(arr[i]);\n}\n// Using enhanced for loop\nfor (int element : arr) {\n    System.out.println(element);\n}`,
    codePython: `my_list = [1, 2, 3, 4, 5]\nfor element in my_list:\n    print(element)`,
    imageUrl: 'https://picsum.photos/seed/array-traversal/600/400',
  },
  {
    id: 'st-ds-1-5',
    topicId: 'ds-1',
    title: 'Left Rotation',
    contentEn: 'A left rotation operation on an array shifts each of the array\'s elements one unit to the left.',
    contentTl: 'Oru array-la left rotation operation panna, ovvoru element-um oru unit edhadhu pakkam nagarum.',
    codeJava: `void leftRotate(int arr[], int d) {\n    int n = arr.length;\n    int[] temp = new int[d];\n    for (int i = 0; i < d; i++)\n        temp[i] = arr[i];\n    for (int i = d; i < n; i++)\n        arr[i - d] = arr[i];\n    for (int i = 0; i < d; i++)\n        arr[i + n - d] = temp[i];\n}`,
    codePython: `def left_rotate(arr, d):\n    n = len(arr)\n    d = d % n\n    return arr[d:] + arr[:d]`,
    imageUrl: 'https://picsum.photos/seed/left-rotation/600/400',
  },
  {
    id: 'st-ds-1-6',
    topicId: 'ds-1',
    title: 'Right Rotation',
    contentEn: 'A right rotation operation on an array shifts each of the array\'s elements one unit to the right.',
    contentTl: 'Oru array-la right rotation operation panna, ovvoru element-um oru unit valadhu pakkam nagarum.',
    codeJava: `void rightRotate(int arr[], int d) {\n    int n = arr.length;\n    d = d % n;\n    int[] temp = new int[n - d];\n    for (int i = 0; i < n - d; i++)\n        temp[i] = arr[i];\n    for (int i = n - d; i < n; i++)\n        arr[i - (n - d)] = arr[i];\n    for (int i = 0; i < n - d; i++)\n        arr[i + d] = temp[i];\n}`,
    codePython: `def right_rotate(arr, d):\n    n = len(arr)\n    d = d % n\n    return arr[n-d:] + arr[:n-d]`,
    imageUrl: 'https://picsum.photos/seed/right-rotation/600/400',
  },
];
