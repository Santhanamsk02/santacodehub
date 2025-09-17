'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { courses, topics } from "@/lib/data";
import { useSearchParams } from "next/navigation";

type AdminView = 'add-course' | 'add-topic' | 'add-sub-topic';

export function AdminPageContent() {
    const searchParams = useSearchParams();
    const activeView = (searchParams.get('view') as AdminView) || 'add-course';

    const [selectedCourse, setSelectedCourse] = useState<string>(courses[0]?.id || '');

    const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCourse(e.target.value);
    }

    const filteredTopics = topics.filter(topic => topic.courseId === selectedCourse);
    
    const renderContent = () => {
        switch (activeView) {
            case 'add-course':
                return (
                    <Card className="w-full max-w-2xl">
                        <CardHeader>
                            <CardTitle>Add New Course</CardTitle>
                            <CardDescription>Create a new course to be displayed.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="course-title">Course Title</Label>
                                <Input id="course-title" placeholder="e.g. Python for Beginners" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="course-desc">Course Description</Label>
                                <Textarea id="course-desc" placeholder="A brief summary of the course." />
                            </div>
                            <Button className="w-full">Add Course</Button>
                        </CardContent>
                    </Card>
                );
            case 'add-topic':
                return (
                    <Card className="w-full max-w-2xl">
                        <CardHeader>
                            <CardTitle>Add New Topic</CardTitle>
                            <CardDescription>Add a new topic to an existing course.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="topic-title">Topic Title</Label>
                                <Input id="topic-title" placeholder="e.g. Introduction to Python" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="course-select-for-topic">Course</Label>
                                <select id="course-select-for-topic" className="w-full p-2 border rounded-md bg-transparent">
                                    {courses.map(course => (
                                        <option key={course.id} value={course.id}>{course.title}</option>
                                    ))}
                                </select>
                            </div>
                            <Button className="w-full">Add Topic</Button>
                        </CardContent>
                    </Card>
                );
            case 'add-sub-topic':
                return (
                    <Card className="w-full max-w-2xl">
                        <CardHeader>
                            <CardTitle>Add New Sub-Topic</CardTitle>
                            <CardDescription>Add a detailed lesson to a topic.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="subtopic-title">Sub-Topic Title</Label>
                                <Input id="subtopic-title" placeholder="e.g. Python Syntax" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="course-select-for-subtopic">Course</Label>
                                <select id="course-select-for-subtopic" onChange={handleCourseChange} value={selectedCourse} className="w-full p-2 border rounded-md bg-transparent">
                                    {courses.map(course => (
                                        <option key={course.id} value={course.id}>{course.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="topic-select">Topic</Label>
                                <select id="topic-select" className="w-full p-2 border rounded-md bg-transparent">
                                    {filteredTopics.map(topic => (
                                        <option key={topic.id} value={topic.id}>{topic.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subtopic-content-en">Content (English)</Label>
                                <Textarea id="subtopic-content-en" placeholder="Lesson content in English." />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="subtopic-content-tl">Content (Tanglish)</Label>
                                <Textarea id="subtopic-content-tl" placeholder="Lesson content in Tanglish." />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subtopic-code-java">Java Code</Label>
                                <Textarea id="subtopic-code-java" placeholder="'''java\n// your code here\n'''" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subtopic-code-python">Python Code</Label>
                                <Textarea id="subtopic-code-python" placeholder="'''python\n# your code here\n'''" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subtopic-image-url">Image URL</Label>
                                <Input id="subtopic-image-url" placeholder="https://example.com/image.png" />
                            </div>
                            <Button className="w-full">Add Sub-Topic</Button>
                        </CardContent>
                    </Card>
                );
            default:
                return null;
        }
    }

    return (
        <div className="flex w-full">
             <div className="flex-1 flex justify-center p-4">
                {renderContent()}
            </div>
        </div>
    );
}
